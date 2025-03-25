import { supabase } from '@/utils/supabase/supabase-storage';
import { createClient } from '@/utils/supabase/server';
import ProductThumbnail from "../../../../components/ui/ProductThumbnail";
import SetFullImage from "../../../../components/ui/SetFullImage";
import Link from 'next/link'
import type { Metadata, ResolvingMetadata } from 'next'

export async function generateMetadata(
    { params }: any,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    // read route params
    const id = (await params).id
   
    const Colors = await getColors(id);
    const obj_image = await getImages(Colors[0].photo_url)
    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []
   
    return {
      title: `${Colors[0].name} - WilNWin Furniture`,
      openGraph: {
        images: `${obj_image.publicUrl}`, // Make sure to use a good-sized image
        url: `https://www.furniture.w2trusttrade.com/catalog/colors/${id}`,
      },
    }
  }

export default async function Page({params}:any) {
    const Colors = await getColors(params.id);
    const ColorImage = await generateContainer(Colors[0]);

    return(
        <div className='w-full flex sm:flex-row flex-col'>
            {ColorImage}
            <div className='p-[1em] w-full bg-primary1'>
                <header>
                    <span className='font-m1'>Set Name</span>
                    <h3 className='font-b1 !text-[2em]'>{Colors[0].name}</h3>
                </header>
                <br/>
            </div>
        </div>
    );
}

async function getImages(img_path:string){
    const { data } = supabase.storage.from('w2trusttrade-furniture').getPublicUrl(img_path)
    
    return data;
}

async function generateContainer(Color:any){
    const obj_image = await getImages(Color.photo_url)
    const prop:{[key:string]:string}= {};
    prop['id']         = Color.id;
    prop['image_url']  = obj_image.publicUrl;
    return (
        <div className='h-screen w-full'>
            <SetFullImage {...prop} ></SetFullImage>
        </div>
    )
}

async function getColors(id_colors:any){
    const supabase = await createClient();

    const { data: Colors } = await supabase.rpc('get_colors_paged',{limit_param:'1',offset_param:'0',id_param:id_colors});

    return Colors;
  }
