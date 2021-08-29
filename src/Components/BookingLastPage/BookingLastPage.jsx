import styled from "styled-components";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useSelector } from "react-redux";

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
  width: 20%;
  padding: 1%;
  border: 1px solid;
  margin-right: 1%;
  background-color: #eceeef;
  opacity: 1;
  border: 1px solid #a3a3a3;
`;
const M3div = styled.div`
  width: 38%;
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
  padding-bottom: 3vh;
  margin-bottom: 1vh;
  border-bottom: 1px solid #a3a3a3;
`;
const Select = styled.select`
  padding: 1%;
  width: 100%;
  font-size: 1.2em;
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
`;

export default function BookingLastPage() {
  const [value, setValue] = useState("");
  const [cor, setCor] = useState(false);
  const [corr, setCorr] = useState(false);

  const priceState = useSelector((state) => state.date.price);
  const id_current = useSelector((state) => state.date.id);

  console.log(priceState, id_current);

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
      <MainDiv onClick={handleColor1}>
        <SubDiv>
          <LefSide>
            <div>
              <img src={process.env.PUBLIC_URL + "/read.png"} alt="" />
            </div>
            <LeftDivTop>
              <LeftPic>
                <img
                  src="https://imgcld.yatra.com/ytimages/image/upload/t_hotel_yatra_details_desktop/v1511414418/Hotel/00096502/13-Deluxe_Room_mpSdTs.jpg"
                  alt=""
                />
              </LeftPic>
              <RightDetail>
                <RightP>The Verda Driftwood</RightP>
                <RightP1>
                  Shey Yokma, Near Shey Church, Ladakh, Village Shey, Leh,
                  194101, India
                </RightP1>
                <MidRight>
                  <Check>
                    <p>Check-In</p>
                    <h1>29</h1>
                  </Check>
                  <Check>
                    <p>Check-Out</p>
                    <h1>30</h1>
                  </Check>
                  <MiddleLastDiv>
                    <div>
                      <div>
                        <h3 style={{ marginTop: "-3px" }}>2 Days & 1 Night</h3>
                      </div>
                      <div style={{ color: "#4197CD", cursor: "pointer" }}>
                        Change Room
                      </div>
                    </div>
                    <DetailDiv>
                      <div>Room 1:</div>
                      <div>1 Adult</div>
                      <div>3 Children</div>
                    </DetailDiv>
                  </MiddleLastDiv>
                </MidRight>
                <Date>
                  <div>Aug | 12:00PM</div>
                  <div>Aug | 10:00AM</div>
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
                      <Select lable={value} onClick={handleClick}>
                        <option value="Title">Title</option>
                        <option value="Mr">Mr.</option>
                        <option value="Mrs">Mrs.</option>
                      </Select>
                    </div>
                    <div>
                      {" "}
                      <TextField
                        style={{ marginLeft: "10px" }}
                        placeholder="First Name and Middle Name"
                        color={"none"}
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
              <Button
                variant="contained"
                color="secondary"
                disableElevation
                style={{ backgroundColor: "green", width: "100%" }}
              >
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
                <p> &#8377; 6,999</p>
                <p>&#8377;839</p>
                <p>&#8377;277</p>
              </DDiv1>
            </Price>
            <Total>
              <Dddiv>You Pay</Dddiv>
              <div>&#8377;6,999</div>
            </Total>
            <h3 style={{ color: "#333333" }}>Promo Code</h3>
            <Promo>
              <input type="text" placeholder="Apply Promo Code" />
              <Button
                variant="contained"
                color="default"
                disableElevation
                style={{ backgroundColor: "#DDDDDD", width: "100%" }}
              >
                Apply
              </Button>
            </Promo>
          </RightSide>
        </SubDiv>
      </MainDiv>
    </>
  );
}
