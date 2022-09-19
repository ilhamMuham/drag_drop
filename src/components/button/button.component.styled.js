import styled from "styled-components"


export const Buttonclick = styled.button`
    width: 100px;
    height: 30px;
    border: none;
    color: ${(p)=>p.color ? p.color : 'white'};
    cursor: pointer;
    font-weight: bold;
    border-radius: 3px;
    background-color: grey;
    background-color: ${(p)=>p.bg ? p.bg : 'grey'};
`