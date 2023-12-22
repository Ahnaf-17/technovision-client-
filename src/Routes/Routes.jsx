import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Landing from "../Pages/Landing/Landing";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../layout/DashBoard";
import Contact from "../Pages/Contact/Contact";
import AboutUs from "../Pages/About/AboutUs";
// import AboutUs from "../Pages/About/AboutUs";
// import Contact from "../Pages/Contact/Contact";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path:'/',
                element:<Landing></Landing>,
                loader: ()=> fetch('/user.json')
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/about',
                element:<AboutUs></AboutUs>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute> <DashBoard></DashBoard> </PrivateRoute>
    }
]);