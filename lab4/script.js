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

function renderMenu() {
    const categories = ['soup', 'main', 'drink'];

    categories.forEach(category => {
        const categoryItems = dishes.filter(dish => dish.category === category);
        const sortedItems = sortDishes(categoryItems);
        const container = document.getElementById(`${category}-items`);
        container.innerHTML = sortedItems.map(dish => createDishCard(dish)).join('');
    });
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

function init() {
    renderMenu();  
    addEventListeners(); 
    updateOrderSummary(); 
}

document.addEventListener('DOMContentLoaded', init);
