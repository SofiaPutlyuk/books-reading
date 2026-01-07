import { Header } from "../header/Header"
import { Outlet } from "react-router-dom"
export const LayOut = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}