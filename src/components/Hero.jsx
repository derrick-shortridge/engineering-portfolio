import Button from './Button'

function Hero() {
    const skills = [
        "Orbyts Research Student",
        "Electronics Enthusiast",
        "Python Programmer"
    ]
    return(
        <section className="">
        <h2 className = "">Hi, I'm Derrick</h2><br />
        <p>Aspiring Aerospace and Electronics Engineer</p>
        <ul>
            {skills.map((skill) => (
                <li key={skill}>{skill}</li>
            ))}
        </ul>
        <Button text="[View Projects]" />
        <Button text="[Contact Me]" />
        </section>
    )
}
 
export default Hero