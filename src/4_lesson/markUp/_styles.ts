import { styled } from "styled-components"

const NavWrapper = styled.div`
    margin-left: 10px;
    font-size: 20px;

    & > a {
        text-decoraion: none;
        color: #1e3786;
    }

    & > a.active {
        text-decoraion: none;
        color: #03eaff;
    }

    & > a:hover {
        color: steelblue;
    }
`

export const S = {
    NavWrapper
}