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
   
    const Furniture = await getFurnitureSet(id);
    const obj_image = await getImages(Furniture[0].photo_url)
    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []
   
    return {
      title: `${Furniture[0].name} - WilNWin Set Furniture`,
      openGraph: {
        images: `${obj_image.publicUrl}`, // Make sure to use a good-sized image
        url: `https://www.furniture.w2trusttrade.com/catalog/furniture_set_list/${id}`,
      },
    }
  }

export default async function Page({params}:any) {
    const FurnitureSet = await getFurnitureSet(params.id);
    const FurnitureSetProductList = await getFurnitureSetProductList(params.id);
    const FurnitureSetImage = await generateSetContainer(FurnitureSet[0]);
    
    const FurnitureProductListImage = [];
    if(FurnitureSetProductList){
        for(let cFSPL = 0; cFSPL < FurnitureSetProductList.length; cFSPL++){
            FurnitureProductListImage.push(generateProductContainer(FurnitureSetProductList[cFSPL]));
        }
    }

    return(
        <div className='w-full flex lg:flex-row flex-col'>
            {FurnitureSetImage}
            <div className='p-[1em] w-full bg-primary1'>
                <header>
                    <span className='font-m1'>Set Name</span>
                    <h3 className='font-b1 !text-[2em]'>{FurnitureSet[0].name}</h3>
                </header>
                <br/>
                <div className=''>
                    <span className='font-m1'>Furniture in this set</span>
                     <div className='flex flex-wrap justify-evenly gap-y-[1em] p-[1em]'>
                        {FurnitureProductListImage}
                    </div>
                </div>
            </div>
        </div>
    );
}

async function getImages(img_path:string){
    const { data } = supabase.storage.from('w2trusttrade-furniture').getPublicUrl(img_path)
    
    return data;
}

async function generateSetContainer(Furniture:any){
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

async function getFurnitureSet(id:number){
    const supabase = await createClient();
    const { data } = await supabase.rpc('get_furniture_set_paged',{limit_param:'1',offset_param:'0',id_param:id});
    return data;
}

async function getFurnitureSetProductList(set_id:number){
    const supabase = await createClient();
    const { data } = await supabase.rpc('get_furniture_set_product_list',{set_id_param:set_id});
    return data;
}

async function generateProductContainer(Furniture:any){
    const obj_image = await getImages(Furniture.furniture_photo_url)

    const prop:{[key:string]:string}= {};
    prop['id']         = Furniture.furniture_id;
    prop['image_url']  = obj_image.publicUrl;
    prop['furniture_name']  = Furniture.furniture_name;
    return (
    <div className='min-w-[100px] lg:min-w-[150px]  min-h-[120px] w-[10vw] basis-[1]'>
        <Link href={"/catalog/furniture_list/"+Furniture.furniture_id}>
            <ProductThumbnail {...prop} ></ProductThumbnail>
        </Link>
    </div>
    )
  }