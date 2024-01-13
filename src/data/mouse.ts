export interface Mouse {
    name: string;
    price: number;
    inclusionDate: Date;
    image: string;
    description: string;
  }
  
  const mouse: Mouse = {
    name: 'Mechanical Mouse',
    price: 99.99,
    inclusionDate: new Date('2022-01-13'),
    image: '/images/mouse.jpg',
    description: 'High-quality mechanical mouse with customizable RGB lighting.',
  };
  
  export default mouse;