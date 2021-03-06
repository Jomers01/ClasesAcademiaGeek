import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #0F0E17;
    height: 60px;
    &:hover {
        border-bottom: #F25F4C;
        color: #F25F4C;
    }
`

export const A = styled.a`
    text-decoration: none;
    font-size: 18px;
    display: inline;
    color: white;
`

export const Li = styled.li`
    list-style: none;
    display: inline;
    padding: 20px;
`

export const Btn = styled.button`
    background-color: #FF8906;
    height: 32px;
    border: none;
    margin-right: 20px;
    color: white;
    font-family: 'Nunito';
    font-size: 14px;
`

export const Bnv = styled.div`
    background-color: #0F0E17;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 90.4vh;
`

export const H1 = styled.h1`
    color: white;
    font-size: 45px;
    font-family: 'Nunito';
    margin-top: -30px;
`

export const P = styled.p`
    color: white;
    font-size: 17px;
    margin-top: -10px;
    font-family: 'Lora';
`

export const Arrow = styled.img`
    width: 40px;
    position: absolute;
    bottom: 0;
    left: 0;
    margin-left: 30px;
    margin-bottom: 60px;
`

export const ContP = styled.div`
    display: flex;
    justify-content: space-between;
    margin-right: 10px;
`

export const H2P = styled.h2`
    color: black;
    font-family: 'Nunito';
    font-size: 40px; 
    margin: 32px;
`

export const PP = styled(P)`
    color: black;
    font-size: 20px;
    margin-top: 37px;
    margin-right: 40px;
`

export const ImgP = styled.img`
    width: 90vw;
    margin: 0 40px;
    margin-bottom: 30px;
`

export const CountP2 = styled.div`
    display: flex;
    justify-content: space-around;
`

export const ImgP2 = styled.img`
    width: 400px;
    margin-right: 30px;
    margin-left: 35px;
`

export const ContUp = styled.div`
    position: absolute;
    width: 400px;
    height: 240px;
    background-color: #0F0E17;
    margin-left: 20px;
    margin-top: 60px;
`

export const H3P = styled.h3`
    color: white;
    margin-left: 20px;
    font-size: 28px;
`

export const PPP = styled.p`
    color: white;
    margin-left: 20px;
    font-size: 22px;
`

export const BtnUp = styled(Btn)`
    margin-left: 20px;
    height: 40px;
`
export const BtnUp2 = styled(BtnUp)`
    margin-left: -10px;
    height: 40px;
    color: #FF8906;
    background-color: #0F0E17;
    border: 3px solid #FF8906;
`

export const BtnE = styled(BtnUp2)`
    background-color: white;
    border: 2px solid black;
    color: black;
    height: 50px;
    font-family: 'Nunito';
    font-size: 16px;
    position: relative;
    left: 42%;
    margin-top: 30px;
    margin-bottom: 30px;
`

export const ContS1 = styled.div`
    background: linear-gradient(#FEB692, #EA5455);
    padding: 30px 40px 50px 40px;
    font-family: 'Nunito';
`

export const ContS = styled(ContP)`
    justify-content: space-around;
    font-family: 'Lora';
`

export const BtnS = styled.button`
    width: 208px;
    height: 38px;
    border: none;
    color: #FF8906;
    background-color: #0F0E17;
    font-family: 'Nunito';
    font-size: 14px;
`

export const ContC1 = styled(ContS1)`
    display: flex;
    justify-content: center;
`

export const ContC2 = styled.div`
    background-color: #0F0E17;
    color: white;
    padding: 20px;
`

export const ContCH2 = styled.h2`
    font-size: 28px;
`

export const ContCP = styled.p`
    font-family: 'Lora';
`

export const ContC3 = styled.div`
    display: flex;
    flex-direction: column;
`

export const ContCI = styled.input`
    height: 40px;
    font-family: 'Lora';
    font-size: 16px;
`

export const ContF = styled.footer`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #0F0E17;
    color: white;
    font-family: 'Nunito';
`

