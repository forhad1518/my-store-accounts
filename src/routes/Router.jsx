import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import MainLayout from "../layoutes/mainLayout/MainLayout";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>
    },
    {
        path: "dashboard",
        element: <Dashboard></Dashboard>
    }
])
export default Router;