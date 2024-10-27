import Image from 'next/image';
import './skill.css'; 

interface Skill {
  
  image: string;
}

interface SkillsListProps {
  skills: Skill[];
}

export default function SkillsList({ skills }: SkillsListProps) {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="title">My Skills</h2>
        <div className="grid">
          {skills.map((skill, index) => (
            <div key={index} className="card">
              <Image src={skill.image} alt="" width={300} height={300} className="cardImage" />
              <div className="cardContent">
                
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    
  );
}
