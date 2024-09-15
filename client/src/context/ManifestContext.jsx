import React, { createContext, useState, useContext } from 'react';

const ManifestContext = createContext();

export const useManifest = () => useContext(ManifestContext);

export const ManifestProvider = ({ children }) => {
  const [manifestList, setManifestList] = useState([]);  // Ensure setManifestList is defined

  const addToManifest = (item) => {
    setManifestList(prevList => [...prevList, item]);
  };

  const removeFromManifest = (id) => {
    setManifestList(prevList => prevList.filter(item => item.id !== id));
  };

  return (
    <ManifestContext.Provider value={{ manifestList, setManifestList, addToManifest, removeFromManifest }}>
      {children}
    </ManifestContext.Provider>
  );
};
