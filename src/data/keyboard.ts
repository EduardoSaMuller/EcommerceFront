export interface Keyboard {
    name: string;
    oldPrice:number;
    newPrice: number;
    inclusionDate: Date;
    image: string;
    quantity: number;
  }
  
  const keyboard: Keyboard = {
    name: 'Mechanical Keyboard',
    oldPrice: 119.99,
    newPrice: 99.99,
    inclusionDate: new Date('2022-01-13'),
    image: '/images/keyboard.jpg',
    quantity: 30
  };
  
  export default keyboard;