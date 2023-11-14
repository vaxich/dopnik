import { Navigate, useLocation, useParams } from "react-router-dom"
import { PagesType } from "../data/dataState"
import { Error404 } from "./Error404"


export type PropsType = {
    pages: PagesType[]
}

export const Page: React.FC<PropsType> = ({pages}) => {

const params = useParams();

const location = useLocation();

    return (
        pages[Number(params.id)]
        ?
        <div>
            {location.pathname === "/page/0" && <div>secret text</div>}
            {pages[Number(params.id)].heading}
            {pages[Number(params.id)].about}
        </div>
        : <Navigate to={"/page/error"}/>
    )
}