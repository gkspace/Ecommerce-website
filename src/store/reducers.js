import { ADD_TO_CART, REMOVE_FROM_CART } from './actions';

const initialState = {
  cart: [],
  products : [
    { id: 1, name: 'Wireless Mouse', description: 'A high-precision wireless mouse with ergonomic design.', price: 29.99, image: 'https://imgs.search.brave.com/8DeOrb6jWLA0SdeglqnfWLRAMm0un38P9fjeFPGvW8Q/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFPRmROU1JsdUwu/anBn', rating: 4.1 },
    { id: 2, name: 'Mechanical Keyboard', description: 'Durable mechanical keyboard with customizable RGB lighting.', price: 89.99, image: 'https://imgs.search.brave.com/FDp-g0hL3TtMaXkHm2PrFrdII5jApFL6raOFERxqn8o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aXBvcHVsYXJzaG9w/LmNvbS9jZG4vc2hv/cC9wcm9kdWN0cy8z/MzkxNzQxOTg0ZmNi/Mzc4ZTQ3MGJlZjBh/ZTFlZjVjMS5qcGc_/dj0xNjg3OTM4NjE1/JndpZHRoPTE5NDY', rating: 4.7 },
    { id: 3, name: 'Bluetooth Headphones', description: 'Noise-canceling over-ear Bluetooth headphones with long battery life.', price: 199.99, image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSATYhh-w3GQZWut0Oik1QAzKvokKxcETLgAXkqcY6sN8o38f5-f54yqlSqEDh7Ws4Y88i0wt1rRQTaRuSG7gGPJCwYvdf44_aJClD15WfEaaP08FnjnjE5&usqp=CAE', rating: 4.8 },
    { id: 4, name: '4K Monitor', description: 'Ultra HD 4K monitor with vibrant colors and wide viewing angles.', price: 349.99, image: 'https://i.pcmag.com/imagery/roundups/01Y9bqNdRmGOzHcetHQG2FW-3..v1569470765.jpg', rating: 4.6 },
    { id: 5, name: 'Smartwatch', description: 'Feature-packed smartwatch with heart rate monitoring and GPS.', price: 149.99, image: 'https://gizmore.in/cdn/shop/products/SMWGHPWYHCZWASZW_0.jpg?v=1671441749&width=1080', rating: 4.4 },
    { id: 6, name: 'Gaming Chair', description: 'Comfortable gaming chair with adjustable armrests and lumbar support.', price: 229.99, image: 'https://savyahome.com/cdn/shop/products/61hGTAfXsZL.jpg?v=1694467108', rating: 4.3 },
    { id: 7, name: 'External SSD', description: 'High-speed external SSD with 1TB of storage capacity.', price: 129.99, image: 'https://m.media-amazon.com/images/I/51OPaSHrBuL._AC_UF1000,1000_QL80_.jpg', rating: 3.7 },
    { id: 8, name: 'Fitness Tracker', description: 'Compact fitness tracker with sleep tracking and step counting.', price: 49.99, image: 'https://cdn.mos.cms.futurecdn.net/Pk5ydxYo6ty2Q4SX9vznP6.jpg', rating: 3.2 },
    { id: 9, name: 'Wireless Earbuds', description: 'True wireless earbuds with deep bass and clear sound.', price: 59.99, image: 'https://m.media-amazon.com/images/I/71W73DIJLUL._AC_UF1000,1000_QL80_.jpg', rating: 4.5 },
    { id: 10, name: 'Smart Home Hub', description: 'Control your smart home devices with this intuitive smart hub.', price: 99.99, image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTSYGREYTmNELmv_xDkQy0DicSQd1AP1p7Kd6iKWKGKJG-svbfRBQzDprQOqhAaxRRncknVXn6ECvHj4n21XcaSIZ7Xu0neFU5BZ-iYIaBCAZ-EnqBG2S8y&usqp=CAE', rating: 4.6 },
    { id: 11, name: 'Portable Speaker', description: 'Compact portable speaker with powerful sound and Bluetooth connectivity.', price: 39.99, image: 'https://d287ku8w5owj51.cloudfront.net/images/products/hero/others/hero-creative-muvo-go.jpg?width=800&height=800', rating: 4.4 },
    { id: 12, name: 'Laptop Stand', description: 'Adjustable laptop stand for improved ergonomics.', price: 24.99, image: 'https://images-cdn.ubuy.co.in/644673783d89926a4b7a95d4-viglt-laptop-stand-for-desk-adjustable.jpg', rating: 4.3 },
    { id: 13, name: 'Webcam', description: 'HD webcam with built-in microphone and privacy cover.', price: 69.99, image: 'https://images-cdn.ubuy.co.in/633ac165b24f5720bc4f638c-ubuy-online-shopping.jpg', rating: 4.6 },
    { id: 14, name: 'Smart Light Bulbs', description: 'Set of smart light bulbs with customizable colors and brightness.', price: 34.99, image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR0Ql_V-ECnwx2iXqbgpLI4y0Q1QcvX5l7kLO79VgcPol9hDARzqWFbMHWDhatDWrUHsg2TNKpAzF7xpFUyZv9GpcjQ5zJE7xpt11NO8IwBliC--cI3AgsVUQ&usqp=CAE', rating: 4.7 },
    { id: 15, name: 'Tablet', description: 'High-resolution tablet with powerful processor and ample storage.', price: 299.99, image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRTkoG0N-ecuvX_0jJRPApOnCTu1L8Jm2Au_2NK3-kKt4RNjp_s1TikEQbUnujMJfOZbXC8QCpyt7cAAYhu-yOC1ExEqGkqhWYCR1gmexTuSK1uA6oE4tYV&usqp=CAEth/to/vacuum.jpg', rating: 4.4 },
    { id: 16, name: 'Smart Vacuum Cleaner', description: 'Smart vacuum cleaner with powerful suction and WiFi connectivity.', price: 249.99, image: 'https://images-cdn.ubuy.co.in/63eb28a1b4313f31a843e6f8-smart-vacuhttps://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRLwPF-eQlPyar41awST-8HrXUXDRplYVZ-eWOsQl3yvVDvmJsaNJkCc-ig_VBblzbYbbHqvmE7aBbDy8Eo92mwq04Q_SStI7ltQbYFCCGYTnJHfgZkpupKdw&usqp=CAEum-cleaner.jpg', rating: 4.5 },
    { id: 17, name: 'Electric Toothbrush', description: 'Rechargeable electric toothbrush with multiple cleaning modes.', price: 79.99, image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT9r8qjjoK7Zmgi-eSHuYldXm6b0TRuq7iohoeVrjMpQJwxYFwA77sItMuTo_4ddn2MqpnzuHUkwjyVmbSquPRJgOQq5bHQKPCFJcaNFuJq&usqp=CAE', rating: 4.3 },
    { id: 18, name: 'Streaming Stick', description: 'Stream your favorite shows and movies with this easy-to-use streaming stick.', price: 49.99, image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQkufBwiI6aSEBI3L70Q8lgIPiO1TYLbDD0dss9hZCfSL_M-9oFUWhi1sGzkZFTyiScoZDAB9x-sDvzK0jDGhD9BH0zp9hiUJLSg6N1p98GwizxkFuLvk6TbQ&usqp=CAE', rating: 4.5 },
    { id: 19, name: 'Wireless Charger', description: 'Fast wireless charger compatible with multiple devices.', price: 19.99, image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSOriAza9UlYOn8wmFqTfSFUG7OJJHW-CM4974tpZaqVpqIFpkpSUpswlzo8OkFUo_QuX0qJkWeBcdjalJSIEOjBIgXAARwpFOVwokA-knGgB_-XYruprEt&usqp=CAE', rating: 3.2 },
    { id: 20, name: 'Electric Kettle', description: 'Stainless steel electric kettle with temperature control.', price: 39.99, image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR5SwnGxI0lueBX95V0OX8VQvQGtjmhKcart9uqk6wx194xQnm6nNN_eioCICtiMHddUWbwvd1fOQ6KiWBt968cNbD7hvl_l011CjmsgIeAjVQS2arK4UzWag&usqp=CAE', rating: 4.4 },
  ]
  
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    case REMOVE_FROM_CART:
      return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };
    default:
      return state;
  }
};

export default rootReducer;
