import { supabase } from '@/utils/supabase/supabase-storage';
import { createClient } from '@/utils/supabase/server';
import SetThumbnail from "../../../components/ui/SetThumbnail";
import Paging from "../../../components/ui/Paging";
import BreadCrumb from "../../../components/ui/BreadCrumb";
import Link from 'next/link'


export default async function page({searchParams}:{searchParams: Promise<{[key:string]:string|string[]|undefined}>}) {
  const getParams = (await searchParams);  
  const pageProp: { [key: string]: any } = {};
  pageProp['curr'] = getParams.page ?? 1;
  pageProp['limit'] = 10;
  pageProp['offset'] = (+pageProp['curr'] - +1) * pageProp['limit'] ;
  
  const FurnitureSet = await getFurnitureSetPaged(pageProp);

  const FurnitureSetCount = await getFurnitureSetCount();
  const product_list_paging = [];
  const set_list = [];
  if(FurnitureSetCount){
    const FurniturePageCount = Math.ceil(FurnitureSetCount / pageProp['limit']);
    
    for(let cFurnitureSet = 0;cFurnitureSet < FurnitureSet?.length;cFurnitureSet++){
      set_list.push(generateSetContainer(FurnitureSet[cFurnitureSet]));
    }    
    
    for(let cFPC = 0;cFPC < FurniturePageCount;cFPC++){
      product_list_paging.push(generatePaging((cFPC+1)));
    }
  }
  
  
  return <>
  <BreadCrumb></BreadCrumb>
  <section className='relative flex max-w-screen flex-col m-[1em]'>
      <header className="bg-primary5 text-primary1 font-h1 flex justify-center p-[1em]">
          <h3>Our Set Collection</h3>
      </header>
      <div className='relative bg-primary2 basis-[1] grow-[1] flex flex-row flex-wrap justify-evenly'>
          {set_list}
      </div>
      <div className='flex bg-primary1 w-full justify-center'>
          {product_list_paging}
      </div>
  </section>
  </>
}


async function getImages(img_path:string){
  const { data } = supabase.storage.from('w2trusttrade-furniture').getPublicUrl(img_path)
  return data;
}

async function getFurnitureSetCount(){
  const supabase = await createClient();
  const { count, error } = await supabase.from('Furniture_Set').select('*', { count: 'exact', head: true });

  return count;
}

 async function generateSetContainer(Furniture:any){
     const obj_image = await getImages(Furniture.photo_url)
 
     const prop:{[key:string]:string}= {};
     prop['id']         = Furniture.id;
     prop['image_url']  = obj_image.publicUrl;
     prop['furniture_name']  = Furniture.name;
     console.log(Furniture);
     return (
        
        <div className='min-w-[300px] min-h-[300px] sm:min-w-[400px] sm:min-h-[400px]  max-w-[500px]  grow-[1] p-[.5em]'>
            <Link href={"/catalog/furniture_set_list/"+Furniture.id}>
              <SetThumbnail {...prop} ></SetThumbnail>
            </Link>
        </div>
    
     )
   }
 
   async function getFurnitureSetPaged(pageProp:any){
     const supabase = await createClient();
     const { data } = await supabase.rpc('get_furniture_set_paged',{limit_param:pageProp['limit'],offset_param:pageProp['offset']});
      console.log(data);
     return data;
   }

  async function generatePaging(page:any){

    const prop:{[key:string]:string}= {};
    prop['url'] = '/catalog/furniture_list';
    prop['page'] = page;
    return <Paging {...prop}></Paging>
  }


  