import { ChangeEvent, RefObject, useState } from "react"

export type InputPropsType = {
    newTitle: RefObject<HTMLInputElement>
    //setNewTitle: (newTitle: string) => void
}

export const Input = (props: InputPropsType) => {



    // const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    //     props.setNewTitle(event.currentTarget.value)
    // }

    return (
        <div>
            <input
                ref={props.newTitle}
            //value={props.newTitle}
            //onChange={onChangeHandler} 
            />
        </div>
    )
}