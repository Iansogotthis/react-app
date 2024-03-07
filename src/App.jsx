import NewSkillForm from "./NewSkillForm";
import SkillList from "./SkillList";

const skills = [
  { name: "HTML", level: 5 },
  { name: "CSS", level: 3 },
  { name: "JavaScript", level: 4 },
  { name: "Python", level: 2 },
];

export function List() {
  const listItems = skills.map((skill, index) => (
    <li className="SkillListItem" key={index}>{skill.name}</li>
  ));
  return <ul>{listItems}</ul>;
}


export default function App() {
  return (
      <>

    <div> 
      <h1>React-Dev-Skills</h1>
      <SkillList />
      <NewSkillForm />
    </div> 
     </>

  );
}
export {}