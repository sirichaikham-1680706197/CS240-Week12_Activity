import { Outlet } from "react-router";

export default function NoNavBarLayout() {
    return(
        <main>
            <Outlet />
        </main>
    )
}