
import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import AboutPage from "./pages/AboutPage";
import PurchasePage from "./pages/PurchasePage";
import AuthPage from "./pages/AuthPage";
import Mainlayouts from "./layouts/Mainlayouts";
import NoNavBarLayout from "./layouts/NoNavBarLayout";
import NotFoundPage from "./pages/NotFoundPage";
import ProfileDetailPage from "./pages/ProfileDetailPage";

export const router = createBrowserRouter([
        {
        path: "/",
        element: < Mainlayouts />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "about", element: <AboutPage /> },
            { path: "profile", element: <ProfilePage /> },
            { path: "profile/:id", element: <ProfileDetailPage /> },
            { path: "*", element: <NotFoundPage /> }
        ]
    },
    {
        element: <NoNavBarLayout />,
        children: [
            { path: "purchase", element: <PurchasePage /> },
            { path: "auth", element: <AuthPage /> }
        ]
    }
    // {
    //     path: "/",
    //     element: (
    //         <div>
    //             <Navbar />
    //             <main>
    //                 <HomePage />
    //             </main>
    //         </div>
    //     )
    // },
    // {
    //     path: "/profile",
    //     element: (
    //         <div>
    //             <Navbar />
    //             <main>
    //                 <ProfilePage />
    //             </main>
    //         </div>
    //     )
    // }
]);
