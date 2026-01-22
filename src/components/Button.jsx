function Button(props){
    const variant = props.variant || "primary";
    const size = props.size || "medium";
    return(
        <button
            className={`btn btn-${variant} btn-${size}`}
            onClick={props.onClick}
        > 
            {props.children}
        </button>
    );
}

export default Button;