import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [{ index: true, element: <Home /> }],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
