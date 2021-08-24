import React from 'react'
import styles from '../../Styles/landingPage.module.css'
import { BestSellingData } from '../../fakeData/BestSellingData'
export const BestSelling = () => {
    return (
        <div className={styles.BestSelling_container}>
            <div className={styles.BestSelling_container_1}><h1>Bestselling Homestays</h1></div>
            <div className={styles.BestSelling_container_2}>
                {BestSellingData.map(item => {
                    return <div key={item.id} className={styles.BestSelling_container_card}>
                    <div className={styles.BestSelling_container_card_img}>
                        <img src={item.url} alt="" />
                    </div>
                    <div className={styles.BestSelling_container_card_body}>
                            <div className={styles.BestSelling_container_card_body_title}><h3>{ item.title}</h3></div>
                        <div className={styles.BestSelling_container_card_body_1}>
                            <div className={styles.BestSelling_container_card_body_1_1}>
                                <div className={styles.BestSelling_container_card_body_rating}></div>
                                <div className={styles.BestSelling_container_card_body_rating_2}>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                            <div className={styles.BestSelling_container_card_body_1_2}>
                                <div>₹{item.price}</div>
                                <div>Per Night</div>
                            </div>
                        </div>
                    </div>
                </div>
                })
                }
            </div>
        </div>
    )
}