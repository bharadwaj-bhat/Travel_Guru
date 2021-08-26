import React from 'react'
import styles from '../../Styles/FooterStyles.module.css'


const FooterUpper = () => {
    return (
        <div className={styles.upperFooter}>
            <div className={styles.yatraDiv}>
                <div>
                    <p>Our Family</p>
                </div>
                <div>
                    <img src="https://www.yatra.com/fresco/resources/beetle/images/newIcons/yatra_logo.svg" alt="" />
                </div>
                <div>
                    <img src="http://www.adventurenation.com/blog/wp-content/uploads/2016/01/Trans-Logo-Red.png" alt="" />
                </div>
                <div>
                    <img src="https://www.yatraexoticroutes.com/wp-content/uploads/2017/03/new-logo-w.png" alt="" />
                </div>
                <div>
                    <img src="https://res.cloudinary.com/www-oysterconnect-com/image/upload/v1599480153/company/TSI_Yatra_logo_transy_1599480151644.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default FooterUpper
