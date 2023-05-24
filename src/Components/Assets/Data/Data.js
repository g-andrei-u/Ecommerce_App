import computers from '../Images/computers.jpg';
import laptops from '../Images/laptops.jpg';
import OP from '../Images/Operating-Sistem.png';
import headset from '../Images/headset.jpg';

export const navlist = [
    {
        text: 'home',
        path: '/'
    },

    {
        text: 'shop',
        path: '/shop',
    },

    {
        text: 'about us',
        path: '/about',
    },

    {
        text: 'contact us',
        path: '/contact',
    }
];

export const hero = [
    {
        id: 1,
        cover: computers,
        name: 'Computers',
        items: '5'
    },

    {
        id: 2,
        cover: laptops,
        name: 'Laptops',
        items: '7'
    },

    {
        id: 3,
        cover: OP,
        name: 'operating system',
        items: '3'
    },

    {
        id: 4,
        cover: headset,
        name: 'Headset',
        items: '2'
    }
]