import computers from '../Images/computers.jpg';
import laptops from '../Images/laptops.jpg';
import OP from '../Images/Operating-Sistem.png';
import headset from '../Images/headset.jpg';
import W11 from '../Images/microsoft-windows-11.jpg';
import Asus from '../Images/asus-zenbook-duo.jpg';
import Dell from '../Images/Dell-Alienware-Aurora-R11-Gaming.jpg';
import Logi from '../Images/Logitech-G733-Lightspeed-Wireless.jpg';
import BannerLaptops from '../Images/banner-laptops.jpg';
import BannerHeadset from '../Images/banner-headphones.png';
import phones from '../Images/phones.jpg';
import IPhone from '../Images/iphone-12-pro.jpg';
import Galaxi from '../Images/Galaxy-S20.jpg';
import Pixel from '../Images/Google-Pixel-4-XL.jpg';
import W10 from '../Images/windows-10.png';
import MacBook from '../Images/MacBook_Pro_16.jpg';
import { FcCheckmark } from 'react-icons/fc';
import { AiOutlineClose } from 'react-icons/ai';


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
  },

  {
    id: 5,
    cover: phones,
    name: 'Phones',
    items: '12'
  }
];



export const products = [
  {
    id: 1,
    cover: W11,
    title: "Windows 11 Pro",
    author: "Microsoft",
    price: 30.5,
    category: "operating systems",
    qty: 0,
  },

  {
    id: 2,
    cover: Asus,
    title: "Asus Zenbook Duo",
    author: "Asus",
    price: 1500.0,
    category: "Laptops",
    qty: 0,
  },

  {
    id: 3,
    cover: Dell,
    title: "Dell Alienware Aurora R11 Gaming",
    author: "Dell",
    price: 1123.0,
    category: "Computers",
    qty: 0,
  },

  {
    id: 4,
    cover: Logi,
    title: "Logitech G733 Lightspeed Wireless",
    author: "Logitech",
    price: 99.9,
    category: "Headset",
    qty: 0,
  }
]



export const banner = [
  {
    id: 1,
    title1: "The New Generation of Laptops",
    title2: "Dell, Apple, Lenovo, Acer, Asus etc",
    desc: "Sales 25% Off For Members",
    cover: BannerLaptops,
  },
    
  {
    id: 2,
    title1: "HeadPhones for The End of The World",
    title2: "50+ models",
    desc: "Sale 40% Off For Members",
    cover: BannerHeadset,
  },
]



export const topProducts = [
  {
    id: 10,
    cover: IPhone,
    title: "iPhone 12",
    author: "Apple",
    price: 350.00,
    category: "Phones",
    qty: 0,
  },

  {
    id: 11,
    cover: IPhone,
    title: "iPhone 12 Pro",
    author: "Apple",
    price: 435.33,
    category: "Phones",
    qty: 0,
  },

  {
    id: 12,
    cover: Pixel,
    title: "Google Pixel 4 XL",
    author: "Google",
    price: 199.99,
    category: "Phones",
    qty: 0,
  },

  {
    id: 13,
    cover: Pixel,
    title: "Google Pixel 4",
    author: "Google",
    price: 165.00,
    category: "Phones",
    qty: 0,
  },

  {
    id: 14,
    cover: Galaxi,
    title: "Galaxy S20",
    author: "Samsung",
    price: 369.55,
    category: "Phones",
    qty: 0,
  },

  {
    id: 15,
    cover: Galaxi,
    title: "Galaxy S20",
    author: "Samsung",
    price: 269.55,
    category: "Phones",
    qty: 0,
  },

  {
    id: 16,
    cover: IPhone,
    title: "Galaxy S20",
    author: "by Blueskytechco in Mockups",
    price: 30.00,
    category: "Phones",
    qty: 0,
  },

  {
    id: 17,
    cover: Galaxi,
    title: "Galaxy S20+",
    author: "Samsung",
    price: 310.00,
    category: "Phones",
    qty: 0,
  }
]



export const price = [
  {
    id: 1,
    name: "Free Trial",
    price: "0",
    desc: "Beautifully simple prices, 14 days of free trial.",
    list: [
      {
        para: "OS Updates",
        icon: <FcCheckmark />,
      },
      {
        para: "Support And Updates",
        icon: <AiOutlineClose />,
      },
      {
        para: "Access All Discounts",
        icon: <AiOutlineClose />,
      },
      {
        para: "All Product Themes For Life",
        icon: <AiOutlineClose />,
      },
      {
        para: "30 Days Money Back",
        icon: <AiOutlineClose />,
      },
    ],
  },

  {
    id: 2,
    name: "Premium",
    price: "26",
    desc: "Declutter your mind and save time with Premium.",
    list: [
      {
        para: "OS Updates",
        icon: <FcCheckmark />,
      },
      {
        para: "Support And Updates",
        icon: <FcCheckmark />,
      },
      {
        para: "Access All Discounts",
        icon: <FcCheckmark />,
      },
      {
        para: "All Product Themes For Life",
        icon: <AiOutlineClose />,
      },
      {
        para: "30 Days Money Back",
        icon: <AiOutlineClose />,
      },
    ],
  },

  {
    id: 3,
    name: "Unlimited Access ",
    price: "49",
    desc: "Declutter your mind and save time with Premium.",
    list: [
      {
        para: "OS Updates",
        icon: <FcCheckmark />,
      },
      {
        para: "Support And Updates",
        icon: <FcCheckmark />,
      },
      {
        para: "Access All Discounts",
        icon: <FcCheckmark />,
      },
      {
        para: "All Product Themes For Life",
        icon: <FcCheckmark />,
      },
      {
        para: "30 Days Money Back",
        icon: <FcCheckmark />,
      },
    ],
  },
]



