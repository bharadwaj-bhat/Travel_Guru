
import React from 'react'
import FooterBottom from './FooterBottom'
import FooterMiddle from './FooterMiddle'
import FooterUpper from './FooterUpper'
import styles from '../../Styles/FooterStyles.module.css'
const MainFooter = () => {
    return (
        <div className={styles.mainFile}>
            <FooterUpper />
            <FooterMiddle />
            <FooterBottom />
        </div>
    )
}

export default MainFooter
