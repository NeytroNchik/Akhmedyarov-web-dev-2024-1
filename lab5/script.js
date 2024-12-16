const orderItems = {
    soup: null,
    main: null,
    drink: null
};

function sortDishes(dishes) {
    return dishes.sort((a, b) => a.name.localeCompare(b.name));
}

function createDishCard(dish) {
    return `
        <div class="item" data-dish="${dish.keyword}">
            <img src="${dish.image}" alt="${dish.name}">
            <p class="lunch_price">${dish.price}₽</p>
            <p class="lunch_name">${dish.name}</p>
            <p class="lunch_volume">${dish.count}</p>
            <button class="add-btn">Добавить</button>
        </div>
    `;
}

function updateOrderSummary() {
    let totalPrice = 0;
    let orderText = '';
    let allCategoriesEmpty = true;

    for (let category in orderItems) {
        const item = orderItems[category];
        if (item) {
            orderText += `<strong>${capitalizeFirstLetter(category)}:</strong><br>${item.name} ${item.price}₽<br><br>`;
            totalPrice += item.price;
            allCategoriesEmpty = false;  
        } else {
            orderText += `<strong>${capitalizeFirstLetter(category)}:</strong><br>Ничего не выбрано<br><br>`;
        }
    }

    if (allCategoriesEmpty) {
        orderText = '<p>Ничего не выбрано</p>';
    }

    document.getElementById('order-items').innerHTML = orderText.trim();
    document.getElementById('total-price').textContent = `${totalPrice}₽`;

    if (totalPrice > 0) {
        document.getElementById('order-summary').style.display = 'block';
    } else {
        document.getElementById('order-summary').style.display = 'none';
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function addToOrder(dish) {
    orderItems[dish.category] = dish;  
    updateOrderSummary(); 
}

function addEventListeners() {
    document.querySelectorAll('.add-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const dishKeyword = event.target.closest('.item').getAttribute('data-dish');
            const selectedDish = dishes.find(dish => dish.keyword === dishKeyword);
            addToOrder(selectedDish);  
        });
    });
}

function renderMenu() {
    const categories = ['soup', 'main', 'salad', 'drink', 'dessert'];

    categories.forEach(category => {
        const categoryItems = dishes.filter(dish => dish.category === category);
        const sortedItems = sortDishes(categoryItems);
        const container = document.getElementById(`${category}-items`);
        container.innerHTML = sortedItems.map(dish => createDishCard(dish)).join('');
    });
}

function filterDishes(category, kind) {
    const container = document.getElementById(`${category}-items`);
    const filteredItems = kind
        ? dishes.filter(dish => dish.category === category && dish.kind === kind)
        : dishes.filter(dish => dish.category === category);

    container.innerHTML = filteredItems.map(dish => createDishCard(dish)).join('');
    addEventListeners();
}

document.querySelectorAll('a[data-kind]').forEach(filter => {
    filter.addEventListener('click', (event) => {
        event.preventDefault();

        const parent = filter.parentElement;
        const category = parent.id.split('-')[1];

        // Проверка: уже ли фильтр активен
        if (filter.classList.contains('active')) {
            // Удалить класс active и показать все блюда
            filter.classList.remove('active');
            filterDishes(category, null); // null убирает фильтрацию
        } else {
            // Удалить active у всех фильтров и установить текущий
            parent.querySelectorAll('a').forEach(a => a.classList.remove('active'));
            filter.classList.add('active');

            // Применить фильтрацию
            const kind = filter.dataset.kind;
            filterDishes(category, kind);
        }
    });
});



function init() {
    renderMenu();  
    addEventListeners(); 
    updateOrderSummary(); 
}

document.addEventListener('DOMContentLoaded', init);
