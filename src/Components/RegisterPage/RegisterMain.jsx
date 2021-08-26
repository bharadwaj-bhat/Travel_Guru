import React from 'react'
import styles from '../../Styles/loginPage.module.css'
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';
const RedCheckbox = withStyles({
  root: {
        color: red[400],
    '&$checked': {
        color: red[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export function RegisterMain() {
    const [state, setState] = React.useState(true);
  const handleChange = (event) => {
    setState( event.target.checked );
  };
    return <React.Fragment>
        <div className={styles.login_main_container}>
            <div className={styles.register_main_container_body}>
                <div className={styles.login_main_container_body_left}>
                    <div className={styles.login_main_container_body_left_main}>                    
                        <h3 className={styles.register_main_container_body_left_main_title}>
                            Common account on Yatra & Travelguru
                        </h3>
                        <div>
                            <h6>First Name</h6>
                        <input className={styles.login_main_container_body_left_main_text} type="text" placeholder="First Name"></input>
                            <h6>Last Name</h6>
                        <input className={styles.login_main_container_body_left_main_text} type="text" placeholder="Last Name"></input>
                            <h6>Mobile Number</h6>
                        <input className={styles.login_main_container_body_left_main_text} pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" type="tel" placeholder="Mobile Number"></input>
                            <h6>Email id</h6>
                        <input className={styles.login_main_container_body_left_main_text} type="text" placeholder="Email id"></input>
                            <h6>Password</h6>
                        <input className={styles.login_main_container_body_left_main_password} type="password" placeholder="Password"></input>
                            <h6>Confirm Password</h6>
                        <input className={styles.login_main_container_body_left_main_password} type="password" placeholder="Confirm Password"></input>
                        </div>
                        <div className={styles.register_main_container_body_left_main_forget_password}>
                            <p>
                                <RedCheckbox checked={state} onChange={handleChange} name="checked" />
                                I would like to be kept informed of special promotions and offers by Travelguru.
                            </p>
                        </div>
                        <div>
                            <button>Register</button>
                        </div>
                    </div>
                </div>
                <div className={styles.login_main_container_body_right}>
                    <div className={styles.login_main_container_body_right_body}>
                        <h6>Already have an account on Travelguru.com?</h6>
                        <span><Link to="/login" >Login Here</Link></span>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
}