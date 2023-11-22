import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom"
import { PagesType } from "../data/dataState"
import { Error404 } from "./Error404"


export type PropsType = {
    pages: PagesType[]
}

export const Page: React.FC<PropsType> = ({ pages }) => {

    const params = useParams();

    const location = useLocation();

    const navigate = useNavigate()

    const comeBack = () => {
        navigate(-1)
    }

    const mainPage = () => {
        navigate("/page/0")
    }

    return (
        <div>
            {pages[Number(params.id)]
                ?
                <div>
                    {location.pathname === "/page/0" && <div>secret text</div>}
                    {pages[Number(params.id)].heading}
                    {pages[Number(params.id)].about}
                </div>
                : <Navigate to={"/page/error"} />
            }
            <button onClick={comeBack}>назад</button>
            <button onClick={mainPage}>главная страница</button>
        </div>

    )
}