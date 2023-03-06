import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import DashBoard from "../../Pages/DashBoard/DashBoard";
import Homepage from "../../Pages/Homepage/Homepage";
import Update from "../../Pages/Update/Update";

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
            },
            {
                path: "/update/:id",
                element: <Update></Update>,
                loader: ({ params }) => fetch(`http://localhost:5000/allTodos/${params.id}`)
            }
        ]
    }
]);

export default router;