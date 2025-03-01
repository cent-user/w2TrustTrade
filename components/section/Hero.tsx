import { supabase } from '@/utils/supabase/supabase-storage';
import Image from 'next/image'
import Link from 'next/link'

async function HeroImages() {
    const { data } = supabase.storage.from('w2trusttrade-furniture').getPublicUrl('photoset/set_1.jpg')
    return data;
}


export default async function Hero(){
    const imageUrl = await HeroImages();

    return(
        <>
            <section className='block relative w-full h-screen' id="home">
                <div className='z-[2] flex absolute w-full  h-full items-end justify-center'>
                    <div className='flex flex-col p-[2em] mb-[1em] bg-primary5 text-primary1 text-center justify-center items-center rounded-md'>
                         <header>
                            <h1 className='z-[2] font-h1'>WilNWin Furniture</h1>    
                            <h2 className='font-b1'>&quot; Timeless Elegance, Handcrafted in Indonesia &quot;</h2>
                        </header>
                        <div className='pt-[1em] flex'>
                            <Link href="#contact_us">
                                <button className='button'>Contact Us</button>
                            </Link>
                            <Link href="/catalog" >
                                <button className='button'>Our Product</button>
                            </Link>
                        </div>
                    </div>   
                </div>
                <div className='z-[1] flex relative w-full h-full'>
                <Image src={imageUrl.publicUrl} 
                quality={100} 
                placeholder = 'empty'
                fill 
                style={{
                 objectFit: 'cover',
                }}
                alt="Hero" className='z-[0] object-center'/>
                </div>
            </section>
        </>
    );
}