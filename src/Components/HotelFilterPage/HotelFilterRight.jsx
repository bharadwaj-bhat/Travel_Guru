import React from "react";
import styles from "../../Styles/hotelFilter.module.css";
import SearchIcon from "@material-ui/icons/Search";
import HotelFilterCard from "./HotelFilterCard";
import { useDispatch, useSelector } from "react-redux";
import { sortData } from "../../redux/hotelData/actions";
import useDate from "../../hooks/useDate";

export function HotelFilterRight() {
  const data = useSelector((state) => state.hotel.data);
  const min = useSelector((state) => state.hotel.min);
  const [highPrice, setHighPrice] = React.useState(true);
  const [highRating, setHighRating] = React.useState(true);
  const [tripRating, setTripRating] = React.useState(true);
  const dispatch = useDispatch();
  const date = useDate();
  const handleSort = (str) => {
    switch (str) {
      case "recommended": {
        const payload = data.sort((a, b) => {
          return b.otherRating - a.otherRating;
        });
        dispatch(sortData(payload));
        break;
      }
      case "price": {
        const payload = data.sort((a, b) => {
          if (highPrice) {
            return a.price - b.price;
          }
          return b.price - a.price;
        });
        dispatch(sortData(payload));
        setHighPrice(!highPrice);
        break;
      }
      case "rating": {
        const payload = data.sort((a, b) => {
          if (highRating) {
            return b.rating - a.rating;
          }
          return a.rating - b.rating;
        });
        dispatch(sortData(payload));
        setHighRating(!highRating);
        break;
      }
      case "trip": {
        const payload = data.sort((a, b) => {
          if (tripRating) {
            return b.tripAdvicerRating - a.tripAdvicerRating;
          }
          return a.tripAdvicerRating - b.tripAdvicerRating;
        });
        dispatch(sortData(payload));
        setTripRating(!tripRating);
        break;
      }
      default: {
        break;
      }
    }
  };
  return (
    <>
      <div className={styles.hotel_right_container}>
        <div className={styles.hotel_right_container_top}>
          <div className={styles.hotel_right_container_top_top}>
            <button className={styles.hotel_right_container_top_btn}>
              <SearchIcon className={styles.search_icon} color="disabled" />
              Modify Search
            </button>
          </div>
          <div className={styles.hotel_right_container_top_bottom}>
            <h6>Leh</h6>
            <p>{date} (1 NIGHT) | 1 ROOM | 1 ADULT</p>
          </div>
        </div>
        <div className={styles.hotel_right_container_middle_top}>
          <div className={styles.hotel_right_container_middle_top_top}>
            <button>
              ALL HOTELS
              <br />
              from ₹ {min}
            </button>
          </div>
          <div className={styles.hotel_right_container_middle_top_bottom}>
            <button>
              VILLAS AND STAYS
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;from ₹ 5,000
            </button>
            <button>
              LIST | <span>MAPS</span>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.hotel_right_container_middle_bottom}>
        <div className={styles.hotel_right_container_middle_bottom_top}>
          <div>SORT BY:</div>
          <div
            onClick={() => {
              handleSort("recommended");
            }}
            className={styles.div_hover}
          >
            RECOMMENDED
          </div>
          <div
            onClick={() => {
              handleSort("rating");
            }}
            className={styles.div_hover}
          >
            STAR RATING
          </div>
          <div
            onClick={() => {
              handleSort("trip");
            }}
            className={styles.div_hover}
          >
            TRIPADVISOR RATING
          </div>
          <div
            onClick={() => {
              handleSort("price");
            }}
            className={styles.div_hover}
          >
            PRICE <span>(TAXES EXTRA)</span>
          </div>
        </div>
      </div>
      <div className={styles.hotel_right_card}>
        {data.map((item) => (
              <HotelFilterCard key={item.id} data={item} />
        ))}
      </div>
    </>
  );
}
