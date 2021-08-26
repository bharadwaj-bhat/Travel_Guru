import React from "react";
import styles from "../../Styles/hotelFilter.module.css"
import HotelFilterLeft from "./HotelFilterLeft";
import { HotelFilterRight } from "./HotelFilterRight";

export default function HotelFilterMain(){
    return <React.Fragment>
        <div className={styles.hotel_filter_main_container}>
            <div className={styles.hotel_filter_main_container_left}>
                <HotelFilterLeft/>
            </div>
            <div className={styles.hotel_filter_main_container_right}>
                <HotelFilterRight/>
            </div>
        </div>
    </React.Fragment>
}