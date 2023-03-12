import styled from 'styled-components'
import style from 'styled-components'

export const Container = styled.div `
    display: flex;
    align-items: center;
    flex-direction: column;

    h1{
        margin: 84px 0  24px;
    }

    input{
        width: 50%;
        padding: 24px;

        background: #E6E6E6;
        border-radius: 4px;
        border: none;

        font-size: 16px;

    }

    button{
        width: 50%;
        padding: 24px;
        background: #ea4c89;
        color: #fff;
        border-radius: 4px;
        margin: 12px 0 84px;
        border: none;

        cursor: pointer;
        transition: filter 0.2s.
        font-size: 16px;
    }
    button:hover{
        filter: brightness(0.9);
    }

`