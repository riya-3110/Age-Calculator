import React, { useState } from "react";
import "./AgeCalc.css";

export const AgeCalc = () => {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState(0);

  const resetHandle = () => {
    setBirthDate("");
    setAge(0);
  };

  const calculateAge = () => {
    const today = new Date();
    const birthDateDate = new Date(birthDate);

    let age = today.getFullYear() - birthDateDate.getFullYear();
    const monthDiff = today.getMonth() - birthDateDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDateDate.getDate())
    ) {
      age = age - 1;
    }
    setAge(age);
  };

  const submitHandle = (e) => {
    e.preventDefault();
    calculateAge();
  };

  return (
    <>
      <div className="container">
        <h2>Age Calculator</h2>
        <p>The calculated age will be displayed in years.</p>

        <div className="main-container">
          <form className="dob-container" onSubmit={submitHandle}>
            <h3>Date of Birth</h3>
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
            <div className="btn-container">
              <button type="submit">Calculate Age</button>
              <button onClick={resetHandle}>Reset</button>
            </div>
          </form>

          <div className="age-container">
            <h3>Your Age is</h3>
            <h1 className="age" onChange={(e) => setAge(e.target.value)}>
              {age > 0 ? `${age}` : "0"}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};
