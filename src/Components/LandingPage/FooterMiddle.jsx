import React from 'react'
import styles from '../../Styles/FooterStyles.module.css'

const FooterMiddle = () => {
    return (
        <div className={styles.middleDiv}>
            <div>
                <p>Company Information</p>
                <p>Must Visit Places</p>
                <p>Heritage</p>
            </div>
            <div>
                <p>Traveller</p>
                <p>Spritual Places</p>
                <p>Deserts</p>
            </div>
            <div>
                <p>Offers</p>
                <p>Hill Stations</p>
                <p>Solo Travel Places</p>
            </div>
            <div>
                <p>Customer Support</p>
                <p>Beaches</p>
                <p>Business cities</p>
            </div>
            <div>
                <p>Others</p>
                <p>Wildlife</p>
                <p>Weekend Getaways</p>
            </div>
        </div>
    )
}

export default FooterMiddle
