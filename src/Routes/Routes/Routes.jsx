import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import Chat from "../../Pages/Chat/Chat";
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
                loader: ({ params }) => fetch(`https://todo-checklist-server.vercel.app/allTodos/${params.id}`)
            },
            {
                path: "/chat",
                element: <Chat></Chat>
            }

        ]
    }
]);

export default router;