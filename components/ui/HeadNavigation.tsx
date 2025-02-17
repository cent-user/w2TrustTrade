export default function HeadNavigation(){
    return(
        <>
            <nav className="fixed w-full z-[100]">
                <ul className="flex font-bold bg-white text-black m-4 rounded-sm">
                    <div className="flex grow-[1]">
                        <li className="grow p-4 navbarButton">Logo</li>
                    </div>
                    <div className="flex grow-[2] justify-end">
                        <li className="grow p-4 navbarButton">Our Product</li>
                        <li className="grow p-4 navbarButton">About</li>
                    </div>
                </ul>
            </nav>
        </>
    );
}