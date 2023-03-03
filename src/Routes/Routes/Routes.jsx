import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import DashBoard from "../../Pages/DashBoard/DashBoard";
import Homepage from "../../Pages/Homepage/Homepage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Homepage></Homepage>
            },
            {
                path: "/dashboard",
                element: <DashBoard></DashBoard>
            }
        ]
    }
]);

export default router;