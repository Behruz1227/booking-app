import React, { useState } from "react";

const PaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = useState("mtn");
  const [mobileNumber, setMobileNumber] = useState("");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardHolderName: "",
    expiryDate: "",
    cvv: "",
  });

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleCardDetailChange = (e) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // This could include validation and sending data to a payment processing backend
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4"
    >
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Payment Methods</h2>
        <div className="flex justify-around my-4">
          {/* MTN Mobile Money Option */}
          <label className="flex gap-3">
            <input
              type="radio"
              name="paymentMethod"
              value="mtn"
              checked={paymentMethod === "mtn"}
              onChange={() => setPaymentMethod("mtn")}
              className="text-orange-500"
            />
            <div className="flex flex-col">
              <span className="ml-2">MTN Mobile Money</span>
              <div className="w-90">
                <img className="object-cover w-8/12 rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjwIYVltxlV1qgOPt64nrBldDOF85xVltVTqlDcyO71WK2oAx6UqmuIchL_yosZwZxH6Y&usqp=CAU" alt="" />
              </div>
            </div>
          </label>

          {/* Visa Option */}
          <label className="inline-flex gap-3">
            <input
              type="radio"
              name="paymentMethod"
              value="visa"
              checked={paymentMethod === "visa"}
              onChange={() => setPaymentMethod("visa")}
              className="text-orange-500"
            />
            <div className="flex flex-col">
              <span className="ml-2">VISA</span>
              <div className="w-full h-32">
                <img className="object-cover w-full h-32 rounded-lg" src="https://play-lh.googleusercontent.com/DB-E7TSbWobxBzjS6IenXRXhkg2gNOM_685qcnKoPs9D6I9Y_4MdbQi9nhRvRCC9m5g" alt="" />
              </div>
            </div>
          </label>
        </div>
      </div>

      {paymentMethod === "mtn" && (
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="mobile-number"
          >
            Enter your MTN Mobile Money number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            id="mobile-number"
            type="tel"
            placeholder="Mobile Number"
            value={mobileNumber}
            onChange={handleMobileNumberChange}
          />
        </div>
      )}

      {paymentMethod === "visa" && (
        <div className="mb-4">
          {/* Card Number */}
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              value={cardDetails.cardNumber}
              onChange={handleCardDetailChange}
            />
          </div>
          {/* Card Holder Name */}
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              type="text"
              name="cardHolderName"
              placeholder="Cardholder Name"
              value={cardDetails.cardHolderName}
              onChange={handleCardDetailChange}
            />
          </div>
          {/* Expiry Date and CVV */}
          <div className="flex justify-between gap-3">
            <input
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight flex-1"
              type="text"
              name="expiryDate"
              placeholder="Expiry Date"
              value={cardDetails.expiryDate}
              onChange={handleCardDetailChange}
            />
            <input
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight flex-1"
              type="text"
              name="cvv"
              placeholder="CVV"
              value={cardDetails.cvv}
              onChange={handleCardDetailChange}
            />
          </div>
        </div>
      )}

      {/* Payment Amount Display */}
      <div className="mb-6">
        <p className="text-gray-700">
          Total amount to be paid: 1050000Rwf / 1050USD
        </p>
      </div>

      <div className="w-full flex items-center justify-center">
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-32 rounded focus:outline-none focus:shadow-outline shadow-2xl text-shadow"
          type="submit"
        >
          Pay now
        </button>
      </div>
    </form>
  );
};

export default PaymentForm;
