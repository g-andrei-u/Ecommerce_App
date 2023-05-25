import computers from '../Images/computers.jpg';
import laptops from '../Images/laptops.jpg';
import OP from '../Images/Operating-Sistem.png';
import headset from '../Images/headset.jpg';
import W11 from '../Images/microsoft-windows-11.jpg';
import Asus from '../Images/asus-zenbook-duo.jpg';
import Dell from '../Images/Dell-Alienware-Aurora-R11-Gaming.jpg';
import Logi from '../Images/Logitech-G733-Lightspeed-Wireless.jpg';

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
        name: 'operating systems',
        items: '3'
    },

    {
        id: 4,
        cover: headset,
        name: 'Headset',
        items: '2'
    }
]

export const products = [
    {
      id: 1,
      cover: W11,
      title: "Windows 11 Pro",
      author: "Microsoft",
      price: '€30.5',
      category: "operating systems",
      qty: 0,
    },

    {
      id: 2,
      cover: Asus,
      title: "Asus Zenbook Duo",
      author: "Asus",
      price: '€1500.0',
      category: "Laptops",
      qty: 0,
    },

    {
      id: 3,
      cover: Dell,
      title: "Dell Alienware Aurora R11 Gaming",
      author: "Dell",
      price: '€1123.0',
      category: "Computers",
      qty: 0,
    },

    {
      id: 4,
      cover: Logi,
      title: "Logitech G733 Lightspeed Wireless",
      author: "Logitech",
      price: '€99.9',
      category: "Headset",
      qty: 0,
    }
  ]