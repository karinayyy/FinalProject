const bcrypt = require('bcryptjs')

module.exports = data = {
    users: [
        {
            name: 'Karina',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'notKarina',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        }
    ],
    products: [
        {
            name: 'T-Shirt1',
            category: 'Shirts',
            image: '/images/p-1.png',
            price: 120,
            brand: 'xz',
            description: 'high quality product',
            countInStock: 0,
        },
        {
            name: 'T-Shirt2',
            category: 'Shirts',
            image: '/images/p-2.png',
            price: 120,
            brand: 'xz',
            description: 'high quality product',
            countInStock: 10,
        },
        {
            name: 'T-Shirt3',
            category: 'Shirts',
            image: '/images/p-3.png',
            price: 120,
            brand: 'xz',
            description: 'high quality product',
            countInStock: 10,
        },
        {
            name: 'T-Shirt4',
            category: 'Shirts',
            image: '/images/p-4.png',
            price: 120,
            brand: 'xz',
            description: 'high quality product',
            countInStock: 10,
        },
        {
            name: 'T-Shirt5',
            category: 'Shirts',
            image: '/images/p-4.png',
            price: 90,
            brand: 'xz',
            description: 'high quality product',
            countInStock: 10,
        },
    ],
}