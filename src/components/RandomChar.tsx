import Button from "./Button";

const RandomChar = () => {
    const nameRandomChar: string = "Thor";
    const descRandomChar: string = "As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, he's quite smart and compassionate...";
    const imgRandomChar: string = "src/resources/img/Thumbnail.png"
    const hookRandomChar: string = `Random character for today! Do you want to get to know him better?`;
    const extraHookRandomChar: string = "Or choose another one";
    const imgDecoration: string = "src/resources/img/Decoration.png";

    return (
        <section className="flex flex-col md:flex-row h-[260px] shadow-[5px_5px_40px_rgba(0,0,0,0.25)]">
            <div className="flex justify-center items-center w-full md:w-1/2 bg-white p-[35px] gap-[30px]">
                <img src={imgRandomChar} alt="Random character" />
                <div className="flex flex-col gap-2.5">
                    <h1 className="font-bold text-[22px] uppercase">{nameRandomChar}</h1>
                    <p className="text-[14px]">{descRandomChar}</p>
                    <div className="flex gap-8">
                        <Button text="Homepage" onClick={() => {}} color="red"/>
                        <Button text="Wiki" onClick={() => {}} color="gray"/>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col justify-center w-full md:w-1/2 bg-[#232222] p-[35px] relative">
                <h1 className="font-bold text-2xl text-white mb-10 max-w-[370px]">{hookRandomChar}</h1>
                <h1 className="font-bold text-2xl text-white mb-3.5">{extraHookRandomChar}</h1>
                <Button text="Try it" onClick={() => {}} color="red"/>
                <img className="absolute w-52 -right-10 bottom-5" src={imgDecoration} alt="" />
            </div>
        </section>
    );
}
 
export default RandomChar;