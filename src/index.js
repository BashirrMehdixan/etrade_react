import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from "./store/store";
import { Provider } from 'react-redux';
import ProductProvider from "./context/Products/ProductContext";
import { AuthContextProvider } from './context/Auth/AuthContext';
import UsersProvider from "./context/Users/UsersContext";

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <UsersProvider>
            <ProductProvider>
                <AuthContextProvider>
                    <App />
                </AuthContextProvider>
            </ProductProvider>
        </UsersProvider>
    </Provider>
)