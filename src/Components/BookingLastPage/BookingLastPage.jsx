import {MainDiv , SubDiv,LefSide,LeftDivTop,LeftPic,RightDetail,Input,RightP,RightP1,MidRight,Check,MiddleLastDiv,DetailDiv,Date,Inclusion,Policy,D1,D2,MiddleDiv,Mdiv ,M1div ,M2div,M3div ,M31div ,M32div,Instruction,MsecondRow,Ms,Md1, Room,Md2,MthirdRow,Special,RequestIn,Instruction1,Continue,RightSide,Price,DDiv,DDiv1 ,Total,Dddiv,Promo,Button,Button1,H03,Div001,Div002,Div003,D301,H333 } from "./LastPageStyle"
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
import styles from "../../Styles/BookingLast.module.css"
import { useState } from "react";
import {totalPrice} from "../../redux/DatesData/actionTypes"
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import FinalPaymentPage from "./FinalPaymentPage"
import { HotelData } from "../../fakeData/HotelData";
import { useHistory } from "react-router";


export default function BookingLastPage() {
  
  const [cor, setCor] = useState(false);
  const [corr, setCorr] = useState(false);
  const [finalData, setFinalData] = useState(true);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const priceState = useSelector((state) => state.date.price);
  const id_current = useSelector((state) => state.date.id);
  const checkIndate=useSelector((state)=> state.date.checkInDate.day)
  const checkOutdate=useSelector((state)=> state.date.checkOutDate.day)
  const adults=useSelector((state)=>state.date.adults)
  const child=useSelector((state)=> state.date.children)
  const monthC=useSelector((state)=> state.date.checkInDate.month)
  const monthO = useSelector((state) => state.date.checkOutDate.month)
  const history = useHistory()
  const dayCount=checkOutdate-checkIndate
  const tp = priceState + 840 + 227;
  useEffect(() => {
    dispatch(totalPrice(tp)) 
  },[dispatch,tp])
  if (id_current === -1) {
    history.push("/hotel-search");
    return <></>
  }
  const image = HotelData[id_current - 1].headImage;
  const name = HotelData[id_current - 1].name;

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
                        <H03>{dayCount} Days & {dayCount} Night</H03>
                      </div>
                      <Div001>
                        Change Room
                      </Div001>
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
                  <div className={styles.month_left}>{(monthC==="08")?"Aug":(monthC==="09")?"Sep":"Oct"} | 12:00PM</div>
                  <div>{(monthO==="08")?"Aug":(monthO==="09")?"Sep":"Oct"} | 10:00AM</div>
                </Date>
                <Inclusion>
                  <div>
                    <Div002>Inclusion</Div002>
                    <div>
                      <div>
                        <CheckRoundedIcon className={styles.checkIcon} />
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
              <D301>View More</D301>
            </Policy>

            <div className={styles.second_top}>
              <img src={process.env.PUBLIC_URL + "/travel.png"} alt="" />
            </div>
            <MiddleDiv>
              <Mdiv>
                <M1div>Contact Details</M1div>

                <M2div>{user.email}</M2div>
                <M3div>
                  <M31div>+91 </M31div>
                    <M32div>{ user.mobile}</M32div>
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
                      
                    </div>
                    <div>
                      {" "}
                      <TextField
                        className={styles.textField}
                        placeholder="First Name"
                        fullWidth
                      />
                    </div>
                  </Md1>
                </Ms>

                <Md2 onClick={handleColorr} value={corr}>
                  <TextField
                    id="standard-full-width"
                    className={styles.textField1}
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
            <h3 className={styles.h3}>Tariff Details</h3>
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
              <Div003>&#8377;{tp}</Div003>
            </Total>
            <H333>Promo Code</H333>
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
