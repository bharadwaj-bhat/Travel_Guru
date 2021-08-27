import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import styles from '../../Styles/loginPage.module.css'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { getData, loginUser } from '../../redux/auth/actions';

export function LoginMain() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const dispatch = useDispatch();
    React.useEffect(() => {
       dispatch(getData()) 
    },[dispatch])
    const users = useSelector((state) => state.auth.users);
    const onSubmit = data => {
        const user = users.filter((item) => item.email === data.email && item.password === data.password);
        if (user.length === 0) {
            alert("Invalid Credentials");
            return;
        }
        dispatch(loginUser(user[user.length - 1]));
        history.push("/")
    };
    return <React.Fragment>
        <div className={styles.login_main_container}>
            <div className={styles.login_main_container_body}>
                <div className={styles.login_main_container_body_left}>
                    <form onSubmit={handleSubmit(onSubmit)} className={styles.login_main_container_body_left_main}>                    
                        <h3>
                            Sign in to Travelguru securely
                        </h3>
                        <div>
                            <h6>Email id</h6>
                        <input {...register("email",{ required: true, minLength: 8 })} className={styles.login_main_container_body_left_main_text} type="text" placeholder="Email id"></input>
                        {errors.email && <p className={styles.error_message}>Text field empty</p>}
                            <h6>Password</h6>
                        <input {...register("password",{ required: true, minLength: 8 })} className={styles.login_main_container_body_left_main_password} type="password" placeholder="Password"></input>
                        </div>
                        <div className={styles.login_main_container_body_left_main_forget_password}>
                            <p>Forget Password?</p>
                        </div>
                        <div className={styles.submit_btn}>
                            <input type="submit" value="Sign In"/>
                        </div>
                    </form>
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