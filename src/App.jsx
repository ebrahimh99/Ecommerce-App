import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Products from './components/Products/Products'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Categories from './components/Categories/Categories'
import Brand from './components/Brand/Brand'
import Layout from './components/Layout/Layout'
import NotFoundPage from './components/NotFoundPage/NotFoundPage'
import { Toaster } from 'react-hot-toast'
import AuthContextProvider from './Context/authContext'
import ProtectedRoute from './components/protectedRoute/protectedRoute'
import { QueryClient, QueryClientProvider } from 'react-query'
import ProductDetails from './components/ProductDetails/ProductDetails'
import Cart from './components/Cart/Cart'
import Home from './components/Home/Home'
import WishList from './components/WishList/WishList'
import CartContextProvider from './Context/CartContext'
import WishlistContextProvider from './Context/wishlistContext'

import Payment from './components/Payment/Payment'
import AllOrders from './components/AllOrders/AllOrders'
import Forget from './components/Forget/Forget'
import ResetCode from './components/ResetCode/ResetCode'
import ResetPassword from './components/ResetPassword/ResetPassword'





function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <CartContextProvider>
          <WishlistContextProvider>
            <Toaster />
            <HashRouter>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<ProtectedRoute><Home /></ProtectedRoute>} />
                  <Route path="home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
                  <Route path="products" element={<ProtectedRoute><Products /></ProtectedRoute>} />
                  <Route path="brand" element={<ProtectedRoute><Brand /></ProtectedRoute>} />
                  <Route path="categories" element={<ProtectedRoute><Categories /></ProtectedRoute>} />
                  <Route path="productDetails/:id" element={<ProtectedRoute><ProductDetails /></ProtectedRoute>} />
                  <Route path="cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
                  <Route path="wishlist" element={<ProtectedRoute><WishList /></ProtectedRoute>} />
                  <Route path="payment" element={<ProtectedRoute><Payment /></ProtectedRoute>} />
                  <Route path="allorders" element={<ProtectedRoute><AllOrders /></ProtectedRoute>} />
                  
                  <Route path="login" element={<Login />} />
                  <Route path="register" element={<Register />} />
                  <Route path="forget" element={<Forget />} />
                  <Route path="resetcode" element={<ResetCode />} />
                  <Route path="resetpassword" element={<ResetPassword />} />
                  
                  <Route path="*" element={<NotFoundPage />} />
                </Route>
              </Routes>
            </HashRouter>
          </WishlistContextProvider>
        </CartContextProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App



