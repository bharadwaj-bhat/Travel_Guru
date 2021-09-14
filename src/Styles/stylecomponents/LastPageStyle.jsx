import styled from "styled-components";

export const MainDiv = styled.div`
  padding-top: 1%;
  padding-bottom: 1%;
  background-color: #e2e2e2;
`;
export const SubDiv = styled.div`
  width: 70%;
  display: flex;
  margin: auto;
`;
export const LefSide = styled.div`
  width: 75%;
`;
export const LeftDivTop = styled.div`
  width: 95%;

  background: #fff;
  border-radius: 3px;
  padding: 1%;
  display: flex;
`;
export const LeftPic = styled.div`
  width: 25%;

  margin-right: 2%;

  img {
    width: 100%;
    height: 20vh;
    border-radius: 5px;
  }
`;
export const RightDetail = styled.div`
  width: 74%;

  margin-right: 2%;
`;
export const RightP = styled.div`
  color: #333333;
  font-size: 1.4em;
  font-weight: 900;
`;
export const RightP1 = styled.div`
  color: #999999;
  font-size: 0.9em;
`;
export const MidRight = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 1vh;
`;
export const Check = styled.div`
  width: 15%;
  padding: 0.5%;
  background-color: #e2e2e2;
  text-align: center;
  border-radius: 3px;

  p {
    color: #999999;
    font-size: 0.9em;
    padding-bottom:1vh ;
  }

  h1 {
    margin-top: -20px;
  }
`;

export const MiddleLastDiv = styled.div`
  width: 60%;
  div {
    display: flex;
    justify-content: space-between;
  }
`;
export const DetailDiv = styled.div`
  border-top: 1px solid #e2e2e2;
  border-bottom: 1px solid #e2e2e2;
  display: flex;
  padding: 2%;

  div {
    color: #999999;
    width: 50%;
  }
`;
export const Date = styled.div`
  display: flex;

  div {
    width: 16%;
    color: #999999;
    margin-right: 4%;
    font-size: 0.8em;
  }
`;
export const Inclusion = styled.div`
  width: 30%;
  margin-top: 10px;
  div {
    display: flex;
  }
`;
export const Policy = styled.div`
  padding: 1%;

  width: 95%;

  background: #f1f1f1;

  display: flex;

  div {
    margin-right: 1%;
  }
`;

export const D1 = styled.div`
  color: #333333;
  font-size: 14px;
  margin-right: 1%;
`;
export const D2 = styled.div`
  color: #666666;
  font-size: 14px;
  margin-right: 1%;
`;
export const D3 = styled.div`
  margin-right: 1%;
`;
export const MiddleDiv = styled.div`
  padding: 1%;
  background: #fff;
  width: 95%;
  margin-bottom: 2vh;
`;
export const Mdiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
    margin-bottom: 5px;
`;
export const M1div = styled.div`
  width: 20%;
  padding: 1%;
  margin-right: 1%;
  color: #333333;
  font-weight: 900;
  font-size: 1.2em;

  text-align: right;
`;
export const M2div = styled.div`
  width: 25%;
  padding: 1%;
  border: 1px solid;
  font-size: 1em;
  overflow:hidden;
  margin-right: 1%;
  display: flex;
  align-items: center;
  background-color: #eceeef;
  opacity: 1;
  border: 1px solid #a3a3a3;

`;
export const M3div = styled.div`
  width: 35%;
  display: flex;

`;
export const M31div = styled.div`
  width: 10%;
  padding: 2%;
  background-color: #eceeef;
  opacity: 1;
  display: flex;
  align-items: center;
  border: 1px solid #a3a3a3;
`;
export const M32div = styled.div`
  width: 90%;
  padding: 2%;
  display: flex;
  align-items: center;
  background-color: #eceeef;
  opacity: 1;
  border: 1px solid #a3a3a3;
`;
export const Instruction = styled.div`
  width: 60%;
  margin-left: 31%;
  font-size: 0.9em;
  padding-bottom: 3vh;
  margin-bottom: 1vh;
  border-bottom: 1px solid #a3a3a3;
`;
// const Select = styled.select`
//   padding: 1%;
//   width: 100%;
//   font-size: 0.9em;
//   font-weight: 300;
//   border: none;
//   border-right: 1px solid #a3a3a3;
//   background-color: #fff;
// `;

export const MsecondRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 3vh;
`;
export const Ms = styled.div`
  width: 40%;
  display: flex;
`;
export const Md1 = styled.div`
  width: 80%;
  padding: 2.5%;
  display: flex;
  border: 1px solid #a3a3a3;
  background-color: #fff;
  border-bottom: ${(props) =>
    props.value ? "2px solid black" : "1px solid #a3a3a3"};
`;

export const Room = styled.div`
  width: 20%;
  padding: 1%;
  margin-right: 2%;
  color: #333333;
  font-weight: 900;
  font-size: 1.2em;
  text-align: right;
`;

// const Inp1 = styled.input`
//   padding: 1%;
//   border: none !important;
//   font-size: 1em;
// `;

export const Md2 = styled.div`
  padding: 1%;
  display: flex;
  border: 1px solid #a3a3a3;
  background-color: #fff;
  border-bottom: ${(props) =>
    props.value ? "2px solid black" : "1px solid #a3a3a3"};
`;

export const MthirdRow = styled.div`
  width: 100%;
  display: flex;
  margin-left: 15%;
  margin-top: 4vh;
`;
export const Special = styled.div`
  width: 10%;
  padding: 1%;
  margin-right: 2%;
  color: #333333;
  font-weight: 900;
  font-size: 1.2em;
  text-align: right;
`;

export const RequestIn = styled.div`
  width: 80%;
`;
export const Input = styled.input`
  width: 80%;
  height: 7vh;
`;
export const Instruction1 = styled.div`
  width: 61%;
  margin-left: 31%;
  padding-bottom: 3vh;
  margin-bottom: 1vh;
  font-size: 0.9em;
`;
export const Continue = styled.div`
  width: 30%;
  margin: auto;

`;
export const RightSide = styled.div`
  width: 23%;
  padding: 1%;
`;

export const Price = styled.div`
  padding:2% 5%;
  background-color: #fff;
  display: flex;
  p {
    color: #666666;
  }
`;

export const DDiv = styled.div`
  width: 60%;
`;
export const DDiv1 = styled.div`
  width: 40%;
`;
export const Total = styled.div`
  padding: 2% 5%;
  color: #666666;
  font-size: 1.3em;
  border-radius: 3px;
  display: flex;
  font-weight: 900;
  border-top: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  background-color: #f4f4f4;
`;
export const Dddiv = styled.div`
  width: 60%;
`;

export const Promo = styled.div`
  padding: 8%;
  background-color: #fff;
  display: flex;
  border-radius: 3px;
input{
  width: 80%;
}

`;

export const Button=styled.div`
width: 50%;
text-align: center;
background-color: green;
padding: 3%;
font-size: 0.9em;
border-radius:5px;
color: #fff;
cursor: pointer;

`

export const Button1=styled.div`

background-color: #DDDDDD ;
padding: 2%;

cursor: pointer;


`
//////
export const H03=styled.h3`
margin-top: -3px;


`
export const Div001=styled.div`
color: #4197CD;
cursor: pointer;


`
export const Div002=styled.div`
margin-right: 10px;

`

export const D301=styled.div`
 color: #4197CD;
 cursor: pointer;
 margin-right: 1%;
`
export const Div003=styled.div`
color:#333333;

`
export const H333=styled.h3`
color: "#333333"

`