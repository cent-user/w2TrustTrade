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
   
    const Furniture = await getFurniture(id);
    const obj_image = await getImages(Furniture[0].photo_url)
    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []
   
    return {
      title: `${Furniture[0].name} - WilNWin Furniture`,
      openGraph: {
        images: `${obj_image.publicUrl}`, // Make sure to use a good-sized image
        url: `https://www.furniture.w2trusttrade.com/catalog/furniture_list/${id}`,
      },
    }
  }

export default async function Page({params}:any) {
    const Furniture = await getFurniture(params.id);
    const FurnitureImage = await generateContainer(Furniture[0]);

    return(
        <div className='w-full flex sm:flex-row flex-col'>
            {FurnitureImage}
            <div className='p-[1em] w-full bg-primary1'>
                <header>
                    <span className='font-m1'>Set Name</span>
                    <h3 className='font-b1 !text-[2em]'>{Furniture[0].name}</h3>
                </header>
                <br/>
                <div className=''>
                    <span className='font-m1'>Size</span>
                    <p className='font-b1 '>{Furniture[0].size}</p>
                </div>
                <br/>
                <div className=''>
                    <span className='font-m1'>Description</span>
                    <p className='font-b1 '>{Furniture[0].description}</p>
                </div><br/>
                <div className='description '>
                    <span className='font-m1'>Product care</span>
                    <p className='font-b1 ' dangerouslySetInnerHTML={{ __html:Furniture[0].product_care}}></p>
                </div>
            </div>
        </div>
    );
}

async function getImages(img_path:string){
    const { data } = supabase.storage.from('w2trusttrade-furniture').getPublicUrl(img_path)
    
    return data;
}

async function generateContainer(Furniture:any){
    const obj_image = await getImages(Furniture.photo_url)
    const prop:{[key:string]:string}= {};
    prop['id']         = Furniture.id;
    prop['image_url']  = obj_image.publicUrl;
    return (
        <div className='h-screen w-full'>
            <SetFullImage {...prop} ></SetFullImage>
        </div>
    )
}

async function getFurniture(id_furniture:any){
    const supabase = await createClient();

    const { data: Furniture } = await supabase.rpc('get_furniture_paged',{limit_param:'1',offset_param:'0',id_param:id_furniture});

    return Furniture;
  }
