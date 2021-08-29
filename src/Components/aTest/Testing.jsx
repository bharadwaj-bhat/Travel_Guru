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

const data = {
  amount: 70000,
  currency: "INR",
  receipt: "receipt#1",
};
const username = "rzp_test_k8s6vfpDLGVjUZ";
const password = "mxfzlfR60GuQjY69sl91JqOb";
const token = Buffer.from(`${username}:${password}`, "utf8").toString("base64");
export const Testing = () => {
  useEffect(() => {
    // axios
    //   .post("https://api.razorpay.com/v1/orders", data, {
    //     headers: {
    //       Authorization: `Basic ${token}`,
    //     },
    //   })
    //   .then((res) => console.log(res))
    //   .catch((err) => console.error(err));
  }, []);

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
      order_id: "order_HqwYVpWN61KC15", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: function (response) {
        alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
      },
      prefill: {
        name: "Bhat",
      },
    };
    const paymentObj = new Razorpay(options);
    paymentObj.open();
  }

  return (
    <div>
      <h1> Payment Tests </h1>
      <button onClick={displayRazorpay}>Pay Now</button>
    </div>
  );
};
