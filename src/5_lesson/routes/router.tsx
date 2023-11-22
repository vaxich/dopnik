import { createBrowserRouter } from "react-router-dom";
import { Error404 } from "../../4_lesson/pages/Error404";
import { dataState } from "../../4_lesson/data/dataState";
import App from "../../App";
import { Page } from "../../4_lesson/pages/Page";
import { ProtectePage } from "../../4_lesson/pages/ProtectedPage";
import { ProtectedRoute } from "./ProtectedRoute";
import { PageInPage } from "../../4_lesson/pages/PageInPage";


export const router = createBrowserRouter([{
    path:"/",
    element: <App/>,
    errorElement: <Error404 />,
    children: [
        {
            path: "/page/:id",
            element: (
                <Page pages={dataState.pages} />
            )
        },
        {
            path: "/page/:id/pp",
            element: (
                <PageInPage/>
            )
        },
        {
            path: "/page/protected",
            element: (
                <ProtectedRoute>
                    <ProtectePage/>
                </ProtectedRoute>
            )
        },
        {
            path: "/page/error",
            element: (
                <Error404/>
            )
        },
    ]

}])