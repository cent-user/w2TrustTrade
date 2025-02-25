import Link from 'next/link'
export default async function Footer(){
    return(
        <>
            <footer className='w-full relative text-primary1 font-b1'>
                <div className='p-[3em] bg-primary5'>
                    <div className='flex justify-evenly'>
                        <div>
                            Quick Links :
                            <ul>
                                <li className=""><Link href="/#home">Home</Link></li>
                                <li className="ml-[1em]"><Link href="/#aboutUs">About Us</Link></li>
                                <li className="ml-[1em]"><Link href="/#featuredProduct">Featured Product</Link></li>
                                <li className="ml-[1em]"><Link href="/#howToOrder">How To Order</Link></li>
                                <li className="ml-[1em]"><Link href="/#contactUs">Contact Us</Link></li>
                                <li className=""><Link href="/catalog">Our Product</Link></li>
                            </ul>
                        </div>
                        <div>
                            Contact Information :
                            <ul>
                                <li className="">Phone: &#40;&#43;62&#41; 811 168 8994</li>
                                <li className="">Email: wilnwinputraindo@gmail.com</li>
                            </ul>
                        </div>
                        <div>
                            Follow Us :
                            <ul>
                                
                            </ul>
                        </div>
                        <div>
                            Legal Information :
                            <ul>
                                <li className="">Privacy Policy</li>
                                <li className="">Terms of Service</li>
                            </ul>
                        </div>
                        <div>
                            Newsletter Signup :
                            <ul>
                                <li className="">Subscribe</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full text-center">
                    © 2025 WilNWin Furniture. All Rights Reserved.
                    </div>
                </div>
            </footer>
        </>
    );
}