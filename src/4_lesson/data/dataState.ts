
export type DataStateType = {
    pages: Array<PagesType>
}

export type PagesType = {
    heading: string
    about: string
}

export const dataState = {
    pages: [
        {
            heading: "цикл While",
            about: "цикл while имеет следующий цикл"
        },
        {
            heading: "цикл for",
            about: "цикл for имеет следующий цикл"
        },
        {
            heading: "цикл switch",
            about: "цикл switch имеет следующий цикл"
        },
    ],
}
