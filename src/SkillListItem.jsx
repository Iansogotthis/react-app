import React from 'react';
const skills = [
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
];

const SkillListItem = () => {

    return (
        // JSX for rendering component
        <ul>
            {skills.map((skill, index) => (
                <li className="SkillListItem" key={index}>
                    {skill.name}
                </li>
            ))}
        </ul>
    );
  };
  
  export {SkillListItem};