import React from 'react';

interface FoodModalProps {
  isOpen: boolean;
  onClose: () => void;
  img: string;
  title: string;
  price: string;
  onAddToCart: (imgElement?: HTMLImageElement) => void;
}

const FoodModal: React.FC<FoodModalProps> = ({ isOpen, onClose, img, title, price, onAddToCart }) => {
  if (!isOpen) return null;

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    const modalImg = e.currentTarget.parentElement?.querySelector('#modalImg') as HTMLImageElement;
    onAddToCart(modalImg);
    onClose();
  };

  return (
    <div className="food-modal" id="foodModal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span onClick={onClose}>✖</span>
        <img id="modalImg" src={img} alt={title} referrerPolicy="no-referrer" loading="lazy" />
        <h3 id="modalTitle">{title}</h3>
        <p className="modal-price">{price}</p>
        <p>Fresh and delicious food prepared instantly.</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default FoodModal;
