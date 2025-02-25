import { supabase } from '@/utils/supabase/supabase-storage';
import { createClient } from '@/utils/supabase/server';
import ProductThumbnail from "../../../components/ui/ProductThumbnail";
import Paging from "../../../components/ui/Paging";


export default async function page({searchParams}:{searchParams: Promise<{[key:string]:string|string[]|undefined}>}) {
  const getParams = (await searchParams);  
  const pageProp: { [key: string]: any } = {};
  pageProp['curr'] = getParams.page ?? 1;
  pageProp['limit'] = 20;
  pageProp['offset'] = (+pageProp['curr'] - +1) * pageProp['limit'] ;
 
  const FurnitureCount = await getFurnitureCount();
  


  const product_list = [];
  const product_list_paging = [];
  if(FurnitureCount){
      const Furniture = await getFurniturePaged(pageProp);
      const FurniturePageCount = Math.ceil(FurnitureCount / pageProp['limit']);
      
      for(let cFurniture = 0;cFurniture < Furniture?.length;cFurniture++){
        product_list.push(generateProductContainer(Furniture[cFurniture]));
      }

      for(let cFPC = 0;cFPC < FurniturePageCount;cFPC++){
        product_list_paging.push(generatePaging((cFPC+1)));
    }
  }
  
  return <>
  <div className='relative flex max-w-screen flex-col'>
      <div className='relative bg-primary2 basis-[1] grow-[1] flex flex-row flex-wrap '>
          {product_list}
      </div>
      <div className='flex bg-primary1 w-full justify-center'>
          {product_list_paging}
      </div>
  </div>
  </>
}

  async function getFurniturePaged(pageProp:any){
    const supabase = await createClient();
    const { data: Furniture } = await supabase.rpc('get_furniture_paged',{limit_param:pageProp['limit'],offset_param:pageProp['offset']});
    return Furniture;
  }

  async function getFurnitureCount(){
    const supabase = await createClient();
    const { count, error } = await supabase.from('Furniture').select('*', { count: 'exact', head: true });

    return count;
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

  async function generatePaging(page:any){

    const prop:{[key:string]:string}= {};
    prop['url'] = '/catalog/furniture_list';
    prop['page'] = page;
    return <Paging {...prop}></Paging>
  }


  