export interface UserList {
  names: string;
  age: number;
}

export interface TodoList {
  id: number;
  task: string;
}

export interface DestinationData {
  id: number,
    img: {
      src: string,
      alt: string
    },
    title: string
    country: string,
    googleMapsLink: string,
    dates: string,
    text: string,
  
}
