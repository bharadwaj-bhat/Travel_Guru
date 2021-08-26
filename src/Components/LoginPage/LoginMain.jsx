import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../Styles/loginPage.module.css'

export function LoginMain() {
    return <React.Fragment>
        <div className={styles.login_main_container}>
            <div className={styles.login_main_container_body}>
                <div className={styles.login_main_container_body_left}>
                    <div className={styles.login_main_container_body_left_main}>                    
                        <h3>
                            Sign in to Travelguru securely
                        </h3>
                        <div>
                            <h6>Email id</h6>
                        <input className={styles.login_main_container_body_left_main_text} type="text" placeholder="Email id"></input>
                            <h6>Password</h6>
                        <input className={styles.login_main_container_body_left_main_password} type="password" placeholder="Password"></input>
                        </div>
                        <div className={styles.login_main_container_body_left_main_forget_password}>
                            <p>Forget Password?</p>
                        </div>
                        <div>
                            <button>Sign In</button>
                        </div>
                    </div>
                </div>
                <div className={styles.login_main_container_body_right}>
                    <div className={styles.login_main_container_body_right_body}>
                        <h6>Don't have Travelguru Account?</h6>
                        <span><Link to="register">Register Now!</Link></span>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
}