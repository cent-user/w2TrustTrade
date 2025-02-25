import { supabase } from '@/utils/supabase/supabase-storage';
import Image from 'next/image'

async function HeroImages() {
    const { data } = supabase.storage.from('w2trusttrade-furniture').getPublicUrl('photoset/1.jpg')
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
                        <div className='pt-[1em]'>
                            <button className='button'>Contact Us</button>
                        </div>
                    </div>   
                </div>
                <div className='z-[1] flex relative w-full h-full'>
                <Image src={imageUrl.publicUrl} 
                quality={10} 
                placeholder = 'empty'
                fill 
                sizes="100vw" 
                style={{
                 objectFit: 'cover',
                }}
                alt="Hero" className='z-[0] object-center'/>
                </div>
            </section>
        </>
    );
}