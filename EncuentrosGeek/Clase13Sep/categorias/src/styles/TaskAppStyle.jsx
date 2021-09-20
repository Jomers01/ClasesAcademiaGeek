import styled from "styled-components";

export const H1 = styled.h1`

`

export const H2 = styled.h2`
    text-align: center;
    font-size: 33px;
`

export const DivBox = styled.div`
    display: flex;
    justify-content: space-around;
`

export const DivLista = styled.div`
    width: 60%;
`

export const DivTareas = styled.form`
    display: flex;
    flex-direction: column;
    width: auto;
`

export const Inputs = styled.input`
    display: block;
    margin: 0 auto;
    margin-bottom: 10px;
    padding: 7px;
    height: 25px;
    width: 300px;
`
export const Textarea = styled.textarea`
    display: block;
`
export const Button = styled.button`
    margin-top: 10px;
    height: 45px;
    border: none;
    background-color: #333;
    color: white;
    font-size: 18px;
    border-radius: 4px;
    cursor: pointer;
`

export const DivTara = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const PTarea = styled.p`
    margin-right: 20px;
    font-size: 20px;
    width: 600px;
    margin-left: 20px;
`

export const ButtonTareas = styled.button`
    margin-right: 10px;
    border: none;
    padding: 8px;
    border-radius: 4px;
`

export const ButtonEliminar = styled(ButtonTareas)`
    background-color: tomato;
`

export const ButtonEditar = styled(ButtonTareas)`
    background-color: #FFDB58;
`

export const ButtonDetalle = styled(ButtonTareas)`
    background-color: yellowgreen;
`