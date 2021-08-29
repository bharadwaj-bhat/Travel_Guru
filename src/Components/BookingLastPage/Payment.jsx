import React from "react";
import styles from "./Payment.module.css";
import Modal from "@material-ui/core/Modal";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import axios from "axios";
import { useEffect } from "react";
import { Razorpay } from "razorpay-checkout";

const loadRazorPay = () => {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
};

const Payment = () => {
    const history = useHistory();

    const [open, setOpen] = React.useState(false);

    const checkIndate = useSelector((state) => state.date.checkInDate.day);
    const checkOutdate = useSelector((state) => state.date.checkOutDate.day);
    const adults = useSelector((state) => state.date.adults);
    const totalPrice = useSelector((state) => state.date.totalPrice);
    const price = useSelector((state) => state.date.price);
    const monthC = useSelector((state) => state.date.checkInDate.month);
    const monthO = useSelector((state) => state.date.checkOutDate.month);

    const handleOpen = () => {
        displayRazorpay();
    };

    const handleClose = () => {
        setOpen(false);
        history.push("/");
    };

    const body = (
        <div className={styles.paper}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9caYDMJ2nqtVibErc90LGCP3mQ9UcyfbXXg&usqp=CAU"
                alt=""
            />
            <p>Payment Successful</p>
            <p>Thank You for Booking</p>
            <button onClick={handleClose} className={styles.closeBtn}>
                OK
            </button>
        </div>
    );

    async function displayRazorpay() {
        const res = await loadRazorPay();

        if (!res) {
            alert("something went wrong");
            return;
        }
        const options = {
            key: "rzp_test_k8s6vfpDLGVjUZ",
            amount: "70000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "Travel Guru",
            description: "Thank you",
            image:
                "https://www.travelguru.com/travelguru/resources/beetle/images/tg/travelguru-homestay-logo-199x52.png",
            order_id: "order_Hr0p5ASx2f3Bsv", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            handler: function (response) {
                setOpen(true);
                // alert(response.razorpay_order_id);
                // alert(response.razorpay_signature);
            },
            prefill: {
                name: "Somesh Yadav",
                phone: "6354136407"
            },
        };
        const paymentObj = new Razorpay(options);
        paymentObj.open();
    }

    return (
        <div className={styles.mainDivision}>
            <div className={styles.mainHeading}>
                <p>Payment Methods</p>
            </div>
            <div className={styles.portal}>
                <div className={styles.methods}>
                    <div className={styles.cards}>
                        <div>
                            <p>Credit Card</p>
                        </div>
                        <div>
                            <p>Debit Card</p>
                        </div>
                        <div>
                            <p>Net Banking</p>
                        </div>
                        <div>
                            <p>UPI</p>
                        </div>
                    </div>
                    <div className={styles.paymentText}>
                        <p>
                            Please click on Pay Now to continue. You will be required to enter
                            card details on next page.
                        </p>
                        <div className={styles.buttonDiv}>
                            <div>
                                <h1>₹ {totalPrice}</h1>
                            </div>
                            <div>
                                <button onClick={handleOpen} className={styles.payBtn}>
                                    Pay Now
                                </button>
                            </div>
                        </div>
                        <div className={styles.terms}>
                            <p>
                                By clicking on Pay Now, you are agreeing to our{" "}
                                <span> Terms & Conditions </span> , Privacy policy, User
                                Agreement and Covid-19 Guidelines
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.rightDiv}>
                    <div className={styles.paymentDetails}>
                        <div>
                            <div>
                                <p>Hotel Charges</p>
                            </div>
                            <div>
                                <p>₹ {price}</p>
                            </div>
                        </div>

                        <div>
                            <div>
                                <p>Hotel GST</p>
                            </div>
                            <div>
                                <p>₹ 840</p>
                            </div>
                        </div>

                        <div>
                            <div>
                                <p>Convenience Fee & Taxes</p>
                            </div>
                            <div>
                                <p>₹ 277</p>
                            </div>
                        </div>

                        <div className={styles.youPay}>
                            <div>
                                <h4>You Pay</h4>
                            </div>
                            <div>
                                <h4>₹ {totalPrice}</h4>
                            </div>
                        </div>
                    </div>
                    <h3 className={styles.bookingText}>Booking Summary</h3>
                    <div className={styles.bookingSummary}>
                        <div className={styles.pDiv}>
                            <p>The Verda Driftwood</p>
                            <p>Leh, India</p>
                            <p>Rooms:1 Adults: {adults}</p>
                        </div>
                        <div className={styles.dates}>
                            <div>
                                <div className={styles.checked}>
                                    <p>Check-in</p>
                                    <p>{checkIndate}</p>
                                </div>
                                <p className={styles.month}>
                                    {monthC === "08" ? "Aug" : monthC === "09" ? "Sep" : "Oct"}
                                </p>
                            </div>

                            <div>
                                <div className={styles.checked}>
                                    <p>Check-out</p>
                                    <p>{checkOutdate}</p>

                                </div>
                                <p className={styles.month}>
                                    {monthO === "08"
                                        ? "Aug"
                                        : monthO === "09"
                                            ? "Sep"
                                            : "Oct"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Modal
                open={open}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                className={styles.modal}
            >
                {body}
            </Modal>
        </div>
    )
}

export default Payment
