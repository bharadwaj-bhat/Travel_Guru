import styles from "../../Styles/RoomsInner.module.css";
import Carousel from "react-material-ui-carousel";
import { useState } from "react";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";

import CheckIcon from "@material-ui/icons/Check";
import { OverViewCard } from "./Overview";

let images = [
  "https://imgcld.yatra.com/ytimages/image/upload/t_hotel_yatra_details_desktop/v1524035470/Hotel/Leh/00096502/Facade-1_Bvu22H.jpg",
  "https://imgcld.yatra.com/ytimages/image/upload/t_hotel_yatra_details_desktop/v1505128885/Hotel/Leh/00096502/Hotel_External_Picture_mQ10FR.jpg",
  "https://imgcld.yatra.com/ytimages/image/upload/t_hotel_yatra_details_desktop/v1505128918/Hotel/Leh/00096502/Dontha_Restaurant_1_5j4KUl.jpg",
  "https://imgcld.yatra.com/ytimages/image/upload/t_hotel_yatra_details_desktop/v1505129056/Hotel/Leh/00096502/Dontha_Restaurant_vyuVrH.jpg",
  "https://imgcld.yatra.com/ytimages/image/upload/t_hotel_yatra_details_desktop/v1505129070/Hotel/Leh/00096502/Hotel_Corridor_GHVM8s.jpg",
  "https://imgcld.yatra.com/ytimages/image/upload/t_hotel_yatra_details_desktop/v1509531603/Hotel/00096502/Deluxe_Room_h48jTO.jpg",
  "https://imgcld.yatra.com/ytimages/image/upload/t_hotel_yatra_details_desktop/v1509531655/Hotel/00096502/Deluxe_Room1_dfRJT3.jpg",
  "https://imgcld.yatra.com/ytimages/image/upload/t_hotel_yatra_details_desktop/v1509531839/Hotel/00096502/Executive_Room_1_cVsaDz.jpg",
  "https://imgcld.yatra.com/ytimages/image/upload/t_hotel_yatra_details_desktop/v1509531871/Hotel/00096502/exterior_view_11(1)_bqbW9b.jpg",
  "https://imgcld.yatra.com/ytimages/image/upload/t_hotel_yatra_details_desktop/v1509531889/Hotel/00096502/Privilege_Suite_Pj04ju.jpg",
  "https://imgcld.yatra.com/ytimages/image/upload/t_hotel_yatra_details_desktop/v1509531920/Hotel/00096502/Privilege_Suite1_UWwp5T.jpg",
];

let otherRatingName1 = [" Spectacular Location", "Exemplary Cleanliness"];
let ratingArray = ["5.0/5", "5.0/5"];

export const CarouselComp = ({ tripAdvicerRating = 4.5 }) => {
  const [num, setNum] = useState(0);

  return (
    <>
      <div className={styles.CarouselWrapper}>
        <div
          style={{
            width: "95%",
            margin: "15px",
            overflow: "hidden",
          }}
        >
          <Carousel animation="fade" interval="100000">
            {images.map((el, i) => (
              <img src={el} alt=" carousal" style={{ width: "100%" }} />
            ))}
          </Carousel>
        </div>

        <div className={styles.otherReviews}>
          <h1> Excellent </h1>
          <div>
            {" "}
            <p className={styles.otherReviewsP}> {tripAdvicerRating}</p>
            <img
              src="https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.5-11942-5.svg"
              alt=""
            />
            <p className={styles.reviewsP}> 59 REVIEWS </p>
          </div>
          <p> Based on Overall Traveller Rating</p>
          <Divider />
          {otherRatingName1.map((el, i) => (
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <CheckIcon fontSize="inherit" />{" "}
              <p
                style={{ fontSize: "0.9rem", padding: "0px 4px" }}
              >{`${el}`}</p>
              <p style={{ color: "rgb(0, 166, 128)", fontSize: "0.9rem" }}>
                {" "}
                {ratingArray[i]}{" "}
              </p>
            </div>
          ))}

          <Divider />
          <div className={styles.checkInsP}>
            <p>
              {" "}
              CHECKIN : <span> Flexible </span>
            </p>
            <p>
              {" "}
              CHECKOUT : <span> Flexible </span>
            </p>
          </div>
        </div>
      </div>
      <OverViewCard />
    </>
  );
};
