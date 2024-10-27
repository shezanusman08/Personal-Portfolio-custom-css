import Hero from "./hero";
import Navbar from "./navbar";
import ProjectsList from "./projects";
import SkillsList from "./skills";

export default function Home(){
  const skills = [
    {
      
      image: '/html.jpg',
      
    },
    {
      image: '/css.jpg',
    },
    {
      image: '/js.jpg',
    },
    {
      image: '/ts.jpg',
    },
    {
      image: '/next.jpg',
    },
    {
      image: '/tailwind.jpg',
    },
  ];

  const projects = [
    {
      
      image: '/car.png',
      name: 'Car Catalogue Website',
      description: 'Responsive car catalogue website'
    },
    {
      image: '/coffee.png',
      name: 'Coffee Website',
      description: 'Responsive multi-page coffee website '
      
    },
    {
      image: '/amazon.png',
      name: 'Amazon Webpage-Clone',
      description: 'Amazone webpage design clone'
    },
    {
      image: '/resume.png',
      name: 'Resume Builder',
      description: 'Resume builder where you can enter your details and it will generate your resume '
    },
    {
      image: '/webpage.png',
      name: 'Random webpage clone',
      description: 'Random webpage clone using HTML, CSS, Javascript'
      
    },

  ];





  return(
    <main>
      <Navbar/>
      <Hero/>
      <SkillsList skills={skills}/>
      <ProjectsList projects={projects}/>

    </main>
  )
}