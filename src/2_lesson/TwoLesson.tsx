import { useEffect, useRef, useState } from "react"
import { PropsType } from "../App"
import { Button } from "./Button"
import { Input } from "./Input"

// type TwoLessonPropsType = {
//     todos: PropsType[]
//     showMe: () => void
//     setTodos:([]) => void
// }

export const TwoLesson = () => {

    const [todos, setTodos] = useState<PropsType[]>([]);
    //const [newTitle, setNewTitle] = useState("");
    const newTitle = useRef<HTMLInputElement | null>(null);

    const fechFoo = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
    }

    useEffect(() => fechFoo(), []);

    const showMe = () => fechFoo();

    const hideHandler = () => setTodos([]);

    const addTodo = () => {
        if (newTitle.current) {
            let newTodo = {
                userId: todos.length + 1,
                id: todos.length + 2,
                title: newTitle.current.value,
                completed: false
            }
            setTodos([newTodo, ...todos])
            newTitle.current.value = ""
        }
    }

    return (
        <div>
            <div>
                <Button title={"show me"} callBack={showMe} />
                <Button title={"hide me"} callBack={hideHandler} />
                {/* <button onClick={showMe}>show me</button>
            <button onClick={ () =>setTodos([])}>hide me</button> */}
            </div>
            <div>
                <Input 
                newTitle={newTitle} 
                //setNewTitle={setNewTitle} 
                />
                <Button title="add" callBack={addTodo} />
            </div>

            <ul>
                {todos.map((el) => {
                    return (
                        <li key={el.id}>
                            <span>{el.id} </span>
                            <span>{el.userId} </span>
                            <span>{el.title} </span>
                            <input type="checkbox" checked={el.completed} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}