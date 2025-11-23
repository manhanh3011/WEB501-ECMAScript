function Button({label = "Button", className = ""}){
    return (
        <button className={`px-4 py-2 rounded-md font-medium ${className}`} type="button" >
            {label} 
        </button>
    )
};

export default Button;