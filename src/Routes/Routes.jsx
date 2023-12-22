import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Landing from "../Pages/Landing/Landing";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DashBoard from "../Pages/Dashboard/DashBoard";

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
                path: '/dashboard',
                element: <DashBoard></DashBoard>
            }
        ]
    },
]);