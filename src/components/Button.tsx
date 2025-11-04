type ButtonProps = {
    text: string
    color?: "red" | "gray"
    onClick: () => void
}

const Button = ({ text, color="red", onClick }: ButtonProps) => {
    const colors: Record<string, string> = {
        red: "bg-red-800",
        gray: "bg-gray-500"
    };

    return (
        <button 
            className={`flex justify-center items-center w-[106px] h-[40px] text-white ${colors[color]} cursor-pointer [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)] transition duration-200 hover:-translate-y-0.5`} 
            onClick={onClick}>
            <span className="text-[14px] uppercase">{text}</span>
        </button>
    );
}
 
export default Button;