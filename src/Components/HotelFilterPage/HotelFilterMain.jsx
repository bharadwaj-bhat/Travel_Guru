import React from "react";
import styles from "../../Styles/hotelFilter.module.css"
import HotelFilterLeft from "./HotelFilterLeft";
import { HotelFilterRight } from "./HotelFilterRight";
import { HotelData } from "../../fakeData/HotelData";

export default function HotelFilterMain() {
    const [data, setData] = React.useState(HotelData);
    return <React.Fragment>
        <div className={styles.hotel_filter_main_container}>
            <div className={styles.hotel_filter_main_container_left}>
                <HotelFilterLeft data={data} setData={setData}/>
            </div>
            <div className={styles.hotel_filter_main_container_right}>
                <HotelFilterRight data={data} setData={setData}/>
            </div>
        </div>
    </React.Fragment>
}