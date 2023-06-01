import React from "react";

function BmiResult({ bmi }) {
  const checkBmiResult = (bmi) => {
    if (bmi === 0) return "-";
    if (bmi < 18.5) return "ผอม";
    if (bmi < 25) return "สุขภาพดี";
    if (bmi < 30) return "โรคอ้วนระดับ 1";
    if (bmi < 35) return "โรคอ้วนระดับ 2";
    if (bmi >= 35) return "โรคอ้วนระดับ 3";
  };

  return (
    <dev className="result">
      <p>BMI ของคุณคือ: {bmi}</p>
      <p>ผลลัพธ์คือ : {checkBmiResult(bmi)}</p>
    </dev>
  );
}

export default BmiResult;
