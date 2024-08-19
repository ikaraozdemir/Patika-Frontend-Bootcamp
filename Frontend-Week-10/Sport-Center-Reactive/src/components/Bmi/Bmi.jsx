import React, { useState, useRef, useEffect } from 'react';

function Bmi() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [arrowPosition, setArrowPosition] = useState('0%');

  const heightRef = useRef(null);
  const weightRef = useRef(null);
  const arrowContainerRef = useRef(null);

  useEffect(() => {
    const calculateBMI = () => {
      const heightInMeters = parseFloat(height) / 100;
      const weightInKg = parseFloat(weight);

      if (!heightInMeters || !weightInKg) {
        setArrowPosition('0%');
        return;
      }

      const bmi = weightInKg / (heightInMeters * heightInMeters);
      let position = 0;
      let left = 0;

      if (bmi < 10) {
        position = 0;
        left = bmi / 2;
      } else if (bmi >= 10 && bmi < 15) {
        position = 0;
        left = bmi - 10 < 0 ? bmi / 2 : 4 + bmi - 10;
      } else if (bmi >= 15 && bmi < 20) {
        position = 0;
        left = bmi - 10;
      } else if (bmi >= 20 && bmi < 25) {
        position = 1;
        left = bmi - 20;
      } else if (bmi >= 25 && bmi < 30) {
        position = 2;
        left = bmi - 25;
      } else if (bmi >= 30 && bmi < 35) {
        position = 3;
        left = bmi - 30;
      } else if (bmi >= 35 && bmi < 40) {
        position = 4;
        left = bmi - 35;
      } else {
        position = 5;
        left = -2;
      }

      const calculatedPosition = position * 20 + left;
      setArrowPosition(`${calculatedPosition}%`);
    };

    calculateBMI(); 

  }, [height, weight]); 

  return (
    <div className="bmi">  
      <div className="container">
        <div className="bmi-info">
          <h2>BMI Calculator</h2>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
          <div className="bmi-inputs">
            <div className="input">
              <input 
                type="number" 
                id="height" 
                name="height" 
                placeholder="Your Height" 
                autoComplete="off"
                ref={heightRef}
                value={height}
                onChange={(e) => setHeight(e.target.value)} 
              />
              <h6>cm</h6>
            </div>
            <div className="input">
              <input 
                type="number" 
                id="weight" 
                name="weight" 
                placeholder="Your Weight" 
                autoComplete="off"
                ref={weightRef}
                value={weight}
                onChange={(e) => setWeight(e.target.value)} 
              />
              <h6>kg</h6>
            </div>
          </div>
        </div>
        <div className="bmi-display">
          <h3>Your BMI</h3>
          <img src="./images/bmi-title.jpg" alt="BMI Categories" id="bmi-title" />
          <div className="bmi-chart arrow-container" ref={arrowContainerRef} style={{ '--arrow-position': arrowPosition }}>
            <img src="./images/bmi.jpg" alt="BMI Categories" id="bmi-chart" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bmi;
