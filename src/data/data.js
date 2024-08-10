export const items = [
    { 
      id: '1', 
      name: 'Urso Grande Marrom', 
      description: 'Um urso grande e fofinho de cor marrom.', 
      stock: 5, 
      price: 120.00,
      category: 'urso-grande', 
      imageUrl: '/images/urso-grande-marrom.jpg' 
    },
    { 
      id: '2', 
      name: 'Urso Pequeno Branco', 
      description: 'Um urso pequeno e delicado de cor branca.', 
      stock: 10, 
      price: 80.00,
      category: 'urso-pequeno', 
      imageUrl: '/images/urso-pequeno-branco.jpg' 
    },
    { 
      id: '3', 
      name: 'Urso Médio Cinza', 
      description: 'Um urso de tamanho médio e cor cinza, perfeito para abraços.', 
      stock: 7, 
      price: 100.00,
      category: 'urso-medio', 
      imageUrl: '/images/urso-medio-cinza.jpg' 
    },
    { 
      id: '4', 
      name: 'Urso Pequeno Panda', 
      description: 'Um adorável urso panda pequeno, com detalhes em preto e branco.', 
      stock: 12, 
      price: 85.00,
      category: 'urso-pequeno', 
      imageUrl: '/images/urso-pequeno-panda.jpg' 
    },
    { 
      id: '5', 
      name: 'Urso Grande Polar', 
      description: 'Um urso polar grande, macio e perfeito para abraçar.', 
      stock: 3, 
      price: 150.00,
      category: 'urso-grande', 
      imageUrl: '/images/urso-grande-polar.jpg' 
    },
    { 
      id: '6', 
      name: 'Urso Médio Caramelo', 
      description: 'Um urso médio de cor caramelo, com uma textura suave.', 
      stock: 9, 
      price: 110.00,
      category: 'urso-medio', 
      imageUrl: '/images/urso-medio-caramelo.jpg' 
    }
  ];
  
  export function getItemsByCategory(categoryId) {
    return categoryId ? items.filter(item => item.category === categoryId) : items;
  }
  
  export function getItemById(itemId) {
    return items.find(item => item.id === itemId);
  }
  