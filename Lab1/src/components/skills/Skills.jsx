import './Skills.css';
import SkillsBar from '../../reusableComponents/progress-bar/SkillsBar';


function Skills(){
  const skillsData = [
    { skillName: "Python", percentageValue: "70" },
    { skillName: "JavaScript", percentageValue: "85" },
    { skillName: "NodeJS", percentageValue: "90" },
    { skillName: "React", percentageValue: "70" }
  ];
  const renderContent = (skillName) => (
    <h4>{skillName}</h4>
  );

  return (
    <div className="skills-container">
      {skillsData.map((skill, index) => (
        <SkillsBar
          key={index}
          skillName={skill.skillName}
          percentageValue={skill.percentageValue}
          renderContent={renderContent}
        />
      ))}
    </div>
  );
}

export default Skills;