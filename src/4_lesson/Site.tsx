import { Navigate, Route, Routes } from "react-router-dom"
import { PageOne } from "./pages/PageOne"
import { PageThree } from "./pages/PageThree"
import { PageTwo } from "./pages/PageTwo"
import { Error404 } from "./pages/Error404"
import { NavLink } from "react-router-dom"
import styles from "./Site.module.css"
import { S } from "./markUp/_styles"
import { Page } from "./pages/Page"
import { dataState } from "./data/dataState"






export const Site = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    {/* <div> <NavLink className={ ({isActive}) =>  isActive ? styles.active : styles.navlink } to={"/page1"}> PageOne</NavLink></div> */}
                    {/* <S.NavWrapper> <NavLink  to={"/page1"}> PageOne</NavLink></S.NavWrapper> */}
                    <S.NavWrapper> <NavLink  to={"/page/0"}> PageOne</NavLink></S.NavWrapper>
                    <S.NavWrapper> <NavLink  to={"/page/1"}> PageTwo</NavLink></S.NavWrapper>
                    <S.NavWrapper> <NavLink  to={"/page/2"}> PageThree</NavLink></S.NavWrapper>

                </div>
            </div>

            <div className={styles.content}>
                <Routes>
                    {/* <Route path={"/"} element={<PageOne />} /> */}
                    <Route path={'/*'} element={<Navigate to={"/page1"} />} /> {/* на стартовой странице перекинет на page1*/}

                    {/* <Route path={'/page1'} element={<PageOne />} /> */}
                    <Route path={'/page/:id'} element={<Page pages = {dataState.pages}/>} />
                    


                    <Route path={'/page/error'} element={<Error404 />} />
                    <Route path={'/*'} element={<Navigate to ={"/page/error"} />} />



                </Routes>

            </div>
        </div>
    )
}

