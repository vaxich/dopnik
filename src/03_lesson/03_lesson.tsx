import { ButtonBig } from "./ButtonBig"


export const ThreeLesson = () => {

    return (
        <div>
            <ButtonBig onClick={() => { }} color={'red'}>RED button</ButtonBig>
            <ButtonBig onClick={() => { }}>DEFAULT button</ButtonBig>
            <ButtonBig onClick={() => { }} disabled={true} color={'secondary'}> DISABLED button</ButtonBig>
        </div>
    )
}