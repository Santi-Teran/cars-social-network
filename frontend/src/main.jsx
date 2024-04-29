import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './pages/login/Login';

const App = () => {
  return (
    <div className="bg-red-500 text-white p-4">
      <h1 className="text-2xl">¡Hola, mundo!</h1>
      <p className="text-lg">¡Bienvenido a tu aplicación con Vite, React y Tailwind CSS!</p>
      <Login />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));