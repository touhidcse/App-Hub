import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root'
import ErrorPage from "../Pages/ErrorPage/ErrorPage"
import Home from '../Pages/Home/Home';
import Apps from '../Pages/Apps/Apps'
import Installation from '../Pages/Installation/Installation'
import AppDetails from '../Pages/AppDetatils/AppDetails';
export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index:true,
                loader: ()=>fetch('appData.json').then(res => res.json()),
                Component: Home,
            },
            {
                path: '/apps',
                loader: ()=>fetch('appData.json').then(res => res.json()),
                Component: Apps,
            },
            {
                path:'/installation',
                loader: ()=>fetch('appData.json').then(res => res.json()),
                Component: Installation,
            },
            {
                path:'/appDetails/:id',
                loader: ()=> fetch('appData.json').then(res => res.json()),
                Component:AppDetails,

            },
        ]
    }
])