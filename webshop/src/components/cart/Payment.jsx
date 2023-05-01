import React from 'react'

function Payment(props) {
  
  const pay = () => {
    const url = "https://igw-demo.every-pay.com/api/v4/payments/oneoff";

    const paymentData = {
      "api_username": "e36eb40f5ec87fa2",
      "account_name": "EUR3D1",
      "amount": props.sum,
      "order_reference": Math.random() * 9999999, // math.random - juhusliku numbri generaator 0-1: 0.32131
      "nonce": "da31232mmmn31" + Math.random() * 9999999 + new Date(), // nonce
      "timestamp": new Date(), // praegune aeg
      "customer_url": "https://mihkel-web-03-2023.web.app"
      };

    const paymentHeaders = {
      "Authorization": "Basic ZTM2ZWI0MGY1ZWM4N2ZhMjo3YjkxYTNiOWUxYjc0NTI0YzJlOWZjMjgyZjhhYzhjZA==",
      "Content-Type": "application/json"
    };

    fetch(url, {"method": "POST", "body": JSON.stringify(paymentData), "headers": paymentHeaders})
      .then(res => res.json())
      .then(json => window.location.href = json.payment_link);
  }

  // window.location.href ---> tähendab välisele rakendusele suunamist
  // navigate("/") <--- rakenduse siseselt JavaScriptis
  // <Link to=""> <--- HTML-s

  return (
    <button onClick={pay}>Pay</button>
  )
}

export default Payment