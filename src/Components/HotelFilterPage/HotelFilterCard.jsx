import React from 'react'
import styles from "../../Styles/hotelFilter.module.css"
import SearchIcon from '@material-ui/icons/Search';

export default function HotelFilterCard() {
    return <React.Fragment>
        <div className={styles.hotel_card_container}>
            <div className={styles.hotel_card_left}>
                <img src="https://imgcld.yatra.com/ytimages/image/upload/t_hotel_yatra_details_desktop/v1509531805/Hotel/00096502/Executive_Room_4kPV3N.jpg" alt="" />
                <div><span>#Friends getaways &nbsp;&nbsp;#Family</span><span><SearchIcon/></span></div>
            </div>
            <div className={styles.hotel_card_middle}></div>
            <div className={styles.hotel_card_right}></div>
        </div>
    </React.Fragment>
}