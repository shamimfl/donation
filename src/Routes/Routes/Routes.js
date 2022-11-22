import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Main from "../../Pages/Main/Main";
import Registration from "../../Pages/Registration/Registration";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:'/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path:'/registration',
                element: <Registration></Registration>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
        ]
    }
])

export default router;