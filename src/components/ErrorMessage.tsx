import errorGif from "../resources/img/error.gif";

const ErrorMessage = () => {
    return (
        <img className="block w-[250px] h-[250px] object-contain mx-auto" src={errorGif} alt="Error occurred while loading" />
    );
}
 
export default ErrorMessage;