export const customer = [
  {
    id: 1,
    desc: "Congue condimentum et non eu arcu sociis aenean vivamus quisque. Porta purus urna. Massa id blandit enim cursus ante, nec consectetuer imperdiet ipsum",
    name: "John",
    post: "Developer",
  },
  {
    id: 2,
    desc: "Congue condimentum et non eu arcu sociis aenean vivamus quisque. Porta purus urna. Massa id blandit enim cursus ante, nec consectetuer imperdiet ipsum",
    name: "Steve",
    post: "Marketing Company Director",
  },
  {
    id: 3,
    desc: "Congue condimentum et non eu arcu sociis aenean vivamus quisque. Porta purus urna. Massa id blandit enim cursus ante, nec consectetuer imperdiet ipsum",
    name: "Alex",
    post: "Tech Company Director",
  },
]



export const allProducts = [
  {
    id: 1,
    cover: W11,
    title: "Windows 11 Pro",
    author: "Microsoft",
    price: 30.5,
    category: "operating systems",
    qty: 0,
  },

  {
    id: 2,
    cover: Asus,
    title: "Asus Zenbook Duo",
    author: "Asus",
    price: 1500.0,
    category: "Laptops",
    qty: 0,
  },

  {
    id: 3,
    cover: Dell,
    title: "Dell Alienware Aurora R11 Gaming",
    author: "Dell",
    price: 1123.0,
    category: "Computers",
    qty: 0,
  },

  {
    id: 4,
    cover: Logi,
    title: "Logitech G733 Lightspeed Wireless",
    author: "Logitech",
    price: 99.9,
    category: "Headset",
    qty: 0,
  },

  {
    id: 5,
    cover: W11,
    title: "Windows 11 Pro",
    author: "Microsoft",
    price: 30.5,
    category: "operating systems",
    qty: 0,
  },

  {
    id: 6,
    cover: W10,
    title: "Windows 10 Pro",
    author: "Microsoft",
    price: 25.0,
    category: "operating systems",
    qty: 0,
  },

  {
    id: 7,
    cover: Dell,
    title: "Dell Alienware Aurora R11 Gaming",
    author: "Dell",
    price: 1123.0,
    category: "Computers",
    qty: 0,
  },

  {
    id: 8,
    cover: MacBook,
    title: "MacBook Pro 16",
    author: "Apple",
    price: 1299.9,
    category: "Laptops",
    qty: 0,
  },

  {
    id: 9,
    cover: Logi,
    title: "Logitech G733 Lightspeed Wireless",
    author: "Logitech",
    price: 99.9,
    category: "Headset",
    qty: 0,
  },

  {
    id: 10,
    cover: IPhone,
    title: "iPhone 12",
    author: "Apple",
    price: 350.00,
    category: "Phones",
    qty: 0,
  },

  {
    id: 11,
    cover: IPhone,
    title: "iPhone 12 Pro",
    author: "Apple",
    price: 435.33,
    category: "Phones",
    qty: 0,
  },

  {
    id: 12,
    cover: Pixel,
    title: "Google Pixel 4 XL",
    author: "Google",
    price: 199.99,
    category: "Phones",
    qty: 0,
  },

  {
    id: 13,
    cover: Pixel,
    title: "Google Pixel 4",
    author: "Google",
    price: 165.00,
    category: "Phones",
    qty: 0,
  },

  {
    id: 14,
    cover: Galaxi,
    title: "Galaxy S20",
    author: "Samsung",
    price: 369.55,
    category: "Phones",
    qty: 0,
  },

  {
    id: 15,
    cover: Galaxi,
    title: "Galaxy S20",
    author: "Samsung",
    price: 269.55,
    category: "Phones",
    qty: 0,
  },

  {
    id: 16,
    cover: IPhone,
    title: "Galaxy S20",
    author: "by Blueskytechco in Mockups",
    price: 30.00,
    category: "Phones",
    qty: 0,
  },

  {
    id: 17,
    cover: Galaxi,
    title: "Galaxy S20+",
    author: "Samsung",
    price: 310.00,
    category: "Phones",
    qty: 0,
  }
]