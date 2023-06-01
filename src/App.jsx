import { useState } from "react";
import "./App.css";

import BmiResult from "./components/BmiResult";

function App() {
  const [bmi, setBMI] = useState(0);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  const handleOnchange = (e) => {
    const { name, value } = e.target;

    if (name === "height") {
      setHeight(value);
    } else if (name === "weight") {
      setWeight(value);
    }
  };

  const calulateBmi = () => {
    const bmi = weight / (height / 100) ** 2;
    setBMI(bmi);
  };

  return (
    <>
      <h1>BMI Calulator</h1>
      <p>โปรแกรมคำนวณค่าดัชนีมวลกาย - BMI</p>

      <label htmlFor="weige">น้ำหนัก (kg)</label>
      <input type="number" name="weight" onChange={handleOnchange} />
      <label htmlFor="height">ส่วนสูง (cm)</label>
      <input type="number" name="height" onChange={handleOnchange} />

      <button type="button" name="calulate" onClick={calulateBmi}>
        คำนวณ BMI
      </button>

      <BmiResult bmi={bmi} />

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
