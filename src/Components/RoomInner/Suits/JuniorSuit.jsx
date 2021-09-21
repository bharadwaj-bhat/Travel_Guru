import styles from "../../../Styles/RoomsInner.module.css";
import CheckIcon from "@material-ui/icons/Check";
import MoneyOffIcon from "@material-ui/icons/MoneyOff";
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";
import { useDispatch, useSelector } from "react-redux";
import { addPrice } from "../../../redux/DatesData/actionTypes";
import { useHistory } from "react-router-dom";

export const JuniorSuit = ({ price, title, image }) => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const history = useHistory();

  const dispatch = useDispatch();

  const handleOnlyRoom = () => {
    if (!isAuth) {
      alert("You are not logged in !!!")
      history.push("/payments");
    } else {
      dispatch(addPrice(price));
      history.push("/payments");
    }
  };

  const handleWithBreakFast = () => {
    if (!isAuth) {
      alert("You are not logged in !!!")
      history.push("/payments");
    } else {
      dispatch(addPrice(price + 1000));
      history.push("/payments");
    }
  };

  const handleWithLunch = () => {
    if (!isAuth) {
      alert("You are not logged in !!!")
      history.push("/payments");
    } else {
      dispatch(addPrice(price + 2000));
      history.push("/payments");
    }
  };

  const handleWithAll = () => {
    if (!isAuth) {
      alert("You are not logged in !!!")
      history.push("/payments");
    } else {
      dispatch(addPrice(price + 3000));
      history.push("/payments");
    }
  };

  return (
    <div className={styles.JuniorSuitWrapper}>
      <div>
        <p> {title} Suite</p>
        <div className={styles.JuniorSuitFlex}>
          <img src={image} alt="" />
          <div className={styles.JuniorSuitFlexColumn}>
            <p className={styles.suiteHeader}> {title} Suite Only </p>
            <div className={styles.JuniorSuitDiv}>
              <div className={styles.JuniorSuitDivInner}>
                <p className={styles.highlightedPTag}> MAX GUESTS </p>
                <p className={styles.highlightedPTag}> INCLUSIONS </p>
                <p className={styles.highlightedPTag}> HIGHLIGHTS </p>
                <p className={styles.highlightedPTag}> Price for 1 night</p>
                {/* {diff < 4 ? (
                  <p
                    className={styles.highlightedPTag}
                    style={{ fontSize: "0.8rem", fontColor: "orange" }}
                  >
                    {" "}
                    5 ROOMS LEFT
                  </p>
                ) : (
                  <></>
                )} */}
              </div>
              <div className={styles.JuniorSuitDivInner}>
                <img
                  className={styles.box_1_2}
                  src="https://image.flaticon.com/icons/png/512/681/681494.png"
                  alt=""
                />
                <div id={styles.iconId}>
                  {" "}
                  <CheckIcon fontSize="inherit" /> <p> room only</p>{" "}
                </div>
                <div id={styles.iconId}>
                  <MoneyOffIcon fontSize="inherit" />
                  <p>non-refundable</p>{" "}
                </div>
                <div className={styles.priceTagDiv}>
                  <h4 className={styles.priceTag}>
                    {" "}
                    <span  className={styles.box_1_1}> ₹</span> {price}{" "}
                  </h4>
                </div>
                <div className={styles.priceTagDiv}>
                  <button onClick={handleOnlyRoom}> BOOK NOW </button>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
        {/* -------------> */}

        <div id={styles.tabIdFrMr} className={styles.JuniorSuitFlexColumn}>
          <p className={styles.suiteHeader}> {title} Suites with Breakfast </p>
          <div className={styles.JuniorSuitDiv}>
            <div className={styles.JuniorSuitDivInner}>
              <p className={styles.highlightedPTag}> MAX GUESTS </p>
              <p className={styles.highlightedPTag}> INCLUSIONS </p>
              <p className={styles.highlightedPTag}> HIGHLIGHTS </p>
              <p className={styles.highlightedPTag}> Price for 1 night</p>
              {/* <p className={styles.highlightedPTag}> 5 ROOMS LEFT</p> */}
            </div>
            <div className={styles.JuniorSuitDivInner}>
              <img
                className={styles.box_1_2}
                src="https://image.flaticon.com/icons/png/512/681/681494.png"
                alt=""
              />
              <div id={styles.iconId}>
                {" "}
                <CheckIcon fontSize="inherit" /> <p> Breakfast </p>{" "}
              </div>
              <div id={styles.iconId}>
                <MoneyOffIcon fontSize="inherit" />
                <p>non-refundable</p>{" "}
              </div>
              <div className={styles.priceTagDiv}>
                <h4 className={styles.priceTag}>
                  {" "}
                  <span  className={styles.box_1_1}> ₹</span>{" "}
                  {Number(price) + 1000}{" "}
                </h4>
              </div>
              <div className={styles.priceTagDiv}>
                <button onClick={handleWithBreakFast}> BOOK NOW </button>
              </div>
            </div>
            <div className={styles.JuniorSuitDivInner}>
              <div></div>
              <div></div>
              <div id={styles.iconId}>
                <FreeBreakfastIcon fontSize="inherit" />
                <p>Free Breakfast</p>
              </div>
            </div>
          </div>
        </div>

        <div id={styles.tabIdFrMr} className={styles.JuniorSuitFlexColumn}>
          <p className={styles.suiteHeader}>
            {" "}
            {title} Suites with Breakfast & Dinner{" "}
          </p>
          <div className={styles.JuniorSuitDiv}>
            <div className={styles.JuniorSuitDivInner}>
              <p className={styles.highlightedPTag}> MAX GUESTS </p>
              <p className={styles.highlightedPTag}> INCLUSIONS </p>
              <p className={styles.highlightedPTag}> HIGHLIGHTS </p>
              <p className={styles.highlightedPTag}> Price for 1 night</p>
              {/* <p className={styles.highlightedPTag}> 5 ROOMS LEFT</p> */}
            </div>
            <div className={styles.JuniorSuitDivInner}>
              <img
                className={styles.box_1_2}
                src="https://image.flaticon.com/icons/png/512/681/681494.png"
                alt=""
              />
              <div id={styles.iconId}>
                {" "}
                <CheckIcon fontSize="inherit" /> <p> Free Breakfast</p>{" "}
              </div>
              <div id={styles.iconId}>
                <MoneyOffIcon fontSize="inherit" />
                <p>non-refundable</p>{" "}
              </div>
              <div className={styles.priceTagDiv}>
                <h4 className={styles.priceTag}>
                  {" "}
                  <span  className={styles.box_1_1}> ₹</span>{" "}
                  {Number(price) + 2000}{" "}
                </h4>
              </div>
              <div className={styles.priceTagDiv}>
                <button onClick={handleWithLunch}> BOOK NOW </button>
              </div>
            </div>
            <div className={styles.JuniorSuitDivInner}>
              <div></div>
              <div id={styles.iconId}>
                <CheckIcon fontSize="inherit" />
                <p> Dinner</p>
              </div>
              <div id={styles.iconId}>
                <FreeBreakfastIcon fontSize="inherit" />
                <p>Free Breakfast</p>
              </div>
            </div>
          </div>
        </div>

        <div id={styles.tabIdFrMr} className={styles.JuniorSuitFlexColumn}>
          <p className={styles.suiteHeader}> {title} Suites with Al Meals </p>
          <div className={styles.JuniorSuitDiv}>
            <div className={styles.JuniorSuitDivInner}>
              <p className={styles.highlightedPTag}> MAX GUESTS </p>
              <p className={styles.highlightedPTag}> INCLUSIONS </p>
              <p className={styles.highlightedPTag}> HIGHLIGHTS </p>
              <p className={styles.highlightedPTag}> Price for 1 night</p>
              {/* <p className={styles.highlightedPTag}> 5 ROOMS LEFT</p> */}
            </div>
            <div className={styles.JuniorSuitDivInner}>
              <img
                className={styles.box_1_2}
                src="https://image.flaticon.com/icons/png/512/681/681494.png"
                alt=""
              />
              <div id={styles.iconId}>
                {" "}
                <CheckIcon fontSize="inherit" /> <p> Breakfast </p>{" "}
              </div>
              <div id={styles.iconId}>
                <MoneyOffIcon fontSize="inherit" />
                <p>non-refundable</p>{" "}
              </div>
              <div className={styles.priceTagDiv}>
                <h4 className={styles.priceTag}>
                  {" "}
                  <span className={styles.box_1_1}> ₹</span>{" "}
                  {Number(price) + 3000}{" "}
                </h4>
              </div>
              <div className={styles.priceTagDiv}>
                <button onClick={handleWithAll}> BOOK NOW </button>
              </div>
            </div>
            <div className={styles.JuniorSuitDivInner}>
              <div></div>
              <div id={styles.iconId}>
                <CheckIcon fontSize="inherit" />
                <p> Lunch </p>
              </div>
              <div id={styles.iconId}>
                <FreeBreakfastIcon fontSize="inherit" />
                <p>Free Breakfast</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
