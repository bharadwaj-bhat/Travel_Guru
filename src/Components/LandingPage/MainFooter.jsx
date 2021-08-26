
import React from 'react'
import FooterMiddle from './FooterMiddle'
import FooterUpper from './FooterUpper'
import styles from '../../Styles/FooterStyles.module.css'
const MainFooter = () => {
    return (
        <div className={styles.mainFile}>
            <FooterUpper />
            <FooterMiddle />
        </div>
    )
}

export default MainFooter
