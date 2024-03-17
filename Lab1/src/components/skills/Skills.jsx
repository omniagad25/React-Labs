import './Skills.css';
import SkillsBar from './../progress-bar/SkillsBar'

function Skills(){
    return(
        <>
        
        <div className="w-50">
          <SkillsBar percentageValue={"70"} skillName={"Python"} />
          <SkillsBar percentageValue={"85"} skillName={"JavaScript"} />
          <SkillsBar percentageValue={"90"} skillName={"NodeJS"} />
          <SkillsBar percentageValue={"70"} skillName={"React"} />
        </div>
        </>
    )
}

export default Skills;