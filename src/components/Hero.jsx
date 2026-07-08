import Button from './Button'
import {Link} from 'react-router-dom'
function Hero() {
    const skills = [
        ". Orbyts Research Student",
        ". Electronics Enthusiast",
        ". Python Programmer"
    ]
    return(
        <section className="bg-neutral-950 font-mono">
        <div className="flex flex-col">
            <h2 className ="text-gray-300 font-extrabold text-5xl py-10">Hi, I'm Derrick</h2>
        </div>
        <p className ="text-gray-300 font-bold text-2xl px-4">Aspiring Aerospace and Electronics Engineer</p>
        <ul className="flex flex-col justify-evenly md:flex-row">
            {skills.map((skill) => (
                <li className ="text-gray-300 font-bold text-2xl px-4 py-4" key={skill}>{skill}</li>
            ))}
        </ul>
        <div className="text-gray-300 font-bold text-2xl py-12 flex flex-wrap justify-evenly">
            <Link to="/projects" >
             <Button  text="[View Projects]"/>   
            </Link>    
            <Link to="/contact">   
                <Button text="[Contact Me]"/>
            </Link>  
        </div>
        </section>
    )
}
 
export default Hero