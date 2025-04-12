// SearchContext.js
import React, { createContext, useState } from 'react';

// Create the context
export const SearchContext = createContext();





// Create a provider component
export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState(null);
  

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};
