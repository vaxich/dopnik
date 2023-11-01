import { styled } from "styled-components"
import { MoneyType } from "./OneLesson"

export type CurrentBancomatPropsType = {
    money: MoneyType
}

export const CurrentBancomat = (props: CurrentBancomatPropsType) => {

const bancnotesFilter = props.money.banknotes === "Dollars" ? "green" : "blue"
    return (
       
            <Bancnote color= {bancnotesFilter}>
                <Name>
                    {props.money.banknotes}
                </Name>
                <Nominal>
                    {props.money.value}
                </Nominal>
                
            </Bancnote>
            

    )
}

type PropsType = {
    color: string
}

const Bancnote = styled.div<PropsType>`
  background-color:  ${props => props.color};
  width: 400px;
  height: 200px;
  margin: 10px;

`


const Name = styled.div`
  display: flex;
  justify-content: center;
  font-size: 30px;

`

const Nominal = styled.div`
  display: flex;
  justify-content: center;
  font-size: 90px;
  margin-top: 30px;

`

//---------------------------------------
// import { styled } from "styled-components"
// import { MoneyType } from "./OneLesson"

// export type CurrentBancomatPropsType = {
//     money: MoneyType
// }

// export const CurrentBancomat = (props: CurrentBancomatPropsType) => {


//     return (
//         props.money.banknotes === "Dollars"
//             ? <BancnoteGreen>
//                 <Name>
//                     {props.money.banknotes}
//                 </Name>
//                 <Nominal>
//                     {props.money.value}
//                 </Nominal>
                
//             </BancnoteGreen>
//             : <BancnoteBlue>
//                 <Name>
//                     {props.money.banknotes}
//                 </Name>
//                 <Nominal>
//                     {props.money.value}
//                 </Nominal>

//             </BancnoteBlue>

//     )
// }

// const BancnoteGreen = styled.div`
//   background-color: green;
//   width: 400px;
//   height: 200px;
//   margin: 10px;

// `

// const BancnoteBlue = styled.div`
//   background-color: blue;
//   width: 400px;
//   height: 200px;
//   margin: 10px;

// `
// const Name = styled.div`
//   display: flex;
//   justify-content: center;
//   font-size: 30px;

// `

// const Nominal = styled.div`
//   display: flex;
//   justify-content: center;
//   font-size: 90px;
//   margin-top: 30px;

// `