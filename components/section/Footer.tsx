import Link from 'next/link'
export default async function Footer(){
    return(
        <>
            <footer className='w-full relative text-primary5 font-b1'>
                <div className='p-[3em] bg-primary1'>
                    <div className='flex justify-evenly flex-wrap gap-[2em]'>
                        <div className='description'>
                            Quick Links :
                            <ul>
                                <li className=""><Link href="/#home">Home</Link></li>
                                <li className="ml-[1em]"><Link href="/#aboutUs">About Us</Link></li>
                                <li className="ml-[1em]"><Link href="/#vision">Vision</Link></li>
                                <li className="ml-[1em]"><Link href="/#howToOrder">How To Order</Link></li>
                                <li className="ml-[1em]"><Link href="/#featuredProducts">Featured Products</Link></li>
                                <li className="ml-[1em]"><Link href="/#contactUs">Contact Us</Link></li>
                                <li className=""><Link href="/catalog">Our Product</Link></li>
                                <li className=""><Link href="/why_us">Why Us</Link></li>
                            </ul>
                        </div>
                        <div id="contact_us" className='description'>
                            Contact Information :
                            <ul>
                                <li className="">Phone: &#40;&#43;62&#41; 811 168 8994</li>
                                <li className="">Email: marketing@w2trusttrade.com</li>
                            </ul>
                        </div>
                       
                    </div>
                    <div className="w-full text-center">
                        <br/>
                         © 2025 WilNWin Furniture. All Rights Reserved.
                    </div>
                </div>
            </footer>
        </>
    );
}