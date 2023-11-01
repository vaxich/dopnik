import { useState } from "react"
import { Country } from "./Country"


export type BancnotsType = "Dollars" | "RUBLS" | "ALL"

export type MoneyType = {
    banknotes: BancnotsType
    value: number
    number: string
}

let defaultMoney: Array<MoneyType> = [
    { banknotes: "Dollars", value: 100, number: "a123589657" },
    { banknotes: "Dollars", value: 50, number: "a123589657" },
    { banknotes: "RUBLS", value: 100, number: "a123589657" },
    { banknotes: "Dollars", value: 100, number: "a123589657" },
    { banknotes: "Dollars", value: 50, number: "a123589657" },
    { banknotes: "RUBLS", value: 100, number: "a123589657" },
    { banknotes: "Dollars", value: 500, number: "a123589657" },
    { banknotes: "RUBLS", value: 50, number: "a123589657" }
]


const moneyFilter = (money: MoneyType[], filter: BancnotsType) => {
    if(filter == "ALL") {
        return defaultMoney
    }
    return money.filter((el) => el.banknotes === filter)
   
}

export const OneLesson = () => {
    const [money, setMoney] = useState<Array<MoneyType>>(defaultMoney)

    const [filterValue, setFilterValue] = useState<BancnotsType>("ALL");

    const filterdMoney = moneyFilter(money, filterValue)

    return (
        <div>
            <Country
                data={filterdMoney}
                setFilterValue={setFilterValue}
            />
        </div>
    )
}
