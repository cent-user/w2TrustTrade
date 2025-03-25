import Link from 'next/link'
export default function HeadNavigation(){
    return(
        <>
            <nav className="relative w-full z-[100]">
                <ul className="flex font-bold bg-white text-black m-4 rounded-sm">
                    <div className="flex grow-[1]">
                        <li className="grow"><Link href="/" className="w-full block p-4 navbarButton">Home</Link></li>
                    </div>
                    <div className="flex grow-[2] justify-end">
                        <li className="grow"><Link href="/catalog" className="w-full block p-4 navbarButton">Our Product</Link></li>
                    </div>
                    <div className="flex grow-[2] justify-end">
                        <li className="grow"><Link href="/why_us" className="w-full block p-4 navbarButton">Why Us</Link></li>
                    </div>
                </ul>
            </nav>
        </>
    );
}