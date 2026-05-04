const RESTAURANT = {
  name: 'BurgerHouse',
  rating: 4.1,
  reviewCount: 317,
  deliveryTime: '25–40 Min.',
  deliveryPrice: 2.49,
  minOrder: 12.0,
};

const MENU_DATA = [
  {
    id: 'burger',
    name: 'Burger & Sandwiches',
    icon: 'assets/icons/icon-burger-cat.png',
    items: [
      { id: 1, name: 'Veggie Mushroom Black Burger', description: 'Mixed green salad, Tomatoes, Edamame, Mushrooms', price: 16.90, image: 'assets/dishes/dish-veggie-mushroom-burger.jpg' },
      { id: 2, name: 'All Meat Burger', description: 'Beef, Bacon, Dill pickles, Smoked cheese, Ketchup, BBQ sauce', price: 15.90, image: 'assets/dishes/dish-all-meat-burger.jpg' },
      { id: 3, name: 'Beef Red Burger', description: 'Beef, Cheese, Tomatoes, Lettuce, Onion', price: 14.90, image: 'assets/dishes/dish-beef-red-burger.jpg' },
      { id: 4, name: 'Big Chicken Burger', description: 'Chicken, Cheese, Tomatoes, Lettuce, Onion, Bell pepper', price: 15.90, image: 'assets/dishes/dish-big-chicken-burger.jpg' },
    ],
  },
  {
    id: 'pizza',
    name: 'Pizza (30cm)',
    icon: 'assets/icons/icon-pizza-cat.png',
    items: [
      { id: 5, name: 'Pizza Margherita', description: 'Tomato Sauce, Mozzarella', price: 11.90, image: 'assets/dishes/dish-pizza-margherita.jpg' },
      { id: 6, name: 'Pizza Chorizo', description: 'Tomato slices, Mozzarella, Chorizo', price: 13.90, image: 'assets/dishes/dish-pizza-chorizo.jpg' },
      { id: 7, name: 'Funghi', description: 'Red onion, Olives, Button Mushrooms, Mozzarella', price: 12.90, image: 'assets/dishes/dish-pizza-funghi.jpg' },
      { id: 8, name: 'Quattro Formaggi with Chicken', description: 'Chicken, Mozzarella, Gorgonzola, Fontina, Parmigiano Reggiano', price: 15.90, image: 'assets/dishes/dish-pizza-quattro-formaggi.jpg' },
    ],
  },
  {
    id: 'salat',
    name: 'Salad',
    icon: 'assets/icons/icon-salad-cat.png',
    items: [
      { id: 9,  name: 'Warm Beef Arugula Salad', description: 'Beef, Arugula, Field salad, Greek feta, Cherry tomatoes, Sun-dried Tomatoes, Balsamic-vinegar dressing', price: 16.90, image: 'assets/dishes/dish-salad-beef-arugula.jpg' },
      { id: 10, name: 'Mini Green Salad', description: 'Green salad, Cucumber, Carrots, Parsley, Radishes', price: 7.90, image: 'assets/dishes/dish-salad-mini-green.jpg' },
      { id: 11, name: 'Green Salad with Sea Food', description: 'Mixed greens, Cherry tomatoes, Red onion, Mussels, Squid rings, Shrimp, Dijon mustard-lemon dressing with dill', price: 16.90, image: 'assets/dishes/dish-salad-seafood.jpg' },
      { id: 12, name: 'Vegan Green Salad with Tofu', description: 'Green salad, Cherry tomatoes, Cucumber, Baby spinach, Edamame, Radishes, Bittercress, Tofu, Peanuts', price: 14.90, image: 'assets/dishes/dish-salad-vegan-tofu.jpg' },
    ],
  },
];
