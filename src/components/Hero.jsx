import Button from './Button'
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
            <img src="./download.png" alt="Majestical portrait of moi"></img>
        </div>
        <p className ="text-gray-300 font-bold text-2xl px-4">Aspiring Aerospace and Electronics Engineer</p>
        <ul className="flex flex-col justify-evenly md:flex-row">
            {skills.map((skill) => (
                <li className ="text-gray-300 font-bold text-2xl px-4 py-45" key={skill}>{skill}</li>
            ))}
        </ul>
        <div className="text-gray-300 font-bold text-2xl flex flex-wrap justify-evenly">
            <Button  text="[View Projects]" href="#"/>
            <Button text="[Contact Me]" href="#"/>
        </div>
        </section>
    )
}
 
export default Hero