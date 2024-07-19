import React, { useState } from 'react';
import axios from 'axios';
import './SearchFilter.css';

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [products, setProducts] = useState([]);

  const handleSearch = async () => {
    const response = await axios.get('https://dummyjson.com/products');
    let filteredProducts = response.data.products;

    if (searchTerm) {
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (category !== 'All') {
      filteredProducts = filteredProducts.filter(product => product.category === category);
    }

    setProducts(filteredProducts);
  };

  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Home">Home</option>
        {/* Add more categories as needed */}
      </select>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchFilter;
