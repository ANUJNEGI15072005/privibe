import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ManifestProvider } from './context/ManifestContext';
import Layout from './Layout.jsx';
import App from './components/App.jsx';
import Earrings from './components/Earrings.jsx';
import Rings from './components/Rings.jsx';
import Bracelet from './components/Bracelet.jsx';
import Neckpiece from './components/Neckpiece.jsx';
import Sale from './components/Sale.jsx';
import NewArrival from './components/NewArrival.jsx';
import ProductDetail from './components/ProductDetail.jsx';
import ManisfestList from './components/ManisfestList.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import RequireAuth from './components/RequireAuth.jsx';
import MyProfile from './components/MyProfile.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <RequireAuth>
        <Layout />
      </RequireAuth>
    ),
    children: [
      {
        path: '',
        element: <App />
      },
      {
        path: '/Earrings',
        element: <Earrings />
      },
      {
        path: '/Earrings/:id',
        element: <ProductDetail />,
        loader: () => ({ productType: 'Earrings' })
      },
      {
        path: '/Rings',
        element: <Rings />
      },
      {
        path: '/Rings/:id',
        element: <ProductDetail />,
        loader: () => ({ productType: 'Rings' })
      },
      {
        path: '/Bracelet',
        element: <Bracelet />
      },
      {
        path: '/Bracelet/:id',
        element: <ProductDetail />,
        loader: () => ({ productType: 'Bracelet' })
      },
      {
        path: '/Neckpiece',
        element: <Neckpiece />
      },
      {
        path: '/Neckpiece/:id',
        element: <ProductDetail />,
        loader: () => ({ productType: 'Neckpiece' })
      },
      {
        path: '/Sale',
        element: <Sale />
      },
      {
        path: '/New_Arrival',
        element: <NewArrival />
      },
      {
        path: '/Manifest_List',
        element: <ManisfestList />
      },
      {
        path: '/My_Profile',
        element: <MyProfile />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ManifestProvider>
        <RouterProvider router={router} />
      </ManifestProvider>
    </AuthProvider>
  </React.StrictMode>
);
