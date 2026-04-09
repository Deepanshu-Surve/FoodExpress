import React, { useState } from 'react';
import { useAppContext } from '../AppContext';

const Restaurants: React.FC = () => {
  const { searchQuery } = useAppContext();
  const [filter, setFilter] = useState('all');

  const restaurants = [
    { name: 'Green Leaf', cuisine: 'Pure Veg • North Indian', rating: '⭐ 4.5 | 25 min', type: 'veg', img: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&h=450' },
    { name: 'Royal Biryani', cuisine: 'Biryani • Mughlai', rating: '⭐ 4.4 | 30 min', type: 'nonveg', img: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&h=450' },
    { name: 'Veggie Delight', cuisine: 'South Indian • Veg', rating: '⭐ 4.3 | 20 min', type: 'veg', img: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&h=450' },
    { name: 'Chicken Hub', cuisine: 'Chicken • BBQ', rating: '⭐ 4.6 | 35 min', type: 'nonveg', img: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&h=450' },
    { name: 'Paneer Palace', cuisine: 'Paneer • North Indian', rating: '⭐ 4.2 | 28 min', type: 'veg', img: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&h=450' },
    { name: 'Grill Nation', cuisine: 'Grill • Chicken', rating: '⭐ 4.7 | 32 min', type: 'nonveg', img: 'https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&h=450' },
    { name: 'Momo Street', cuisine: 'Chinese • Veg Momos', rating: '⭐ 4.1 | 25 min', type: 'veg', img: 'https://images.pexels.com/photos/3926124/pexels-photo-3926124.jpeg?auto=compress&cs=tinysrgb&h=450' },
    { name: 'Sweet Tooth', cuisine: 'Desserts • Non-Veg Cakes', rating: '⭐ 4.6 | 15 min', type: 'nonveg', img: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&h=450' },
    { name: 'Salad Bar', cuisine: 'Salads • Healthy Veg', rating: '⭐ 4.3 | 20 min', type: 'veg', img: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&h=450' },
    { name: 'BBQ Express', cuisine: 'BBQ • Non-Veg', rating: '⭐ 4.5 | 30 min', type: 'nonveg', img: 'https://images.pexels.com/photos/5938/food-meal-dinner-lunch.jpg?auto=compress&cs=tinysrgb&h=450' },
    { name: 'Pizza Veggie', cuisine: 'Veg Pizza • Italian', rating: '⭐ 4.4 | 22 min', type: 'veg', img: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&h=450' },
    { name: 'Fried Chicken Hub', cuisine: 'Chicken • Fast Food', rating: '⭐ 4.6 | 28 min', type: 'nonveg', img: 'https://images.pexels.com/photos/209540/pexels-photo-209540.jpeg?auto=compress&cs=tinysrgb&h=450' },
  ];

  const filteredRestaurants = restaurants.filter(r => 
    (filter === 'all' || r.type === filter) &&
    r.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main>
      <section className="restaurant-hero">
        <h1>Discover Best Restaurants</h1>
        <p>Order food from top rated restaurants near you</p>
      </section>

      <section className="restaurant-filter">
        {['all', 'veg', 'nonveg'].map(type => (
          <button 
            key={type}
            className={`rest-btn ${filter === type ? 'active' : ''}`} 
            onClick={() => setFilter(type)}
          >
            {type === 'all' ? 'All' : type === 'veg' ? 'Veg' : 'Non-Veg'}
          </button>
        ))}
      </section>

      <section className="restaurants">
        <div className="restaurant-grid-page">
          {filteredRestaurants.length > 0 ? (
            filteredRestaurants.map((rest, idx) => (
              <div key={idx} className="restaurant-card-page">
                <img src={`${rest.img}&w=400`} alt={rest.name} referrerPolicy="no-referrer" loading="lazy" />
                <div className="restaurant-info-page">
                  <h3>{rest.name}</h3>
                  <p className="cuisine">{rest.cuisine}</p>
                  <p className="rating">{rest.rating}</p>
                </div>
                <div className={`badge ${rest.type}`}>{rest.type === 'veg' ? 'Veg' : 'Non-Veg'}</div>
              </div>
            ))
          ) : (
            <div className="no-results" style={{ gridColumn: '1/-1', textAlign: 'center', padding: '40px' }}>
              <h3>No restaurants found matching "{searchQuery}"</h3>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Restaurants;
