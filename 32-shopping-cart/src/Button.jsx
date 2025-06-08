
const Button = ({onclick, type, text}) => {
    return(
        <button onClick={onclick} type={type}>{text}</button>
    )
}

return Button