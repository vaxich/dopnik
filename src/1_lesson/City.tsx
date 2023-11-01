import styled, { css } from "styled-components"
import { MoneyType } from "./OneLesson"
import { CurrentBancomat } from "./CurrentBancomat"

export type CityPropsType = {
    data: Array<MoneyType>
}

export const City = (props: CityPropsType) => {

    const mappedMoney = props.data.map((el, index) => {
        return (
            <CurrentBancomat
                key={index}
                money={el}
            />
        )
    })


    return (
        <div>
            <Wrapper>
                {mappedMoney}
            </Wrapper>


            <div>выводим денюшки</div>
            <div>выводим огику</div>
        </div>
    )
}


const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 30px;

`;
