import { supabase } from '@/utils/supabase/supabase-storage';
import { createClient } from '@/utils/supabase/server';
import ProductThumbnail from "../../components/ui/ProductThumbnail";
import SetThumbnail from "../../components/ui/SetThumbnail";
import Link from 'next/link'

export default async function page({searchParams}:{searchParams: Promise<{[key:string]:string|string[]|undefined}>}) {

    const prop: { [key: string]: any } = {};
    prop['limit'] = 8;
    prop['offset'] = 0;
    const Furniture = await getFurniturePaged(prop);

    const propSet: { [key: string]: any } = {};
    propSet['limit'] = 3;
    propSet['offset'] = 0;
    const FurnitureSet = await getFurnitureSetPaged(propSet);

    const product_list = [];
    if(Furniture){
        for(let cFurniture = 0;cFurniture < Furniture?.length;cFurniture++){
            product_list.push(generateProductContainer(Furniture[cFurniture]));
          }    
    }

    const set_list = [];
    if(FurnitureSet){
        for(let cFurnitureSet = 0;cFurnitureSet < FurnitureSet?.length;cFurnitureSet++){
            set_list.push(generateSetContainer(FurnitureSet[cFurnitureSet]));
          }    
    }

    return <>
    <div className='relative flex max-w-screen m-[1em] flex-col'>
            <section className="bg-primary1 mb-[1em]">
                <header className="bg-primary5 text-primary1 font-h1 flex justify-center p-[1em]">
                    <h3>Our Set</h3>
                </header>
                <div className='flex justify-evenly flex-wrap p-[1em]'>
                    {set_list}
                </div>
                <div>
                    <Link href="/catalog/furniture_set_list"><h4>See More</h4></Link>
                </div>
            </section>
            <section className="bg-primary1 ">
                <header className="bg-primary5 text-primary1 font-h1 flex justify-center p-[1em]">
                    <h3>Our Furniture</h3>
                </header>
                <div className='flex justify-evenly flex-wrap p-[1em]'>
                    {product_list}
                </div>
                <div>
                    <Link href="/catalog/furniture_list"><h4>See More</h4></Link>
                </div>
            </section>
    </div>
  </>
}

async function getImages(img_path:string){
const { data } = supabase.storage.from('w2trusttrade-furniture').getPublicUrl(img_path)
return data;
}

async function generateProductContainer(Furniture:any){
    const obj_image = await getImages(Furniture.photo_url)

    const prop:{[key:string]:string}= {};
    prop['id']         = Furniture.id;
    prop['image_url']  = obj_image.publicUrl;
    prop['furniture_name']  = Furniture.name;
    return (
    <div className='min-w-[100px] sm:min-w-[150px]  min-h-[120px] w-[10vw] basis-[1'>
        <ProductThumbnail {...prop} ></ProductThumbnail>
    </div>
    )
  }

  async function generateSetContainer(Furniture:any){
    const obj_image = await getImages(Furniture.photo_url)

    const prop:{[key:string]:string}= {};
    prop['id']         = Furniture.id;
    prop['image_url']  = obj_image.publicUrl;
    prop['furniture_name']  = Furniture.name;
    return (
    <div className='min-w-[200px] sm:min-w-[250px] min-h-[250px] grow-[1] p-[.5em]'>
        <SetThumbnail {...prop} ></SetThumbnail>
    </div>
    )
  }

 async function getFurniturePaged(pageProp:any){
    const supabase = await createClient();
    const { data: Furniture } = await supabase.rpc('get_furniture_paged',{limit_param:pageProp['limit'],offset_param:pageProp['offset']});
    return Furniture;
  }

  async function getFurnitureSetPaged(pageProp:any){
    const supabase = await createClient();
    const { data } = await supabase.rpc('get_furniture_set_paged',{limit_param:pageProp['limit'],offset_param:pageProp['offset']});
    console.log(data);
    return data;
  }


  