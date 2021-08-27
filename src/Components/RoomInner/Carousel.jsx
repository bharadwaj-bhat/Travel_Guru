import styles from "../../Styles/RoomsInner.module.css";
import Carousel from "react-material-ui-carousel";
import { useState } from "react";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";

import CheckIcon from "@material-ui/icons/Check";
import { OverViewCard } from "./Overview";

export const CarouselComp = ({ data }) => {
  const { tripAdvicerRating, otherRatingName1, ratingArray, images } = data;

  return (
    <>
      {data && (
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
      )}
    </>
  );
};
