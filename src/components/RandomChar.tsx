import { Component } from "react";
import { getCharacterByID, type CharacterDetailed } from "../services/MarvelService";

import Button from "./Button";
import Spinner from "./Spinner";

import Decoration from "../resources/img/Decoration.png";

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
    loading: boolean
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
        },
        loading: true
    }

    onCharLoaded = (char: CharacterDetailed) => {
        this.setState({char, loading: false});
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
    };

    descTransform = () => {
        const { char: {description} } = this.state;
        const str = description;

        if (!str) return null;

        const strCut = str.length > 135 ? str.slice(0, 135) + "..." : str;
        return strCut;  
    };

    hookRandomChar: string = `Random character for today! Do you want to get to know him better?`;
    extraHookRandomChar: string = "Or choose another one";

    render() {
        const { char, loading } = this.state;

        return (
            <section className="flex flex-col md:flex-row h-[260px] shadow-[5px_5px_40px_rgba(0,0,0,0.25)]">
                <div className="flex justify-center items-center w-full md:w-1/2 bg-white p-[35px] gap-[30px]">
                    {loading ? <Spinner/> : <View char={char} descTransform={this.descTransform} goToLink={this.goToLink}/>}
                </div>
                
                <div className="flex flex-col justify-center w-full md:w-1/2 bg-[#232222] p-[35px] relative">
                    <h1 className="font-bold text-2xl text-white mb-10 max-w-[370px]">{this.hookRandomChar}</h1>
                    <h1 className="font-bold text-2xl text-white mb-3.5">{this.extraHookRandomChar}</h1>
                    <Button text="Try it" onClick={() => {}} color="red"/>
                    <img className="absolute w-52 -right-10 bottom-5" src={Decoration} alt="" />
                </div>
            </section>
        );
    } 
}

interface CharView {
    id: number | null
    name: string | null
    description: string | null
    thumbnail: string | undefined
    homepage: string | null
    wiki: string | null
    comics: null | {
        items: string[]
    }
}

type ViewProps = {
    char: CharView
    descTransform: () => string | null
    goToLink: (name: string) => void
}

const View = ({ char, descTransform, goToLink }: ViewProps) => {
    const { name, thumbnail } = char;
    return (
        <>
            <img className="w-[180px] h-[180px] object-cover" src={thumbnail} alt="Random character" />
            <div className="flex flex-col h-44 gap-3">
                <h1 className="font-bold text-[22px] uppercase">{name}</h1>
                <p className="text-[14px]">{descTransform()}</p>
                <div className="flex gap-8 mt-auto">
                    <Button name="homepage" text="Homepage" onClick={(e) => goToLink(e.currentTarget.name)} color="red"/>
                    <Button name="wiki" text="Wiki" onClick={(e) => goToLink(e.currentTarget.name)} color="gray"/>
                </div>
            </div>
        </>
    );
}

export default RandomChar;