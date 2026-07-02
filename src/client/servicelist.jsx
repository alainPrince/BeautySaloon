// src/data/services.js
import Facial from '../assets/facial.jpg';
import Hair from '../assets/hair.jpg';
import Manicure from '../assets/pedicure.jpg';
import Bridal from '../assets/bridal.jpg';
import Message from '../assets/massage.jpg';
import hairStyle from '../assets/hairstyle.jpg';

const services = [
  { id: 1, name: "Facial Treatment", image: Facial, description: "Experience a rejuvenating facial treatment designed to cleanse.", price: 10000 },
  { id: 2, name: "Bridal Treatment", image: Bridal, description: "Look stunning on your special day with our professional bridal makeup.", price: 50000 },
  { id: 3, name: "Women's Hair Styling", image: Hair, description: "Transform your look with expert hair styling services, from elegant.", price: 5000 },
  { id: 4, name: "Manicure and Pedicure", image: Manicure, description: "Enjoy luxurious nail care treatments that keep your hands.", price: 7000 },
  { id: 5, name: "Body Massage", image: Message, description: "Relax and unwind with our therapeutic massage treatments.", price: 12000 },
  { id: 6, name: "Hair Treatment", image: hairStyle, description: "Restore strength, shine, and vitality to your hair with our professional.", price: 8000 }
];

export default services;