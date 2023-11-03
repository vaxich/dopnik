
type PropsButtonType ={
    title: string
    callBack: ()=> void
}

export const Button = (props: PropsButtonType) => {

const onClickHandler = () => {
    props.callBack()
}

    return (
        <button onClick={onClickHandler}>{props.title}</button>
    )
}