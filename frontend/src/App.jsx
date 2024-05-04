import React, { useContext } from 'react';
import { createBrowserRouter, RouterProvider, Route, Outlet, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import Leftbar from './components/Leftbar';
import Rightbar from './components/Rightbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import { AuthContext } from './context/authContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const App = () => {

  const {currentUser} = useContext(AuthContext);

  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <div>
          <Navbar />
          <div className='flex'>
            <Leftbar />
            <div className='flex6'>
              <Outlet />
            </div>
            <Rightbar />
          </div>
        </div>
      </QueryClientProvider>
    );
  };

  const ProtectedRoute = ({children}) => {
    if (!currentUser) {
      return <Navigate to='/login' />
    }
    return children
  }

  const router = createBrowserRouter([
    { path: '/', element: <ProtectedRoute><Layout /></ProtectedRoute> , children: [{ path: '/', element: <Home />}, { path: '/profile/:id', element: <Profile />}]},
    { path: '/login', element: <Login />},
    { path: '/register', element: <Register />}
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;