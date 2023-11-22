import { ReactComponentElement } from "react"
import { Navigate } from "react-router-dom"


export type ProtectedRoutePropsType = {
    children: ReactComponentElement<any>
}

export const ProtectedRoute: React.FC<ProtectedRoutePropsType> = ({children}) => {

const logged = true

    return logged ? children : <Navigate to="/page/:error"/>
}