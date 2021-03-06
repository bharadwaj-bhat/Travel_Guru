import styles from "../../Styles/RoomsInner.module.css";
import Carousel from "react-material-ui-carousel";
import React from "react";
import Divider from "@material-ui/core/Divider";

import CheckIcon from "@material-ui/icons/Check";
import { OverViewCard } from "./Overview";
import { ChooseRoom } from "./ChooseRoom";

export const CarouselComp = ({ data }) => {
  const { tripAdvicerRating, otherRatingName1, ratingArray, images } = data;

  return (
    <>
      {data ? (
        <>
          <div className={styles.CarouselWrapper}>
            <div className={styles.CarouselWrapperDivOne}>
              {images && (
                <Carousel animation="fade" interval="100000">
                  {images.map((el, i) => (
                    <img key={i} src={el} alt=" carousal" />
                  ))}
                </Carousel>
              )}
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
              {otherRatingName1 &&
                otherRatingName1.map((el, i) => (
                  <div key={i} className={styles.CarouselWrapperDivInnerOne}>
                    <CheckIcon fontSize="inherit" />{" "}
                    <p
                      className={styles.CarouselWrapperDivInnerOneP1}
                    >{`${el}`}</p>
                    <p className={styles.CarouselWrapperDivInnerOneP2}>
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
          <ChooseRoom price={data.price} />
        </>
      ) : (
        <h1> ...Loading </h1>
      )}
    </>
  );
};
