import styled from "styled-components";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
import { useState } from "react";
import {totalPrice} from "../../redux/DatesData/actionTypes"
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import FinalPaymentPage from "./FinalPaymentPage"

const MainDiv = styled.div`
  padding-top: 1%;
  padding-bottom: 1%;
  background-color: #e2e2e2;
`;
const SubDiv = styled.div`
  width: 70%;
  display: flex;
  margin: auto;
`;
const LefSide = styled.div`
  width: 75%;
`;
const LeftDivTop = styled.div`
  width: 95%;

  background: #fff;
  border-radius: 3px;
  padding: 1%;
  display: flex;
`;
const LeftPic = styled.div`
  width: 25%;

  margin-right: 2%;

  img {
    width: 100%;
    height: 20vh;
    border-radius: 5px;
  }
`;
const RightDetail = styled.div`
  width: 74%;

  margin-right: 2%;
`;
const RightP = styled.div`
  color: #333333;
  font-size: 1.4em;
  font-weight: 900;
`;
const RightP1 = styled.div`
  color: #999999;
  font-size: 0.9em;
`;
const MidRight = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 1vh;
`;
const Check = styled.div`
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

const MiddleLastDiv = styled.div`
  width: 60%;
  div {
    display: flex;
    justify-content: space-between;
  }
`;
const DetailDiv = styled.div`
  border-top: 1px solid #e2e2e2;
  border-bottom: 1px solid #e2e2e2;
  display: flex;
  padding: 2%;

  div {
    color: #999999;
    width: 50%;
  }
`;
const Date = styled.div`
  display: flex;

  div {
    width: 16%;
    color: #999999;
    margin-right: 4%;
    font-size: 0.8em;
  }
`;
const Inclusion = styled.div`
  width: 30%;
  margin-top: 10px;
  div {
    display: flex;
  }
`;
const Policy = styled.div`
  padding: 1%;

  width: 95%;

  background: #f1f1f1;

  display: flex;

  div {
    margin-right: 1%;
  }
`;

const D1 = styled.div`
  color: #333333;
  font-size: 14px;
  margin-right: 1%;
`;
const D2 = styled.div`
  color: #666666;
  font-size: 14px;
  margin-right: 1%;
`;
const D3 = styled.div`
  margin-right: 1%;
`;
const MiddleDiv = styled.div`
  padding: 1%;
  background: #fff;
  width: 95%;
  margin-bottom: 2vh;
`;
const Mdiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
const M1div = styled.div`
  width: 20%;
  padding: 1%;
  margin-right: 1%;
  color: #333333;
  font-weight: 900;
  font-size: 1.2em;

  text-align: right;
`;
const M2div = styled.div`
  width: 25%;
  padding: 1%;
  border: 1px solid;
  font-size: 1em;
  margin-right: 1%;
  background-color: #eceeef;
  opacity: 1;
  border: 1px solid #a3a3a3;
`;
const M3div = styled.div`
  width: 35%;
  display: flex;
`;
const M31div = styled.div`
  width: 10%;
  padding: 2%;
  background-color: #eceeef;
  opacity: 1;
  border: 1px solid #a3a3a3;
`;
const M32div = styled.div`
  width: 90%;
  padding: 2%;
  background-color: #eceeef;
  opacity: 1;
  border: 1px solid #a3a3a3;
`;
const Instruction = styled.div`
  width: 60%;
  margin-left: 31%;
  font-size: 0.9em;
  padding-bottom: 3vh;
  margin-bottom: 1vh;
  border-bottom: 1px solid #a3a3a3;
`;
const Select = styled.select`
  padding: 1%;
  width: 100%;
  font-size: 0.9em;
  font-weight: 300;
  border: none;
  border-right: 1px solid #a3a3a3;
  background-color: #fff;
`;

const MsecondRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 3vh;
`;
const Ms = styled.div`
  width: 40%;
  display: flex;
`;
const Md1 = styled.div`
  width: 80%;
  padding: 2.5%;
  display: flex;
  border: 1px solid #a3a3a3;
  background-color: #fff;
  border-bottom: ${(props) =>
    props.value ? "2px solid black" : "1px solid #a3a3a3"};
`;

const Room = styled.div`
  width: 20%;
  padding: 1%;
  margin-right: 2%;
  color: #333333;
  font-weight: 900;
  font-size: 1.2em;
  text-align: right;
