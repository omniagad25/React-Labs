import ProgressBar from "react-bootstrap/ProgressBar";
import './SkillsBar.css';

function SkillsBar({contentRender, skillName, percentageValue}) {
  return (
    <>
      <div className="bar-container">
        <div className="bar">
          <h4>{skillName}</h4>
          <ProgressBar now={percentageValue} label={`${percentageValue}%`} className="custom-progress-bar"/>
        </div>
      </div>
    </>
  );
}

export default SkillsBar;