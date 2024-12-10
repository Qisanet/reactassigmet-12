import React, { createContext } from 'react';
import Child from './Child'; 

export const MyContext = createContext();

const App = () => {
  const valueToPass = "Hello from App!"; 

  return (
    
    <MyContext.Provider value={valueToPass}>
      <h1>Parent Component (App)</h1>
      <Child />
    </MyContext.Provider>
  );
};

export default App; 
