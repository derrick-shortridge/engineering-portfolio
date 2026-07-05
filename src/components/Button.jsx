function Button({text, href}) {
    return(
        <a className ="px-4 py-10" href ={href}>{text}</a>
    )
}

export default Button