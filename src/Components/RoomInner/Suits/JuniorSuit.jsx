import styles from "../../../Styles/RoomsInner.module.css";
import CheckIcon from "@material-ui/icons/Check";
import MoneyOffIcon from "@material-ui/icons/MoneyOff";
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";

export const JuniorSuit = ({ price, title }) => {
  console.log("from", price);
  return (
    <div className={styles.JuniorSuitWrapper}>
      <div>
        <p> {title} Suite</p>
        <div className={styles.JuniorSuitFlex}>
          <img
            src="https://imgcld.yatra.com/ytimages/image/upload/t_hotel_srplist/v1524035854/Hotel/Leh/00096502/Executive_Room-4_utA9WJ.jpg"
            alt=""
          />
          <div className={styles.JuniorSuitFlexColumn}>
            <p className={styles.suiteHeader}> {title} Suite Only </p>
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
                  style={{ width: "20px" }}
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
                    <span style={{ fontWeight: "500" }}> ₹</span> {price}{" "}
                  </h4>
                </div>
                <div className={styles.priceTagDiv}>
                  <button> BOOK NOW </button>
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
                style={{ width: "20px" }}
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
                  <span style={{ fontWeight: "500" }}> ₹</span>{" "}
                  {Number(price) + 1000}{" "}
                </h4>
              </div>
              <div className={styles.priceTagDiv}>
                <button> BOOK NOW </button>
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
                style={{ width: "20px" }}
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
                  <span style={{ fontWeight: "500" }}> ₹</span>{" "}
                  {Number(price) + 2000}{" "}
                </h4>
              </div>
              <div className={styles.priceTagDiv}>
                <button> BOOK NOW </button>
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
                style={{ width: "20px" }}
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
                  <span style={{ fontWeight: "500" }}> ₹</span>{" "}
                  {Number(price) + 3000}{" "}
                </h4>
              </div>
              <div className={styles.priceTagDiv}>
                <button> BOOK NOW </button>
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