import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TrainingLogo from "../../asset/24px/Training.png";

const Trainingfile = () => {
  const [trainDropdown, setTrainDropdown] = useState("org-dropdown");
  const handleTrainclick = () => {
    if (trainDropdown === "org-dropdown") {
      setTrainDropdown("org-open");
    } else {
      setTrainDropdown("org-dropdown");
    }
  };

  const navigation = useNavigate();
  return (
    <div>
      <div className="logo-text-p" onClick={handleTrainclick}>
      <span></span>
        <img src={TrainingLogo} alt="Training" />
        <p id="dropdown">
          Training<i class='bx bx-chevron-down'></i>
        </p>
      </div>
      <div className="mobile-logo-text-p" onClick={handleTrainclick}>
      <span></span>
        <img src={TrainingLogo} alt="Training" />
       
      </div>
      <div className={trainDropdown}>
        <p onClick={() => navigation("/trainer")}>Trainer List</p>
      </div>
    </div>
  );
};

export default Trainingfile;