`;

const Inp1 = styled.input`
  padding: 1%;
  border: none !important;
  font-size: 1em;
`;

const Md2 = styled.div`
  padding: 1%;
  display: flex;
  border: 1px solid #a3a3a3;
  background-color: #fff;
  border-bottom: ${(props) =>
    props.value ? "2px solid black" : "1px solid #a3a3a3"};
`;

const MthirdRow = styled.div`
  width: 100%;
  display: flex;
  margin-left: 15%;
  margin-top: 4vh;
`;
const Special = styled.div`
  width: 10%;
  padding: 1%;
  margin-right: 2%;
  color: #333333;
  font-weight: 900;
  font-size: 1.2em;
  text-align: right;
`;

const RequestIn = styled.div`
  width: 80%;
`;
const Input = styled.input`
  width: 80%;
  height: 7vh;
`;
const Instruction1 = styled.div`
  width: 61%;
  margin-left: 31%;
  padding-bottom: 3vh;
  margin-bottom: 1vh;
  font-size: 0.9em;
`;
const Continue = styled.div`
  width: 30%;
  margin: auto;

`;
const RightSide = styled.div`
  width: 23%;
  padding: 1%;
`;

const Price = styled.div`
  padding: 2%;
  background-color: #fff;
  display: flex;

  p {
    color: #666666;
  }
`;

const DDiv = styled.div`
  width: 60%;
`;
const DDiv1 = styled.div`
  width: 40%;
`;
const Total = styled.div`
  padding: 2%;
  color: #666666;
  font-size: 1.3em;
  border-radius: 3px;
  display: flex;
  font-weight: 900;
  border-top: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  background-color: #f4f4f4;
`;
const Dddiv = styled.div`
  width: 60%;
`;

const Promo = styled.div`
  padding: 8%;
  background-color: #fff;
  display: flex;
  border-radius: 3px;
input{
  width: 40%;
}

`;

const Button=styled.div`
width: 50%;
text-align: center;
background-color: green;
padding: 2%;
font-size: 0.9em;
color: #fff;
cursor: pointer;

`

const Button1=styled.div`

background-color: #DDDDDD ;
padding: 2%;

cursor: pointer;


