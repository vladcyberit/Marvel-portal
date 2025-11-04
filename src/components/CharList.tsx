import Button from "./Button";
import CharCard from "./CharCard";
import CharInfo from "./CharInfo";
import SkeletonCharInfo from "./SkeletonCharInfo";

const CharList = () => {

    const nameChar: string = "Black Panther";
    const imageURL: string = "src/resources/img/blackpanther.png";

    return ( 
        <section className="mt-14 flex gap-8">
            <div className="flex flex-col gap-11 items-center">
                <ul className="grid grid-cols-3 gap-8">
                    <CharCard name={nameChar} imageURL={imageURL}/>
                    <CharCard name={nameChar} imageURL={imageURL}/>
                    <CharCard name={nameChar} imageURL={imageURL}/>
                    <CharCard name={nameChar} imageURL={imageURL}/>
                    <CharCard name={nameChar} imageURL={imageURL}/>
                    <CharCard name={nameChar} imageURL={imageURL}/>
                    <CharCard name={nameChar} imageURL={imageURL}/>
                    <CharCard name={nameChar} imageURL={imageURL}/>
                    <CharCard name={nameChar} imageURL={imageURL}/>
                </ul>
                <Button text="Load more" color="red" onClick={() => {}}/>
            </div>
            <CharInfo />
            {/* <SkeletonCharInfo /> */}
        </section>
    );
}
 
export default CharList;