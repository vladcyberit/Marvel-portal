const SkeletonCharInfo = () => {
    const skeletonHeader: string = "Please select a character to see information";

    return ( 
        <div className="flex-1 h-fit p-6 bg-white shadow-[1px_1px_40px_rgba(0,0,0,0.25)]">
            <h1 className="font-bold text-[18px] text-center mb-8">{skeletonHeader}</h1>
            <div className="flex flex-col w-full gap-4 animate-pulse">
                <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-full bg-[#C4C4C4]"></div>
                    <div className="w-80 h-4 bg-[#C4C4C4]"></div>
                </div>
                <div className="w-full h-9 bg-[#C4C4C4]"></div>
                <div className="w-full h-9 bg-[#C4C4C4]"></div>
                <div className="w-full h-9 bg-[#C4C4C4]"></div>
            </div>
        </div>
    );
}
 
export default SkeletonCharInfo;