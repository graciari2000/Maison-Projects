import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <AppContext.Provider value={{ selectedItem, setSelectedItem }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);