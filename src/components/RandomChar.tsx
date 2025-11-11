import { Component } from "react";
import Button from "./Button";
import { getCharacterByID, type CharacterDetailed } from "../services/MarvelService";

interface State {
    char: {
        id: null | number
        name: null | string 
        description: null | string
        thumbnail: undefined | string
        homepage: null | string
        wiki: null | string
        comics: null | {
            items: string[]
        }
    }
}

class RandomChar extends Component {
    constructor(props) {
        super(props);
        this.updateChar();
    }

    state: State = {
        char: {
            id: null,
            name: null,
            description: null,
            thumbnail: undefined,
            homepage: null,
            wiki: null,
            comics: null
        }
    }

    onCharLoaded = (char: CharacterDetailed) => {
        this.setState({char});
    };

    updateChar = async () => {
        const id: number = Math.floor(Math.random() * (20 - 1) + 1);
        const res = await getCharacterByID(id);
        this.onCharLoaded(res); 
    };

    goToLink = (name: string) => {
        const { char: {homepage, wiki} } = this.state;

        switch (name) {
            case "homepage":
                window.open(`${homepage}`);
                break;
            case "wiki":
                window.open(`${wiki}`);
                break;
        }
    }

    nameRandomChar: string = "Thor";
    descRandomChar: string = "As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, he's quite smart and compassionate...";
    imgRandomChar: string = "src/resources/img/Thumbnail.png"
    hookRandomChar: string = `Random character for today! Do you want to get to know him better?`;
    extraHookRandomChar: string = "Or choose another one";
    imgDecoration: string = "src/resources/img/Decoration.png";


    render() {
        const { char: {name, description, thumbnail} } = this.state;

        return (
            <section className="flex flex-col md:flex-row h-[260px] shadow-[5px_5px_40px_rgba(0,0,0,0.25)]">
                <div className="flex items-center w-full md:w-1/2 bg-white p-[35px] gap-[30px]">
                    <img className="w-[180px] h-[180px] object-cover" src={thumbnail} alt="Random character" />
                    <div className="flex flex-col h-44 gap-3">
                        <h1 className="font-bold text-[22px] uppercase">{name}</h1>
                        <p className="text-[14px]">{description}</p>
                        <div className="flex gap-8 mt-auto">
                            <Button name="homepage" text="Homepage" onClick={(e) => this.goToLink(e.currentTarget.name)} color="red"/>
                            <Button name="wiki" text="Wiki" onClick={(e) => this.goToLink(e.currentTarget.name)} color="gray"/>
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col justify-center w-full md:w-1/2 bg-[#232222] p-[35px] relative">
                    <h1 className="font-bold text-2xl text-white mb-10 max-w-[370px]">{this.hookRandomChar}</h1>
                    <h1 className="font-bold text-2xl text-white mb-3.5">{this.extraHookRandomChar}</h1>
                    <Button text="Try it" onClick={() => {}} color="red"/>
                    <img className="absolute w-52 -right-10 bottom-5" src={this.imgDecoration} alt="" />
                </div>
            </section>
        );
    } 
}
 
export default RandomChar;