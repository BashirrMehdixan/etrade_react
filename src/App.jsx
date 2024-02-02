import { useContext, useState } from 'react';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthContext } from './context/AuthContext';
import AOS from 'aos';

// CSS
import './App.css';
import 'aos/dist/aos.css';

// Layouts
import RootLayout from "./components/Layouts/RootLayout";
import ProfileLayout from './components/Layouts/ProfileLayout';
import ProductsLayout from "./components/Layouts/ProductsLayout";

// Pages
import Home from './components/Pages/Home/Home';
import AllProducts, { Products } from './components/Pages/Products/AllProducts';
import ProductDetail, { productDetailLoader } from "./components/Pages/Products/ProductDetail";
import Wishlist from "./components/Pages/Profile/Wishlist";
import Cart from './components/Pages/Profile/Cart';
import Register from './components/Pages/Profile/Register';
import Login from './components/Pages/Profile/Login';
import Dashboard from "./components/Pages/Profile/Dashboard";
import Orders from './components/Pages/Profile/Orders';
import Downloads from './components/Pages/Profile/Downloads';
import Addresses from "./components/Pages/Profile/Addresses";
import AccountDetail from "./components/Pages/Profile/AccountDetail";
import NotFound from "./components/Pages/NotFound";

function App() {
    AOS.init({
        disable: false,
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99,
        offset: 120,
        delay: 0,
        duration: 1000,
        easing: 'ease',
        once: false,
        mirror: false,
        anchorPlacement: 'top-bottom',

    });
    document.addEventListener('scroll', () => {
        AOS.refreshHard();
    });
    const { currentUser } = useContext(AuthContext);
    var RequireAuth = ({ children }) => {
        return currentUser ? children : <Navigate to="/login" />
    }
    const [avatarUrl, setAvatarUrl] = useState(null);
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<RootLayout />}>
                <Route index loader={Products} element={<Home />} />
                <Route path="/products" element={<ProductsLayout />}>
                    <Route index loader={Products} element={<AllProducts />} />
                    <Route path=":id" loader={productDetailLoader} element={<ProductDetail />} />
                </Route>
                <Route path="/profile" element={
                    <RequireAuth>
                        <ProfileLayout />
                    </RequireAuth>
                }>
                    <Route index element={<Dashboard />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="downloads" element={<Downloads />} />
                    <Route path="addresses" element={<Addresses />} />
                    <Route path="account-details" element={<AccountDetail updateAvatarUrl={setAvatarUrl} />} />
                </Route>
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Register />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        )
    )
    return (
        <>
            <RouterProvider router={router} />
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </>
    );
}

export default App;
