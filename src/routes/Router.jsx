import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import MainLayout from "../layoutes/mainLayout/MainLayout";
import Cash from "../pages/Cash";
import Reports from "../pages/Reports";
import Administration from "../pages/Administration";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "dashboard",
                element: <Dashboard></Dashboard>
            },
            {
                path: "cash",
                element: <Cash></Cash>
            },
            {
                path: "reports",
                element: <Reports></Reports>
            },
            {
                path: "administration",
                element: <Administration></Administration>
            }
        ]
    }
])
export default Router;