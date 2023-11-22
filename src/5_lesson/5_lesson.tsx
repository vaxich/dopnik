import { NavLink, Outlet } from "react-router-dom"
import { Site } from "../4_lesson/Site"
import styles from "../4_lesson/Site.module.css"
import { S } from "../4_lesson/markUp/_styles"
import { useWindowSize } from "../Helpers/useWindowSize"





export const FiveLesson = () => {

    let widthSize = useWindowSize()
    
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            
            <div className={styles.body}>
                {widthSize > 1000 
                ? <div className={styles.nav}>
                   
                <S.NavWrapper> <NavLink to={"/page/0"}> PageOne</NavLink></S.NavWrapper>
                <S.NavWrapper> <NavLink to={"/page/1"}> PageTwo</NavLink></S.NavWrapper>
                <S.NavWrapper> <NavLink to={"/page/2"}> PageThree</NavLink></S.NavWrapper>
                <S.NavWrapper> <NavLink to={"/page/protected"}> Protected Page</NavLink></S.NavWrapper>

            </div>
                : <div>  </div>}
                
            </div>

            <div className={styles.content}>

                <Outlet />
            </div>

        </div>
    )

}

