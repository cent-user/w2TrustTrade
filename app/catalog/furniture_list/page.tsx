import { supabase } from '@/utils/supabase/supabase-storage';
import { createClient } from '@/utils/supabase/server';
import ProductThumbnail from "../../../components/ui/ProductThumbnail";
import Paging from "../../../components/ui/Paging";
import Link from 'next/link';


export default async function page({searchParams}:{searchParams: Promise<{[key:string]:string|string[]|undefined}>}) {
  const getParams = (await searchParams);  
  const currCategory = getParams.category ?? '';

  const pageProp: { [key: string]: any } = {};
  pageProp['curr'] = getParams.page ?? 1;
  pageProp['limit'] = 20;
  pageProp['offset'] = (+pageProp['curr'] - +1) * pageProp['limit'] ;
  pageProp['product_category'] = currCategory;
  const FurnitureCount = await getFurnitureCount(currCategory);
  
  const FurnitureCategory = await getFurnitureCategory();


  const product_list = [];
  const product_list_paging = [];
  const product_category = [];
  if(FurnitureCount){
    const Furniture = await getFurniturePaged(pageProp);
    const FurniturePageCount = Math.ceil(FurnitureCount / pageProp['limit']);
    
    for(let cFurniture = 0;cFurniture < Furniture?.length;cFurniture++){
      product_list.push(generateProductContainer(Furniture[cFurniture]));
    }

    for(let cFPC = 0;cFPC < FurniturePageCount;cFPC++){
      product_list_paging.push(generatePaging((cFPC+1),pageProp['curr'],currCategory));
    }
  }

  if(FurnitureCategory){
    FurnitureCategory.unshift({'id':'',name:'all'});
    for(let cFC = 0;cFC < FurnitureCategory?.length;cFC++){
      product_category.push(generateCategory(FurnitureCategory[cFC],currCategory));
    }
  }
  
  return <>
  <div className='relative flex max-w-screen flex-col'>
      <header className="bg-primary4 text-primary1 font-h1 flex justify-center p-[1em]">
          <h3>Our Furniture</h3>
      </header>
      <div className='flex flex-wrap'>
        {product_category}
      </div>
      <div className='relative bg-primary2 basis-[1] grow-[1] flex flex-row flex-wrap justify-evenly gap-y-[1em] p-[1em]'>
          {product_list}
      </div>
      <div className='flex bg-primary1 w-full justify-center flex-wrap'>
          {product_list_paging}
      </div>
  </div>
  </>
}

  async function getFurniturePaged(pageProp:any){
    const supabase = await createClient();
    if(!pageProp['product_category']){
      pageProp['product_category'] = null;
    }
    console.log(pageProp['product_category']);
    const { data: Furniture } = await supabase.rpc('get_furniture_paged',{limit_param:pageProp['limit'],offset_param:pageProp['offset'],product_category:pageProp['product_category']});

    return Furniture;
  }

  async function getFurnitureCount(product_category:any){
    const supabase = await createClient();
    if(!product_category){
      const { count, error } = await supabase.from('Furniture').select('id', { count: 'exact', head: true });
      return count;
    } else {
      const { data:Furniture } = await supabase.from('Furniture').select('id,Tags!inner(id)').eq('Tags.id',product_category);
      return Furniture?.length??0;
    }
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
    <div className='min-w-[100px] sm:min-w-[150px]  min-h-[120px] w-[10vw] basis-[1]'>
      <Link href={"/catalog/furniture_list/"+Furniture.id}>
        <ProductThumbnail {...prop} ></ProductThumbnail>
      </Link>
    </div>
    )
  }

  async function generatePaging(page:any,currpage:any,category:any){

    const prop:{[key:string]:string}= {};
    prop['url'] = '/catalog/furniture_list';
    prop['page'] = page;
    prop['curr'] = currpage;
    prop['additional'] = "&category="+category;
    return (
        <Paging {...prop} className=""></Paging>
    );
  }

  async function generateCategory(FurnitureCategory:any,currCategory:any){
    return (
      <div className='grow-[1] justify-center text-center font-m1 !text-sm'>
        <Link href={"?category="+FurnitureCategory['id']}>
          <div className={`p-[1em] ${FurnitureCategory['id'] == currCategory ? 'bg-primary2':'bg-primary1'}`}>
            {FurnitureCategory.name.replaceAll('_',' ')}
          </div>
        </Link>
      </div>
    );
  }

  async function getFurnitureCategory(){
    const supabase = await createClient();
    const { data } = await supabase.from('Tags')
        .select()
        .eq('category', 'product_category')
        ;
    return data;
  }