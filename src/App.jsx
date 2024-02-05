import { useEffect, useContext, useState } from 'react';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider, Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import { AuthContext } from './context/AuthContext';

import { getDoc, doc } from "firebase/firestore";
import { db } from './firebase';
import AOS from 'aos';

// CSS
import './App.css';
import 'aos/dist/aos.css';

// Layouts
import RootLayout from "./components/layouts/RootLayout"
import ProfileLayout from './components/layouts/ProfileLayout';
import ProductsLayout from "./components/layouts/ProductsLayout";

// Pages
import Home from './components/pages/home/Home';
import AllProducts, { Products } from './components/pages/products/AllProducts';
import ProductDetail, { productDetailLoader } from "./components/pages/products/ProductDetail";
import Wishlist from "./components/pages/profile/Wishlist";
import Cart from './components/pages/profile/Cart';
import Register from './components/pages/profile/Register';
import Login from './components/pages/profile/Login';
import Dashboard from "./components/pages/profile/Dashboard";
import Orders from './components/pages/profile/Orders';
import Downloads from './components/pages/profile/Downloads';
import Addresses from "./components/pages/profile/Addresses";
import AccountDetail from "./components/pages/profile/AccountDetail";
import NotFound from "./components/pages/NotFound";

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
    const [data, setData] = useState([])
    useEffect(() => {
        if (currentUser) {
            const fetchData = async () => {
                try {
                    const docSnapshot = await getDoc(doc(db, 'users', currentUser.uid));
                    setData(docSnapshot.data())
                } catch (e) {
                    console.log(e);
                }
            }
            fetchData();
        }
    }, []);
    var RequireAuth = ({ children }) => {
        return currentUser ? children : <Navigate to="/login" />
    }
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
                        <ProfileLayout accountData={data} />
                    </RequireAuth>
                }>
                    <Route index element={<Dashboard />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="downloads" element={<Downloads />} />
                    <Route path="addresses" element={<Addresses />} />
                    <Route path="account-details" element={<AccountDetail accountData={data} />} />
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
