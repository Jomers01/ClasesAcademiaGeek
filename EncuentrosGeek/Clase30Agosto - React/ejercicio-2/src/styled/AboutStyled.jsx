import styled from "styled-components";

const AboutStyled = styled.div`
    text-align: center;
`

const AboutAvatar = styled.div`
    padding: 2em 0 0 0;
`

const AboutImg = styled.img`
    border-radius: 100%;
    width: 160px;
    height: 160px;
    border: 2px solid #3f51b5;
    margin: 0 auto;
    display: block;
    box-shadow: 0 0 10px rgba(0,0,0,0,0.6);
    object-fit: cover;
`

const AboutName = styled.div`
    text-align: center;
`

const AboutH2 = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: 1.2px;
    margin: auto.5em 0 0 0;
    color: #448AFF;
`

const AboutProfession = styled.span`
    margin: .2em 0 1em 0;
    letter-spacing: 1.6px;
    font-weight: 300;
    color: #448AFF;
`

const AboutLocation = styled.span`
    color: #757575;
    letter-spacing: 1.6px;
    font-weight: 400;
`

const ContainerFlex = styled.div`
    display: flex;
`

const SkillFleblox = styled(ContainerFlex)`
    flex-wrap: wrap;
`

const H2Title = styled.h2`
    color: skyblue;
    letter-spacing: 1.6px;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 20px;
`

const H3Title = styled.h3`
    margin-top: -15px;
    font-size: 18px;
`

const Parrafo = styled(H3Title)`
    font-weight: 400;
    font-size: 16px;
`

const Container = styled.div`
    width: 200px;
    height: 20px;
    background-color: #ddd;
    border-radius: 10px;
    margin-top: -15px;
    margin-right: 10px;
    margin-bottom: 30px;
`

const Hability = styled.div`
    text-align: right;
    width: 80%;
    height: 20px;
    border-radius: 10px;
    background-color: #04aa6d;
`

export const AboutS = AboutStyled
export const Avatar = AboutAvatar
export const Img = AboutImg
export const Name = AboutName
export const H2 = AboutH2
export const Profession = AboutProfession
export const Location = AboutLocation
export const FlexBox = ContainerFlex
export const H2T = H2Title
export const H3T = H3Title
export const P = Parrafo
export const Cont = Container
export const Skill = Hability
export const SF = SkillFleblox