type CharCardProps = {
    name: string
    imageURL: string
}

const CharCard = ({ name, imageURL }: CharCardProps) => {

    return (
        <li className="flex flex-col h-80 w-[200px] cursor-pointer shadow-[0_1px_10px_rgba(0,0,0,0.25) transition duration-300 hover:-translate-y-1.5">
            <div className="h-[200px] w-[200px]">
                <img className="h-full w-full object-cover" src={imageURL} alt="character's picture" />
            </div>
            <div className="flex-1 px-4 py-5 bg-[#232222]">
                <h1 className="font-bold text-[22px] uppercase text-white">{name}</h1>
            </div>
        </li>
    );
}
 
export default CharCard;