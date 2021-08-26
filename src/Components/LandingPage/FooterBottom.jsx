import React from 'react'
import styles from '../../Styles/FooterStyles.module.css'


const FooterBottom = () => {
    return (
        <div className={styles.footerContent}>
        <div className={styles.footer}>
            <div className={styles.copyRight}>
                <h4>© 2021 Travelguru, India. All Rights Reserved</h4>
            </div>

            <div className={styles.allIcons}>
                <div className={styles.innerDivIcons}>
                    <div>
                        <img src="https://www.vectorico.com/wp-content/uploads/2018/02/Facebook-Icon.png" alt="facebook" />
                    </div>
                    <div>
                        <img src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png" alt="twitter" />
                    </div>
                    <div>
                        <img src="https://cdn3.iconfinder.com/data/icons/sociocons/256/linkedin-sociocon.png" alt="linkdIn" />
                    </div>
                    <div>
                        <img src="https://image.flaticon.com/icons/png/512/1384/1384060.png" alt="youtube" />
                    </div>
                </div>
            </div>

            <div className={styles.secured}>
                <div>
                    <h4>Secured by</h4>
                </div>
                <div>
                 <img src="//www.travelguru.com/travelguru/resources/beetle/images/geotrust-logo.png" alt="geotrust"></img>
                </div>
            </div>
            </div>
        </div>
    )
}

export default FooterBottom
