import React from 'react'
import styles from '../../Styles/loginPage.module.css'
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { getData, registerUser } from '../../redux/auth/actions';

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
    const history = useHistory();
    const dispatch = useDispatch();
    React.useEffect(() => {
       dispatch(getData()) 
    },[dispatch])
  const handleChange = (event) => {
    setState( event.target.checked );
    };
    const onSubmit = data => {
        if (data.password !== data.confirmPassword) {
            alert("Password not matched !!!");
            return
        }
        dispatch(registerUser(data))
        alert("SuccessFully Registered !!!")
        dispatch(getData()) 
        history.push("/login");
    };
    const { register, handleSubmit, formState: { errors } } = useForm();
    return <React.Fragment>
        <div className={styles.login_main_container}>
            <div className={styles.register_main_container_body}>
                <div className={styles.login_main_container_body_left}>
                    <form onSubmit={handleSubmit(onSubmit)} className={styles.login_main_container_body_left_main}>                    
                        <h3 className={styles.register_main_container_body_left_main_title}>
                            Common account on Yatra & Travelguru
                        </h3>
                        <div>
                            <h6>First Name</h6>
                        <input {...register("firstName",{ required: true, maxLength: 20 })} className={styles.login_main_container_body_left_main_text} type="text" placeholder="First Name"></input>
                        {errors.firstName && <p className={styles.error_message}>Text field empty</p>}
                            <h6>Last Name</h6>
                        <input {...register("lastName",{ required: true, maxLength: 20 })} className={styles.login_main_container_body_left_main_text} type="text" placeholder="Last Name"></input>
                        {errors.lastName && <p className={styles.error_message}>Text field empty</p>}
                            <h6>Mobile Number</h6>
                        <input {...register("mobile",{ required: true, minLength: 10 ,maxLength:10})} className={styles.login_main_container_body_left_main_text}  type="tel" placeholder="Mobile Number"></input>
                        {errors.mobile && <p className={styles.error_message}>Invalid Mobile Number</p>}
                            <h6>Email id</h6>
                        <input {...register("email",{ required: true, minLength: 8 })} className={styles.login_main_container_body_left_main_text} type="text" placeholder="Email id"></input>
                        {errors.email && <p className={styles.error_message}>Text field empty</p>}
                            <h6>Password</h6>
                        <input {...register("password",{ required: true, minLength: 8 })} className={styles.login_main_container_body_left_main_password} type="password" placeholder="Password"></input>
                            <h6>Confirm Password</h6>
                        <input {...register("confirmPassword",{ required: true, minLength: 8 })} className={styles.login_main_container_body_left_main_password} type="password" placeholder="Confirm Password"></input> 
                        </div>
                        <div className={styles.register_main_container_body_left_main_forget_password}>
                            <p>
                                <RedCheckbox checked={state} onChange={handleChange} name="checked" />
                                I would like to be kept informed of special promotions and offers by Travelguru.
                            </p>
                        </div>
                        <div className={styles.submit_btn}>
                            <input type="submit" value="Register"/>
                        </div>
                    </form>
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