
import React, { useState } from 'react';
import { formatPrice, formatWhatsAppMessage, CartItem } from '../utils/cartUtils';

interface OrderFormProps {
  cartItems: CartItem[];
  totalPrice: number;
  onCancel: () => void;
}

const OrderForm: React.FC<OrderFormProps> = ({ cartItems, totalPrice, onCancel }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [errors, setErrors] = useState<{name?: string; phone?: string; address?: string}>({});

  const validateForm = () => {
    const newErrors: {name?: string; phone?: string; address?: string} = {};
    
    if (!name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }
    
    if (!phone.trim()) {
      newErrors.phone = 'Telefone é obrigatório';
    } else if (!/^\d{10,11}$/.test(phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Telefone inválido (DDD + número)';
    }
    
    if (!address.trim()) {
      newErrors.address = 'Endereço é obrigatório';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    // Format the WhatsApp message
    const message = formatWhatsAppMessage(cartItems, name, phone, address);
    
    // Default WhatsApp number for the business
    const whatsappNumber = '5585991609875'; // Replace with the actual business WhatsApp number
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    // Open WhatsApp in a new window
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="flex-grow overflow-y-auto p-4">
      <h3 className="text-lg font-bold mb-4">Complete seu pedido</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Nome Completo
          </label>
          <input
            type="text"
            id="name"
            className={`w-full p-2 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Seu nome completo"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">
            WhatsApp
          </label>
          <input
            type="tel"
            id="phone"
            className={`w-full p-2 border rounded-md ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(11) 99999-9999"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
        
        <div>
          <label htmlFor="address" className="block text-sm font-medium mb-1">
            Endereço de Entrega
          </label>
          <textarea
            id="address"
            className={`w-full p-2 border rounded-md ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Rua, número, complemento, bairro, cidade"
            rows={3}
          />
          {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
        </div>
        
        <div className="pt-4 border-t">
          <div className="flex justify-between mb-2">
            <span className="font-medium">Subtotal:</span>
            <span>{formatPrice(totalPrice)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="font-medium">Taxa de Entrega:</span>
            <span>Grátis</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span>{formatPrice(totalPrice)}</span>
          </div>
        </div>
        
        <div className="flex space-x-3 pt-4">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
          >
            Voltar
          </button>
          <button
            type="submit"
            className="flex-1 py-2 bg-secondary text-primary rounded-md font-bold hover:opacity-90 transition-opacity"
          >
            Enviar pelo WhatsApp
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
