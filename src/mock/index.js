import { v4 as uuidv4 } from 'uuid';

export const users = [
  {
    id: 1,
    name: 'João Barbosa',
    icon: 'https://imagesofcmsprod.s3.ap-southeast-1.amazonaws.com/Jo%C3%A3o%20Barbosa1636477086467.jpg',
  },
  {
    id: 2,
    name: 'Jonas Schnelli',
    icon: 'https://imagesofcmsprod.s3.ap-southeast-1.amazonaws.com/Jonas%20Schnelli1636476461326.jpg',
  },
  {
    id: 3,
    name: 'Andrew Chow',
    icon: 'https://imagesofcmsprod.s3.ap-southeast-1.amazonaws.com/Andrew%20Chow1636476341966.jpeg',
  },
  {
    id: 4,
    name: 'Cory Fields',
    icon: 'https://imagesofcmsprod.s3.ap-southeast-1.amazonaws.com/Cory%20Fields1637547782000.png',
  },
  {
    id: 5,
    name: 'Gavin Andresen',
    icon: 'https://imagesofcmsprod.s3.ap-southeast-1.amazonaws.com/Daniel%20Folkinshteyn1637547904282.jpg',
  },
  {
    id: 6,
    name: 'Martti Malmi',
    icon: 'https://imagesofcmsprod.s3.ap-southeast-1.amazonaws.com/Martti%20Malmi1636477128377.jpg',
  },
  {
    id: 7,
    name: 'Laszlo Hanyecz',
    icon: 'https://imagesofcmsprod.s3.ap-southeast-1.amazonaws.com/Laszlo%20Hanyecz1636477102054.jpg',
  },
];

export const mockTasks = [
  {
    id: uuidv4(),
    content: 'First task First task First task',
    title: 'First task First task First task',
    estimateTime: '2022-05-11 15:33:20',
    priority: 1,
    assignee: users.slice(0, 2),
  },

  {
    id: uuidv4(),
    content: 'Second task',
    title: 'Second task',
    estimateTime: '2022-05-11 15:33:20',
    priority: 2,
    assignee: users.slice(1, 3),
  },
  {
    id: uuidv4(),
    content: 'Third task',
    title: 'Third task',
    estimateTime: '2022-05-11 15:33:20',
    priority: 5,
    assignee: users.slice(1, 4),
  },
  {
    id: uuidv4(),
    content: 'Fourth task',
    title: 'Fourth task',
    estimateTime: '2022-05-11 15:33:20',
    priority: 4,
    assignee: users.slice(0, 6),
  },
  {
    id: uuidv4(),
    content: 'Fifth task',
    title: 'Fifth task',
    estimateTime: '2022-05-11 15:33:20',
    priority: 3,
    assignee: users.slice(3, 5),
  },
  {
    id: uuidv4(),
    content: 'Six task',
    title: 'Six task',
    estimateTime: '2022-05-11 12:33:20',
    priority: 3,
    assignee: users.slice(3, 5),
  },
  {
    id: uuidv4(),
    content: 'Serven task',
    title: 'Serven task',
    estimateTime: '2022-05-11 5:33:20',
    priority: 3,
    assignee: users.slice(3, 5),
  },
];
