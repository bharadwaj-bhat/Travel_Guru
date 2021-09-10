import React from "react";
import styles from "../../Styles/hotelFilter.module.css";
import SearchIcon from "@material-ui/icons/Search";
import Carousel from "react-material-ui-carousel";
import StarIcon from "@material-ui/icons/Star";
import RoomIcon from "@material-ui/icons/Room";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import FreeBreakfastOutlinedIcon from "@material-ui/icons/FreeBreakfastOutlined";
import LoyaltyOutlinedIcon from "@material-ui/icons/LoyaltyOutlined";
import { Link } from "react-router-dom";

const carouselStyles = {
  style: {
    background: "#fff",
    color: "#999",
    opacity: "0.8",
    borderRadius: "50%",
    height: "30px",
    width: "30px",
    margin: "5px",
  },
};
export default function HotelFilterCard({ data }) {
  const nodeRef = React.useRef(null);
  return (
    <React.Fragment>
      <div className={styles.hotel_card_container}>
        <Carousel nodeRef={nodeRef}
          navButtonsProps={carouselStyles}
          autoPlay={false}
          className={styles.carousel}
          navButtonsAlwaysVisible={true}
          indicators={false}
        >
          {data.images.map((item,i) => {
            return (
              <div ref={nodeRef} key={i} className={styles.hotel_card_left}>
                {" "}
                <img
                  className={styles.hotel_card_left_img}
                  src={`${item}`}
                  alt=""
                />
                <div ref={nodeRef}>
                  <span>#Friends getaways &nbsp;&nbsp;#Family</span>
                  <span>
                    <SearchIcon />
                  </span>
                </div>
              </div>
            );
          })}
        </Carousel>
        <div className={styles.hotel_card_middle}>
          <div className={styles.hotel_card_middle_1}>
            <h3><Link to={`/rooms/${data.id}`}>{data.name}</Link></h3>
          </div>
          <div className={styles.hotel_card_middle_2}>
            {Array(Math.floor(data.rating))
              .fill("")
              .map((item,i) => (
                <StarIcon key={i} className={styles.star_icon_2} />
              ))}
            <RoomIcon className={styles.room_icon} />
            <span>{data.location}</span>
          </div>
          <div className={styles.hotel_card_middle_3}>
            {data.feeCancellation && (
              <span>
                <CheckCircleOutlineIcon className={styles.circle_icon} />
                <h5>Free Cancellation</h5>
              </span>
            )}
            {data.breakfast && (
              <span>
                <FreeBreakfastOutlinedIcon className={styles.free_icon} />
                <h5>Free Breakfast</h5>
              </span>
            )}
          </div>
          <div className={styles.hotel_card_middle_4}>
            {data.cleanPass && (
              <span>
                <img
                  src="https://css.yatra.com/content/b2c-cdn/bongo-cdn/banners/hotel/yatra-safetyAssured/cleanPass.png"
                  alt=""
                ></img>
              </span>
            )}
            {data.couple && (
              <span>
                <LoyaltyOutlinedIcon className={styles.loyalty_icon} />
                <h5>Couple Friendly</h5>
              </span>
            )}
          </div>
        </div>
        <div className={styles.hotel_card_right}>
          <span className={styles.hotel_card_right_1}>
            <span className={styles.advisor_rating}></span>
            <p>
              <strong>{data.ratingArray[0]}</strong>&nbsp; Excellent&nbsp;
              <span>(59)</span>
            </p>
          </span>
          <span className={styles.hotel_card_right_2}>
            {data.otherRatingName} &nbsp; <span>{data.ratingArray[1]}</span>
          </span>
          <span className={styles.hotel_card_right_3}>₹{data.sPrice}</span>
          <span className={styles.hotel_card_right_4}>For 1 night</span>
          <span className={styles.hotel_card_right_5}>
            <button><Link to={`/rooms/${data.id}`}>Choose Room</Link></button>
          </span>
        </div>
      </div>
      <div></div>
    </React.Fragment>
  );
}
