import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppContext } from '../AppContext';

const Menu: React.FC = () => {
  const { addToCart, searchQuery } = useAppContext();
  const location = useLocation();
  const [filter, setFilter] = useState('all');
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    if (category) {
      setFilter(category);
    }
  }, [location]);

  const handleFilterChange = (cat: string) => {
    setFilter(cat);
    // Scroll to menu content when filter changes
    if (menuRef.current) {
      const offset = 100; // Adjust for sticky header
      const elementPosition = menuRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const menuData = [
    {
      category: 'north-indian',
      title: 'North Indian',
      items: [
        { name: 'Butter Chicken', price: '₹299', img: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg' },
        { name: 'Paneer Butter Masala', price: '₹249', img: 'https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg' },
        { name: 'Dal Tadka', price: '₹199', img: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg' },
      ]
    },
    {
      category: 'burger',
      title: 'Burger',
      items: [
        { name: 'Cheese Burger', price: '₹199', img: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg' },
        { name: 'Chicken Burger', price: '₹229', img: 'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg' },
        { name: 'Veg Burger', price: '₹179', img: 'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg' },
      ]
    },
    {
      category: 'pizza',
      title: 'Pizza',
      items: [
        { name: 'Margherita Pizza', price: '₹299', img: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg' },
        { name: 'Farmhouse Pizza', price: '₹349', img: 'https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg' },
        { name: 'Pepperoni Pizza', price: '₹399', img: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg' },
      ]
    },
    {
      category: 'chinese',
      title: 'Chinese',
      items: [
        { name: 'Veg Noodles', price: '₹179', img: 'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg' },
        { name: 'Fried Rice', price: '₹199', img: 'https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg' },
        { name: 'Veg Momos', price: '₹159', img: 'https://images.pexels.com/photos/3926124/pexels-photo-3926124.jpeg' },
      ]
    },
    {
      category: 'biryani',
      title: 'Biryani',
      items: [
        { name: 'Chicken Biryani', price: '₹249', img: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg' },
        { name: 'Mutton Biryani', price: '₹349', img: 'https://images.pexels.com/photos/5410416/pexels-photo-5410416.jpeg' },
        { name: 'Veg Biryani', price: '₹199', img: 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg' },
      ]
    },
    {
      category: 'dessert',
      title: 'Cake',
      items: [
        { name: 'Chocolate Cake', price: '₹149', img: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg' },
        { name: 'Strawberry Cake', price: '₹169', img: 'https://images.pexels.com/photos/4109993/pexels-photo-4109993.jpeg' },
        { name: 'Vanilla Cake', price: '₹139', img: 'https://images.pexels.com/photos/913136/pexels-photo-913136.jpeg' },
      ]
    },
    {
      category: 'dessert',
      title: 'Ice Cream',
      items: [
        { name: 'Chocolate Ice Cream', price: '₹99', img: 'https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg' },
        { name: 'Vanilla Ice Cream', price: '₹89', img: 'https://images.pexels.com/photos/461430/pexels-photo-461430.jpeg' },
        { name: 'Strawberry Ice Cream', price: '₹99', img: 'https://images.pexels.com/photos/3631/food-dessert-ice-cream-sweet.jpg' },
      ]
    },
    {
      category: 'pasta',
      title: 'Pasta',
      items: [
        { name: 'White Sauce Pasta', price: '₹229', img: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg' },
        { name: 'Red Sauce Pasta', price: '₹219', img: 'https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg' },
        { name: 'Cheese Pasta', price: '₹239', img: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg' },
      ]
    },
    {
      category: 'drink',
      title: 'Shake',
      items: [
        { name: 'Strawberry Shake', price: '₹139', img: 'https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg' },
        { name: 'Chocolate Shake', price: '₹149', img: 'https://images.pexels.com/photos/5946970/pexels-photo-5946970.jpeg' },
        { name: 'Mango Shake', price: '₹129', img: 'https://images.pexels.com/photos/4146304/pexels-photo-4146304.jpeg' },
      ]
    },
    {
      category: 'drink',
      title: 'Coffee',
      items: [
        { name: 'Espresso', price: '₹119', img: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg' },
        { name: 'Cappuccino', price: '₹139', img: 'https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg' },
        { name: 'Latte', price: '₹149', img: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg' },
      ]
    }
  ];

  // Filter logic
  const filteredMenuData = menuData.map(section => {
    const filteredItems = section.items.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { ...section, items: filteredItems };
  }).filter(section => 
    section.items.length > 0 && (filter === 'all' || filter === section.category)
  );

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>, item: { name: string; price: string; img: string }) => {
    const imgElement = e.currentTarget.parentElement?.querySelector('img') as HTMLImageElement;
    addToCart(item, imgElement);
  };

  return (
    <main className="menu-page">
      <section className="menu-hero">
        <h1>Explore Our Delicious Menu</h1>
        <p>Choose from a variety of tasty dishes</p>
      </section>

      <div className="menu-layout-container" ref={menuRef}>
        <aside className="menu-sidebar">
          <div className="sidebar-sticky">
            <h3>Categories</h3>
            <div className="filter-list">
              {['all', 'north-indian', 'burger', 'pizza', 'chinese', 'biryani', 'dessert', 'pasta', 'drink'].map(cat => (
                <button 
                  key={cat}
                  className={`filter-item ${filter === cat ? 'active' : ''}`} 
                  onClick={() => handleFilterChange(cat)}
                >
                  {cat.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </button>
              ))}
            </div>
          </div>
        </aside>

        <div className="menu-main-content">
          {filteredMenuData.length > 0 ? (
            filteredMenuData.map((section, idx) => (
              <section 
                key={idx} 
                className="menu-section"
              >
                <h2 className="section-title">{section.title}</h2>
                <div className="menu-grid">
                  {section.items.map((item, i) => (
                    <div key={i} className="menu-item-card">
                      <div className="item-info">
                        <h3>{item.name}</h3>
                        <p className="item-price">{item.price}</p>
                        <p className="item-desc">Freshly prepared with authentic ingredients.</p>
                        <button className="add-btn" onClick={(e) => handleAddToCart(e, item)}>Add to Cart</button>
                      </div>
                      <div className="item-image">
                        <img src={`${item.img}?auto=compress&cs=tinysrgb&w=400`} alt={item.name} referrerPolicy="no-referrer" loading="lazy" />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))
          ) : (
            <div className="no-results">
              <h3>No dishes found matching "{searchQuery}"</h3>
              <p>Try searching for something else or clear the search.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Menu;