`

export default function BookingLastPage() {
  const [value, setValue] = useState("");
  const [cor, setCor] = useState(false);
  const [corr, setCorr] = useState(false);
  const [finalData,setFinalData]=useState(true);

  const dispatch=useDispatch()
  const priceState = useSelector((state) => state.date.price);
  const id_current = useSelector((state) => state.date.id);
  const checkIndate=useSelector((state)=> state.date.checkInDate.day)
  const checkOutdate=useSelector((state)=> state.date.checkOutDate.day)
  const adults=useSelector((state)=>state.date.adults)
  const child=useSelector((state)=> state.date.children)
  const monthC=useSelector((state)=> state.date.checkInDate.month)
  const monthO=useSelector((state)=> state.date.checkOutDate.month)
  const dayCount=checkOutdate-checkIndate
  const tp=priceState+840+227;
const image=useSelector((state)=> state.hotel.data[id_current-1].headImage)
const name=useSelector((state)=> state.hotel.data[id_current-1].name)

useEffect(()=>{
dispatch(totalPrice(tp))

},[])

 



       


  const handleClick = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const handleColor = () => {
    setCor(!cor);
  };
  const handleColorr = () => {
    setCorr(!corr);
  };
  const handleColor1 = () => {
    if (cor === true) {
      setCor(false);
    }
    if (corr === true) {
      setCorr(false);
    }
  };
  return (
    
    <>
    { (finalData)?
      <MainDiv onClick={handleColor1}>
        <SubDiv>
          <LefSide>
            <div>
              <img src={process.env.PUBLIC_URL + "/read.png"} alt="" />
            </div>
            <LeftDivTop>
              <LeftPic>
                <img
                  src={`${image}`}
                  alt=""
                />
              </LeftPic>
              <RightDetail>
                <RightP>{name}</RightP>
                <RightP1>
                  Shey Yokma, Near Shey Church, Ladakh, Village Shey, Leh,
                  194101, India
                </RightP1>
                <MidRight>
                  <Check>
                    <p>Check-In</p>
                    <h1>{checkIndate}</h1>
                  </Check>
                  <Check>
                    <p>Check-Out</p>
                    <h1>{checkOutdate}</h1>
                  </Check>
                  <MiddleLastDiv>
                    <div>
                      <div>
                        <h3 style={{ marginTop: "-3px" }}>{dayCount} Days & 1 Night</h3>
                      </div>
                      <div style={{ color: "#4197CD", cursor: "pointer" }}>
                        Change Room
                      </div>
                    </div>
                    <DetailDiv>
                      <div>Room 1:</div>
                      <div>{adults} Adult</div>
                      {(child>0)?<div>{child} childrens</div>:""

                      }
                    
                    </DetailDiv>
                  </MiddleLastDiv>
                </MidRight>
                <Date>
                  <div>{(monthC==="08")?"Aug":(monthC==="09")?"Sep":"Oct"} | 12:00PM</div>
                  <div>{(monthO==="08")?"Aug":(monthO==="09")?"Sep":"Oct"} | 10:00AM</div>
                </Date>
                <Inclusion>
                  <div>
                    <div style={{ marginRight: "10px" }}>Inclusion</div>
                    <div>
                      <div>
                        <CheckRoundedIcon style={{ color: "green" }} />
                      </div>
                      <div>Breakfast</div>
                    </div>
                  </div>
                </Inclusion>
              </RightDetail>
            </LeftDivTop>
            <Policy>
              <D1>Cancellation Policy: </D1>
              <D2>No refund if you cancel this booking. </D2>
              <D3 style={{ color: "#4197CD", cursor: "pointer" }}>View More</D3>
            </Policy>

            <div>
              <img src={process.env.PUBLIC_URL + "/travel.png"} alt="" />
            </div>
            <MiddleDiv>
              <Mdiv>
                <M1div>Contact Details</M1div>

                <M2div>koligesurya@gmail.com</M2div>
                <M3div>
                  <M31div>+91 </M31div>
                  <M32div>9481378985</M32div>
                </M3div>
              </Mdiv>
              <Instruction>
                Your booking details will be sent to this email address and
                mobile number.
              </Instruction>

              <MsecondRow>
                <Room>Room 1</Room>
                <Ms>
                  <Md1 onClick={handleColor} value={cor}>
                    <div>
                      <Select  onClick={handleClick}>
                        <option value="Title">Title</option>
                        <option value="Mr">Mr.</option>
                        <option value="Mrs">Mrs.</option>
                      </Select>
                    </div>
                    <div>
                      {" "}
                      <TextField
                        style={{ marginLeft: "10px",fontSize:"0.9em" }}
                        placeholder="First Name"
                        fullWidth
                      />
                    </div>
                  </Md1>
                </Ms>

                <Md2 onClick={handleColorr} value={corr}>
                  <TextField
                    id="standard-full-width"
                    style={{ marginLeft: "10px", borderBottomColor: "none" }}
                    placeholder="Last Name"
                    fullWidth
                  />
                </Md2>
              </MsecondRow>
              <MthirdRow>
                <Special>Special Request:</Special>
                <RequestIn>
                  <Input />
                </RequestIn>
              </MthirdRow>
              <Instruction1>
                Special request can't be guaranteed. We will pass these requests
                to the hotels.
              </Instruction1>
            </MiddleDiv>
            <Continue>
             <Button onClick={()=>setFinalData(false)}>
               CONTINUE
             </Button>
            </Continue>
          </LefSide>
          <RightSide>
            <h3 style={{ color: "#333333" }}>Tariff Details</h3>
            <Price>
              <DDiv>
                <p>Hotel Charges</p>
                <p>Hotel GST</p>
                <p>Service Charge </p>
              </DDiv>
              <DDiv1>
                <p> &#8377; {priceState}</p>
                <p>&#8377;840</p>
                <p>&#8377;277</p>
              </DDiv1>
            </Price>
            <Total>
              <Dddiv>You Pay</Dddiv>
              <div style={{color:"#333333"}}>&#8377;{tp}</div>
            </Total>
            <h3 style={{ color: "#333333" }}>Promo Code</h3>
            <Promo>
              <input type="text" placeholder="Apply Promo Code" />
                <Button1>Apply</Button1>
            </Promo>
          </RightSide>
        </SubDiv>
      </MainDiv>
      :
      <FinalPaymentPage />

     }
    </>
  );
}
