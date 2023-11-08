import s from './Button.module.css'
// type PropsType = {
//     name: string
//     onClick: () => void
// }

// export const ButtonBig:React.FC<PropsType> = ({name, onClick}) => {

//     const onClickHandler = () => {
//         onClick()
//     }

//     return (
//         <div>
//             <button onClick={onClickHandler}>{name}</button>
//         </div>
//     )
// }
//-------------------------------

type PropsType = {
    name?: string
    onClick: () => void
    children: React.ReactNode
    color?: string
    disabled?: boolean
}

export const ButtonBig: React.FC<PropsType> = (props) => {
    const { name, onClick, children, color, disabled } = props
    const onClickHandler = () => {
        onClick()
    }

    // const finalClassName = s.button
    //     + (disabled
    //         ? ' ' + s.disabled
    //         : color === 'red'
    //             ? ' ' + s..red
    //             : color === 'secondary'
    //                 ? ' ' + s.secondary
    //                 : ' ' + s.default)
    //     + (className ? ' ' + className : ' ')

    const finalClassName = `
${s.button} 
${color === 'red' ? s.red : color === 'secondary' ? s.secondary : s.default}
${disabled ? s.disabled : ' '}
`

    return (
        <div>
            <button className={finalClassName} onClick={onClickHandler}>{children}</button>
        </div>
    )
}