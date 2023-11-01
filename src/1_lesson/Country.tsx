import { City } from "./City"
import { BancnotsType, MoneyType } from "./OneLesson"

export type CountryPropsType = {
    data: Array<MoneyType>
    setFilterValue: (filterValue: BancnotsType) => void
}

export const Country = (props: CountryPropsType) => {

    const setAll = () => {
        props.setFilterValue("ALL")
    }

    const setADollars = () => {
        props.setFilterValue("Dollars")
    }

    const setRubls = () => {
        props.setFilterValue("RUBLS")
    }


    return (
        <div>
            <button onClick={setAll}>All</button>
            <button onClick={setADollars}>Dollars</button>
            <button onClick={setRubls}>RUBLS</button>
            <City
                data={props.data}
            />
        </div>
    )
}