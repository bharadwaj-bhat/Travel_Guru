import styled from "styled-components"

export const MainDiv=styled.div`
padding-top:3% ;
padding-bottom: 3%;
border-bottom: 1px solid #e5e5e5;
border-top: 1px solid #e5e5e5;
`
export const ReviewDiv=styled.div`
width: 70%;

text-align: left;
margin: auto;
`
export const P=styled.p`
font-size: 1.71429em;
color: #333333;
`
export const ReviewInnerDiv=styled.div`
display: flex;
margin-bottom: 2vh;
`

export const Symbol=styled.div`
width: 14vh;
height: 14vh;
border-radius: 50%;
background-color: #ccc;
text-align: center;

p{
    margin-top:3.8vh ;
    font-size: 3em;
    font-weight: 300;
}

`
export const RatingDiv=styled.div`
padding:1%;
width: 15%;

`
export const H3=styled.h3`
margin-bottom: -1px;
color: #333333;

`
export const ReviewSection=styled.div`
width: 70%;
background-color: #f5f6f8;
padding:1%;
display: flex;
flex-direction: row-reverse;
color:#333333;
font-size: 0.9em;
border-radius: 3px;
line-height: 2em;
word-spacing: 2px;

`
export const SubDiv=styled.div`
display: flex;
width: 70%;

text-align: left;
margin: auto;
line-height: 2em;
word-spacing: 2px;
div{
    width: 30%;
    padding: 2%;
}

`
export const HeadP=styled.p`
    font-size: 1.42857em;
    color: #6f6f6f;
    font-weight: 500;
`
export const BodyP=styled.p`
    color: #737373;
    font-size: 0.9em;

`
export const CustomDiv = styled.div`
  & > div:first-child > div{
    display:${props => ("leh".includes(props.text))&&props.text.length>0 ? "block" : "none"};
  }
`

