import React from 'react'
import styles from "../../Styles/hotelFilter.module.css"
import SearchIcon from '@material-ui/icons/Search';
import HotelFilterCard from './HotelFilterCard';

export function HotelFilterRight() {
    return <div className={ styles.hotel_right_container}>
        <div className={ styles.hotel_right_container_top}>
            <div className={ styles.hotel_right_container_top_top}><button className={ styles.hotel_right_container_top_btn}><SearchIcon className={styles.search_icon} color="disabled"/>Modify Search</button></div>
            <div className={ styles.hotel_right_container_top_bottom}><h6>Leh</h6><p>SAT, 28 AUG - SUN, 29 AUG (1 NIGHT)  | 1 ROOM | 1 ADULT</p></div>
        </div>
        <div className={ styles.hotel_right_container_middle_top}>
            <div className={styles.hotel_right_container_middle_top_top}>
                <button>ALL HOTELS<br/>from ₹ 2,400</button>
            </div>
            <div className={styles.hotel_right_container_middle_top_bottom}>
                <button>VILLAS AND STAYS<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;from ₹ 5,000</button>
                <button>LIST | <span>MAPS</span></button>
            </div>
        </div>
        <div className={ styles.hotel_right_container_middle_bottom}>
            <div className={styles.hotel_right_container_middle_bottom_top}>
                <div>SORT BY:</div>
                <div className={styles.div_hover}>RECOMMENDED</div>
                <div className={styles.div_hover}>STAR RATING</div>
                <div className={styles.div_hover}>TRIPADVISOR RATING</div>
                <div className={styles.div_hover}>PRICE <span>(TAXES EXTRA)</span></div>
            </div>
        </div>
        <div className={styles.hotel_right_card}>
            <HotelFilterCard/>
        </div>
    </div>
}