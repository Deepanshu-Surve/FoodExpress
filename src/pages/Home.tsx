import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../AppContext';
import FoodModal from '../components/FoodModal';

const Home: React.FC = () => {
  const { addToCart, searchQuery } = useAppContext();
  const [modalData, setModalData] = useState<{ isOpen: boolean; img: string; title: string; price: string }>({
    isOpen: false,
    img: '',
    title: '',
    price: ''
  });

  const popularDishes = [
    { title: 'Cheese Burger', price: '₹199', img: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { title: 'Margherita Pizza', price: '₹299', img: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { title: 'Chicken Biryani', price: '₹249', img: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { title: 'Creamy Pasta', price: '₹229', img: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { title: 'Grilled Sandwich', price: '₹149', img: 'https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { title: 'French Fries', price: '₹129', img: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { title: 'Veg Noodles', price: '₹179', img: 'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { title: 'Fried Chicken', price: '₹259', img: 'https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { title: 'Mexican Tacos', price: '₹219', img: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { title: 'Steamed Momos', price: '₹159', img: 'https://images.pexels.com/photos/3926124/pexels-photo-3926124.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { title: 'Chocolate Ice Cream', price: '₹99', img: 'https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { title: 'Strawberry Milkshake', price: '₹139', img: 'https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=400' },
  ];

  const restaurants = [
    { name: 'Spice Garden', info: '⭐ 4.5 • Indian • 30 mins', img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&auto=format&fit=crop' },
    { name: 'Pizza Hub', info: '⭐ 4.3 • Pizza • 25 mins', img: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Biryani House', info: '⭐ 4.6 • Biryani • 35 mins', img: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Burger Point', info: '⭐ 4.4 • Burgers • 20 mins', img: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&auto=format&fit=crop' },
    { name: 'Taco Fiesta', info: '⭐ 4.2 • Mexican • 28 mins', img: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=400&auto=format&fit=crop' },
    { name: 'Cheese Delight', info: '⭐ 4.7 • Fast Food • 22 mins', img: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400&auto=format&fit=crop' },
    { name: 'Sushi World', info: '⭐ 4.5 • Japanese • 35 mins', img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&auto=format&fit=crop' },
    { name: 'Italian Oven', info: '⭐ 4.6 • Italian • 30 mins', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop' },
  ];

  const filteredDishes = popularDishes.filter(dish => 
    dish.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredRestaurants = restaurants.filter(rest => 
    rest.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openFood = (img: string, title: string, price: string) => {
    setModalData({ isOpen: true, img, title, price });
  };

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>, img: string, title: string, price: string) => {
    const imgElement = e.currentTarget.parentElement?.querySelector('img') as HTMLImageElement;
    addToCart({ name: title, price, img }, imgElement);
  };

  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>Delicious Food Delivered Fast</h1>
          <p>Order your favourite meals instantly</p>
          <Link to="/menu" className="btn">Order Now</Link>
        </div>
      </section>

      {/* FOOD SLIDER */}
      <section className="food-slider">
        <h2>Trending Foods</h2>
        <div className="slider-track">
          <div className="slide">🍕 Pizza</div>
          <div className="slide">🍔 Burger</div>
          <div className="slide">🍟 Fries</div>
          <div className="slide">🍜 Noodles</div>
          <div className="slide">🍗 Chicken</div>
          <div className="slide">🌮 Taco</div>
          <div className="slide">🍣 Sushi</div>
          <div className="slide">🥗 Salad</div>
          <div className="slide">🍩 Donut</div>
          <div className="slide">🍰 Cake</div>
          {/* Duplicates */}
          <div className="slide">🍕 Pizza</div>
          <div className="slide">🍔 Burger</div>
          <div className="slide">🍟 Fries</div>
          <div className="slide">🍜 Noodles</div>
          <div className="slide">🍗 Chicken</div>
          <div className="slide">🌮 Taco</div>
          <div className="slide">🍣 Sushi</div>
          <div className="slide">🥗 Salad</div>
          <div className="slide">🍩 Donut</div>
          <div className="slide">🍰 Cake</div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="categories">
        <h2>Order our best food options</h2>
        <div className="category-grid">
          {[
            { cat: 'north-indian', name: 'North Indian', img: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=200' },
            { cat: 'burger', name: 'Burger', img: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=200' },
            { cat: 'pizza', name: 'Pizza', img: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=200' },
            { cat: 'chinese', name: 'Chinese', img: 'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=200' },
            { cat: 'biryani', name: 'Biryani', img: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=200' },
            { cat: 'dessert', name: 'Cake', img: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=200' },
            { cat: 'dessert', name: 'Ice Cream', img: 'https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg?auto=compress&cs=tinysrgb&w=200' },
            { cat: 'momos', name: 'Momo', img: 'https://images.pexels.com/photos/3926124/pexels-photo-3926124.jpeg?auto=compress&cs=tinysrgb&w=200' },
            { cat: 'dessert', name: 'Desserts', img: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=200' },
            { cat: 'pasta', name: 'Pasta', img: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=200' },
            { cat: 'shake', name: 'Shake', img: 'https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=200' },
            { cat: 'coffee', name: 'Coffee', img: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=200' },
            { cat: 'sandwich', name: 'Sandwich', img: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=200' },
            { cat: 'fries', name: 'Fries', img: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=200' },
            { cat: 'salad', name: 'Salad', img: 'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=200' },
            { cat: 'tacos', name: 'Tacos', img: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=200' },
          ].map((item, idx) => (
            <Link key={idx} to={`/menu?category=${item.cat}`}>
              <div className="category-card">
                <img src={item.img} alt={item.name} referrerPolicy="no-referrer" loading="lazy" />
                <p>{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* OFFER BANNERS */}
      <section className="offers">
        <div className="offer-banner">
          <h2>🔥 50% OFF on First Order</h2>
          <p>Use Code: FOOD50</p>
        </div>
        <div className="offer-banner">
          <h2>🍕 Free Delivery</h2>
          <p>On orders above ₹299</p>
        </div>
      </section>

      {/* POPULAR DISHES */}
      <section className="foods">
        <h2>Popular Dishes</h2>
        <div className="food-container">
          {filteredDishes.length > 0 ? (
            filteredDishes.map((food, idx) => (
              <div key={idx} className="food-card" onClick={() => openFood(food.img, food.title, food.price)}>
                <img src={food.img} alt={food.title} referrerPolicy="no-referrer" loading="lazy" />
                <h3>{food.title}</h3>
                <p>{food.price}</p>
                <button onClick={(e) => { e.stopPropagation(); handleAddToCart(e, food.img, food.title, food.price); }}>
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            <p className="no-results">No dishes found matching "{searchQuery}"</p>
          )}
        </div>
      </section>

      {/* RESTAURANT GRID */}
      <section className="restaurant-grid">
        <h2>Top Restaurants</h2>
        <div className="grid-container">
          {filteredRestaurants.length > 0 ? (
            filteredRestaurants.map((rest, idx) => (
              <div key={idx} className="grid-card">
                <img src={rest.img} alt={rest.name} referrerPolicy="no-referrer" loading="lazy" />
                <div className="grid-info">
                  <h3>{rest.name}</h3>
                  <p>{rest.info}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="no-results">No restaurants found matching "{searchQuery}"</p>
          )}
        </div>
      </section>

      <FoodModal 
        isOpen={modalData.isOpen} 
        onClose={() => setModalData({ ...modalData, isOpen: false })}
        img={modalData.img}
        title={modalData.title}
        price={modalData.price}
        onAddToCart={(imgElement) => addToCart({ name: modalData.title, price: modalData.price, img: modalData.img }, imgElement)}
      />
    </main>
  );
};

export default Home;
