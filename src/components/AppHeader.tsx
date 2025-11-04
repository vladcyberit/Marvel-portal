const AppHeader = () => {
    return ( 
        <header className="flex flex-col md:flex-row justify-between items-center py-14">
            <h1 className="text-[28px] font-bold">
                <a href="#!">
                    <span className="text-red-800">Marvel</span> information portal
                </a>
            </h1>
            <nav>
                <ul className="flex gap-2 text-black text-2xl font-bold">
                    <li>
                        <a href="#!" className="transition duration-200 hover:text-red-800">Characters</a>
                    </li>
                    /
                    <li>
                        <a href="#!" className="transition duration-200 hover:text-red-800">Comics</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
 
export default AppHeader;