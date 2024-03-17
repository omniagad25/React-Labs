import ProgressBar from "react-bootstrap/ProgressBar";

function SkillsBar(props) {
  return (
    <>
    <h4>{props.skillName}</h4>
    <ProgressBar now={props.percentageValue} label={`${props.percentageValue}%`} />
    </>
  );
}

export default SkillsBar;