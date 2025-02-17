import { supabase } from '@/utils/supabase/supabase-storage';
import Image from 'next/image'

async function HeroImages() {
    const { data } = supabase.storage.from('w2trusttrade-furniture').getPublicUrl('Firefox_wallpaper.png')
    return data;
}


export default async function Hero(){
    const imageUrl = await HeroImages();

    return(
        <>
            <section className='block relative w-full h-screen'>
                <div className='z-[2] flex absolute w-full  h-full items-end justify-center'>
                    <div className='flex flex-col p-[1em] mb-[1em] bg-primary1 text-center justify-center items-center'>
                         <header>
                            <h1 className='text-primary4 z-[2] font-h1'>WilNWin Furniture</h1>    
                            <h2 className='font-b1'>&quot; Timeless Elegance, Handcrafted in Indonesia &quot;</h2>
                        </header>
                        <div className='pt-[1em]'>
                            <button>Contact Us</button>
                        </div>
                    </div>   
                </div>
                <div className='z-[1] flex relative w-full h-full'>
                <Image unoptimized src={imageUrl.publicUrl} width={0} height={0} alt="Hero" className='z-[0] w-full h-full object-cover object-center'/>
                </div>
            </section>
        </>
    );
}