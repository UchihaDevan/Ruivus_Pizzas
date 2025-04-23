
export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
  type: 'pizza' | 'beverage';
  extras?: string[];
}

// Save cart to localStorage
export const saveCart = (cart: CartItem[]): void => {
  localStorage.setItem('ruivus-pizza-cart', JSON.stringify(cart));
};

// Load cart from localStorage
export const loadCart = (): CartItem[] => {
  const cart = localStorage.getItem('ruivus-pizza-cart');
  return cart ? JSON.parse(cart) : [];
};

// Add item to cart
export const addToCart = (item: CartItem): CartItem[] => {
  const currentCart = loadCart();
  const existingItemIndex = currentCart.findIndex(
    (cartItem) => cartItem.id === item.id && 
                  JSON.stringify(cartItem.extras) === JSON.stringify(item.extras)
  );

  if (existingItemIndex > -1) {
    currentCart[existingItemIndex].quantity += item.quantity;
  } else {
    currentCart.push(item);
  }

  saveCart(currentCart);
  return currentCart;
};

// Remove item from cart
export const removeFromCart = (itemId: string, extras?: string[]): CartItem[] => {
  let currentCart = loadCart();
  
  if (extras && extras.length > 0) {
    currentCart = currentCart.filter(
      (item) => !(item.id === itemId && JSON.stringify(item.extras) === JSON.stringify(extras))
    );
  } else {
    currentCart = currentCart.filter((item) => item.id !== itemId);
  }
  
  saveCart(currentCart);
  return currentCart;
};

// Update item quantity
export const updateCartItemQuantity = (
  itemId: string, 
  quantity: number, 
  extras?: string[]
): CartItem[] => {
  const currentCart = loadCart();
  
  const itemIndex = currentCart.findIndex(
    (item) => item.id === itemId && 
              JSON.stringify(item.extras) === JSON.stringify(extras)
  );
  
  if (itemIndex > -1) {
    if (quantity <= 0) {
      return removeFromCart(itemId, extras);
    }
    currentCart[itemIndex].quantity = quantity;
    saveCart(currentCart);
  }
  
  return currentCart;
};

// Calculate total cart items
export const getTotalCartItems = (): number => {
  const cart = loadCart();
  return cart.reduce((total, item) => total + item.quantity, 0);
};

// Calculate total cart price
export const getTotalCartPrice = (): number => {
  const cart = loadCart();
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
};

// Format price to BRL
export const formatPrice = (price: number): string => {
  return price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
};

// Format WhatsApp message for order
export const formatWhatsAppMessage = (
  cart: CartItem[], 
  name: string, 
  phone: string, 
  address: string
): string => {
  let message = `*Novo Pedido - Ruivu's Pizzas*\n\n`;
  message += `*Cliente:* ${name}\n`;
  message += `*Telefone:* ${phone}\n`;
  message += `*Endereço:* ${address}\n\n`;
  message += `*Itens do Pedido:*\n`;
  
  cart.forEach((item) => {
    message += `- ${item.quantity}x ${item.name} ${formatPrice(item.price)} cada\n`;
    if (item.extras && item.extras.length > 0) {
      message += `  *Extras:* ${item.extras.join(', ')}\n`;
    }
  });
  
  message += `\n*Total:* ${formatPrice(getTotalCartPrice())}`;
  
  return encodeURIComponent(message);
};
