import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header';
import TodoApp from './todoApp';
import Products from './products';


function App() {
  return (
    <div className="App">
      <TodoApp />
      <Products/>    
      <Header/>  
    </div>

  );
}

export default App;
