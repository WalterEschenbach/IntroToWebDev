let menuRow = document.getElementById('menu-row');
let itemHTML = '';

const MENU = [
    {
        name: 'Green Bean Crispers',
        description: 'A shareable stack of green beans, battered, seasoned and lightly fried. Served with two sauces, cool and creamy BBQ bacon ranch and a zesty horseradish',
        price: 7.99
    },
    {
        name: 'Chicken Quesadilla Grande',
        description: 'Chipotle spice is nice when it comes on grilled chicken, melted cheese, crisp bacon, freshly-made pico de gallo and a hint of chipotle pepper all tucked inside two large flour tortillas',
        price: 12.50
    },
    {
        name: 'Mozzarella Sticks',
        description: 'Golden fried and served with a tasty marinara sauce',
        price: 6.99
    },
    {
        name: 'Queso Blanco',
        description: 'Creamy white spicy queso blended with fresh tomatoes, red onion, cilantro and roasted poblanos. Served with warm tortilla chips',
        price: 4.99
    },
    {
        name: 'Spinach and Artichoke Dip',
        description: 'A warm crock of creamy spinach, tender artichokes, and melted cheeses, served with freshly-made spicy chipotle lime salsa and tortilla chips',
        price: 5.99
    },
    {
        name: 'Cheeseburger Sliders',
        description: 'Three juicy burgers topped with american cheese, onions and signature burger sauce on toasted mini buns. Served with fries',
        price: 13.99
    },
]

MENU.forEach(item=>{
    itemHTML += 
    `
    <div class="menu-item col-lg-4 col-md-6 col-sm-12">
        <h2 class="text-center">${item.name}</h2>
        <p>${item.description}</p>
        <p><strong>$${item.price}</strong></p>
    </div><!--Item1-->
    `;
})


menuRow.innerHTML = itemHTML;