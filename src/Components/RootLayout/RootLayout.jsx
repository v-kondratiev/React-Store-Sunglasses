import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../Header/Header";
import {Provider} from "react-redux";
import store from "../../store/store";

const RootLayout = () => {
    return (
        <div>
            <Provider store={store}>
            <Header/>
            <main>
                <Outlet/>
            </main>
            </Provider>
        </div>
    );
};

export default RootLayout;