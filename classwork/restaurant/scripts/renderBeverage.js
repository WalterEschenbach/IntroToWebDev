let bevRow = document.getElementById('bev-row');
let bevHTML = '';

const BEV = [
    {
        name: 'Bergamot Quince Gimlet',
        description: 'Roku gin, compass box glasgow blend scotch, italicus, quincelime cordial. Tart citrus, refreshing with a floral and lightly smoky finish',
        price: 10.99
    },
    {
        name: 'Meyer Lemon Vodka Martini',
        description: 'Meyer lemon infused grey goose vodka, fino sherry, cap corse blanc quinquina, olive. Winter citrus, and a frech aperitif paired together for a delightful martini',
        price: 12.50
    },
    {
        name: 'Apple Whiskey Sour',
        description: 'Very old barton bourbon, novo fogo tanager cachaça, fuji apple, cardamaro, lemon. Fresh orchard fruit with a bourbon backbone and a touch of Brazilian sugarcane',
        price: 10.99
    },
    {
        name: 'Brandy Old Fashioned',
        description: 'Sacred bond brandy, calvados, smoked maple, cardamom bitters. American and French apple brandy paired with maple and aromatic spice',
        price: 11.99
    }
]

BEV.forEach(item=>{
    bevHTML += 
    `
    <div class="menu-item col-lg-4 col-md-6 col-sm-12">
        <h3 class="text-center">${item.name}</h3>
        <p>${item.description}</p>
        <p><strong>$${item.price}</strong></p>
    </div>
    `;
})


bevRow.innerHTML = bevHTML;