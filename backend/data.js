import bcrypt from 'bcryptjs';

const data = {
    users: [{
        name: "Marcel",
        email: "admin@example.com",
        password: bcrypt.hashSync('12345', 8),
        isAdmin: true,
    },
    {
        name: "Ukaa",
        email: "user@example.com",
        password: bcrypt.hashSync('12345', 8),
        isAdmin:false,
    },
    ],

    products: [
        {
            
            name:'Wild burger',
            category:'pastries',
            image: '/images/p1.jpg',
            price: 10,
            
            brand: 'generic',
            countInStock:3,
            description: 'high quality product'
        },
       
        {
            name:'Fried Rice',
            category:'Rice',
            image: '/images/p2.jpg',
            
            countInStock: 1,
            
            brand: 'generic',
            price: 5,
            description: 'high quality product'
        },
        {
            name:'Buttery smooth Ice-cream',
            category:'ice-cream',
            image: '/images/p3.jpg',
            price: 25,
            
            brand: 'generic',
            countInStock:6,
            description: 'high quality product'
        },
        {
            name:'Oven fresh Meat-Pie',
            category:'pastries',
            image: '/images/p4.jpg',
            price: 15,
            
            brand: 'generic',
            countInStock:8,
            description: 'high quality product'
        },
        {
            name:'Bottle Water',
            category:'drinks',
            image: '/images/p5.jpg',
            price: 2,
            brand: 'Aqua-rapha',
            
            
            countInStock:0,
            description: 'high quality product'
        },
    ]
}

export default data;