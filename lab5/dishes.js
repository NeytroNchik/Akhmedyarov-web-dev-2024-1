const dishes = [
    // Супы
    { keyword: 'gazpacho', name: 'Гаспачо', price: 195, category: 'soup', kind: 'veg', count: '350 г', image: 'img/soups/gazpacho.jpg' },
    { keyword: 'mushroomsoup', name: 'Грибной суп-пюре', price: 185, category: 'soup', kind: 'veg', count: '330 г', image: 'img/soups/mushroom_soup.jpg' },
    { keyword: 'norwegian', name: 'Норвежский суп', price: 270, category: 'soup', kind: 'fish', count: '330 г', image: 'img/soups/norwegian_soup.jpg' },
    { keyword: 'ramen', name: 'Рамен', price: 375, category: 'soup', kind: 'meat', count: '425 г', image: 'img/soups/ramen.jpg' },
    { keyword: 'tomyam', name: 'Том ям с креветками', price: 650, category: 'soup', kind: 'fish', count: '500 г', image: 'img/soups/tomyum.jpg' },
    { keyword: 'chickensoup', name: 'Куриный суп', price: 330, category: 'soup', kind: 'meat', count: '350 г', image: 'img/soups/chicken.jpg' },

    // Главное блюдо
    { keyword: 'lasagna', name: 'Лазанья', price: 385, category: 'main', kind: 'veg', count: '310 г', image: 'img/main_course/lasagna.jpg' },
    { keyword: 'friedpotatoes', name: 'Жареная картошка с грибами', price: 150, category: 'main', kind: 'veg', count: '250 г', image: 'img/main_course/friedpotatoeswithmushrooms1.jpg' },
    { keyword: 'chickencutlet', name: 'Котлеты из курицы с пюре', price: 225, category: 'main', kind: 'meat', count: '280 г', image: 'img/main_course/chickencutletsandmashedpotatoes.jpg' },
    { keyword: 'fishcutlet', name: 'Рыбная котлета с рисом', price: 320, category: 'main', kind: 'fish', count: '270 г', image: 'img/main_course/fishrice.jpg' },
    { keyword: 'shrimpasta', name: 'Паста с креветками', price: 340, category: 'main', kind: 'fish', count: '280 г', image: 'img/main_course/shrimppasta.jpg' },
    { keyword: 'pizza', name: 'Пицца Маргарита', price: 450, category: 'main', kind: 'veg', count: '470 г', image: 'img/main_course/pizza.jpg' },

    // Салаты и стартеры
    { keyword: 'caesar', name: 'Цезарь с курицей', price: 370, category: 'salad', kind: 'meat', count: '220 г', image: 'img/salads_starters/caesar.jpg' },
    { keyword: 'caprese', name: 'Капрезе с моцареллой', price: 350, category: 'salad', kind: 'veg', count: '235 г', image: 'img/salads_starters/caprese.jpg' },
    { keyword: 'tunasalad', name: 'Салат с тунцом', price: 480, category: 'salad', kind: 'fish', count: '250 г', image: 'img/salads_starters/tunasalad.jpg' },
    { keyword: 'frenchfries1', name: 'Картофель фри с соусом Цезарь', price: 280, category: 'salad', kind: 'veg', count: '235 г', image: 'img/salads_starters/frenchfries1.jpg' },
    { keyword: 'frenchfries2', name: 'Картофель фри с кетчупом', price: 260, category: 'salad', kind: 'veg', count: '235 г', image: 'img/salads_starters/frenchfries2.jpg' },
    { keyword: 'saladwhitegreens', name: 'Салат с зелеными овощами', price: 330, category: 'salad', kind: 'veg', count: '220 г', image: 'img/salads_starters/tunasalad.jpg' },

    // Напитки
    { keyword: 'orangejuice', name: 'Апельсиновый сок', price: 120, category: 'drink', kind: 'cold', count: '300 мл', image: 'img/beverages/orangejuice.jpg' },
    { keyword: 'applejuice', name: 'Яблочный сок', price: 90, category: 'drink', kind: 'cold', count: '300 мл', image: 'img/beverages/applejuice.jpg' },
    { keyword: 'carrotjuice', name: 'Морковный сок', price: 110, category: 'drink', kind: 'cold', count: '300 мл', image: 'img/beverages/carrotjuice.jpg' },
    { keyword: 'cappuccino', name: 'Капучино', price: 180, category: 'drink', kind: 'hot', count: '300 мл', image: 'img/beverages/cappuccino.jpg' },
    { keyword: 'greentea', name: 'Зеленый чай', price: 100, category: 'drink', kind: 'hot', count: '300 мл', image: 'img/beverages/greentea.jpg' },
    { keyword: 'tea', name: 'Чёрный чай', price: 90, category: 'drink', kind: 'hot', count: '300 мл', image: 'img/beverages/tea.jpg' },

    // Десерты
    { keyword: 'baklava', name: 'Пахлава', price: 220, category: 'dessert', kind: 'small', count: '300 г', image: 'img/desserts/baklava.jpg' },
    { keyword: 'cheesecake', name: 'Чизкейк', price: 240, category: 'dessert', kind: 'small', count: '125 г', image: 'img/desserts/checheesecake.jpg' },
    { keyword: 'chococheesecake', name: 'Шоколадный чизкейк', price: 260, category: 'dessert', kind: 'small', count: '125 г', image: 'img/desserts/chocolatecake.jpg' },
    { keyword: 'chocolatetort', name: 'Шоколадный торт', price: 270, category: 'dessert', kind: 'medium', count: '140 г', image: 'img/desserts/chocolatecake.jpg' },
    { keyword: 'donuts3', name: 'Пончики (3 шт.)', price: 410, category: 'dessert', kind: 'medium', count: '350 г', image: 'img/desserts/donuts.jpg' },
    { keyword: 'donuts6', name: 'Пончики (6 шт.)', price: 650, category: 'dessert', kind: 'large', count: '700 г', image: 'img/desserts/donuts2.jpg' }
];
