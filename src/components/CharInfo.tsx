import Button from "./Button";

const CharInfo = () => {

    const nameCharInfo: string = "Black Panther";
    const imageURLInfo: string = "src/resources/img/blackpanther.png";
    const descCharInfo: string = "In Marvel lore, Black Panther is the king and protector of Wakanda. His real name is T’Challa, son of T’Chaka and Queen Ramonda. After his father’s death, he inherits the throne and the powers of the Black Panther through the Heart-Shaped Herb. With Vibranium technology and unmatched skill, he defends his people and the world. T’Challa stands as a symbol of honor, strength, and unity, a hero whose legacy inspires generations.";
    const comicsData: string = "Fantastic Four (1966) #52";
    const HEADERCOMICS: string = "Comics:";


    return (
        <div className="flex-1 h-fit p-6 bg-white shadow-[1px_1px_40px_rgba(0,0,0,0.25)]" >
            <div className="flex gap-6 items-center mb-4">
                <div className="w-[150px] h-[150px]">
                    <img className="h-full object-cover" src={imageURLInfo} alt="Character's picture" />
                </div>
                <div className="flex flex-col gap-8">
                    <h1 className="font-bold text-[22px] uppercase">{nameCharInfo}</h1>
                    <div className="flex flex-col gap-2.5">
                        <Button text="Homepage" color="red" onClick={() => {}}/>
                        <Button text="Wiki" color="gray" onClick={() => {}}/>
                    </div>
                </div>
            </div>
            <p className="text-[14px] text-justify mb-7">{descCharInfo}</p>
            <h2 className="font-bold text-[18px] mb-2.5">{HEADERCOMICS}</h2>
            <ul className="flex flex-col gap-2.5">
                <li className="flex w-full h-fit items-center bg-white px-2.5 py-1.5 shadow-[0px_3px_8px_rgba(0,0,0,0.25)]">{comicsData}</li>
                <li className="flex w-full h-fit items-center bg-white px-2.5 py-1.5 shadow-[0px_3px_8px_rgba(0,0,0,0.25)]">{comicsData}</li>
                <li className="flex w-full h-fit items-center bg-white px-2.5 py-1.5 shadow-[0px_3px_8px_rgba(0,0,0,0.25)]">{comicsData}</li>
                <li className="flex w-full h-fit items-center bg-white px-2.5 py-1.5 shadow-[0px_3px_8px_rgba(0,0,0,0.25)]">{comicsData}</li>
                <li className="flex w-full h-fit items-center bg-white px-2.5 py-1.5 shadow-[0px_3px_8px_rgba(0,0,0,0.25)]">{comicsData}</li>
                <li className="flex w-full h-fit items-center bg-white px-2.5 py-1.5 shadow-[0px_3px_8px_rgba(0,0,0,0.25)]">{comicsData}</li>
                <li className="flex w-full h-fit items-center bg-white px-2.5 py-1.5 shadow-[0px_3px_8px_rgba(0,0,0,0.25)]">{comicsData}</li>
            </ul>
        </div>
    );
}
 
export default CharInfo;