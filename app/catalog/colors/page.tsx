import { supabase } from '@/utils/supabase/supabase-storage';
import { createClient } from '@/utils/supabase/server';
import ProductThumbnail from "../../../components/ui/ProductThumbnail";
import Paging from "../../../components/ui/Paging";
import Link from 'next/link';


export default async function page({searchParams}:{searchParams: Promise<{[key:string]:string|string[]|undefined}>}) {
  const getParams = (await searchParams);  

  const pageProp: { [key: string]: any } = {};
  pageProp['curr'] = getParams.page ?? 1;
  pageProp['limit'] = 20;
  pageProp['offset'] = (+pageProp['curr'] - +1) * pageProp['limit'] ;

  const ColorsCount = await getColorsCount();


  const colors_list = [];
  const colors_list_paging = [];

  if(ColorsCount){
    const Colors = await getColorsPaged(pageProp);
    const ColorsPageCount = Math.ceil(ColorsCount / pageProp['limit']);
    console.log(Colors);
    for(let cColors = 0;cColors < Colors?.length;cColors++){
      colors_list.push(generateProductContainer(Colors[cColors]));
    }

    for(let cCPC = 0;cCPC < ColorsPageCount;cCPC++){
      colors_list_paging.push(generatePaging((cCPC+1),pageProp['curr']));
    }
  }

  return <>
  <div className='relative flex max-w-screen flex-col'>
      <header className="bg-primary4 text-primary1 font-h1 flex justify-center p-[1em]">
          <h3>Avaiable Colors</h3>
      </header>
      <div className='relative bg-primary2 basis-[1] grow-[1] flex flex-row flex-wrap justify-evenly gap-y-[1em] p-[1em]'>
          {colors_list}
      </div>
      <div className='flex bg-primary1 w-full justify-center flex-wrap'>
          {colors_list_paging}
      </div>
  </div>
  </>
}

  async function getColorsPaged(pageProp:any){
    const supabase = await createClient();
    const { data: Colors } = await supabase.rpc('get_colors_paged',{limit_param:pageProp['limit'],offset_param:pageProp['offset']});

    return Colors;
  }

  async function getColorsCount(){
    const supabase = await createClient();
    const { count, error } = await supabase.from('Colors').select('id', { count: 'exact', head: true });
    return count;
    
  }

  async function getImages(img_path:string){
    const { data } = supabase.storage.from('w2trusttrade-furniture').getPublicUrl(img_path)
    return data;
  }

  async function generateProductContainer(Colors:any){
    const obj_image = await getImages(Colors.photo_url)

    const prop:{[key:string]:string}= {};
    prop['id']         = Colors.id;
    prop['image_url']  = obj_image.publicUrl;
    prop['furniture_name']  = Colors.name;
    
    return (
    <div className='min-w-[100px] sm:min-w-[150px]  min-h-[120px] w-[10vw] basis-[1]'>
      <Link href={"/catalog/colors/"+Colors.id}>
        <ProductThumbnail {...prop} ></ProductThumbnail>
      </Link>
    </div>
    )
  }

  async function generatePaging(page:any,currpage:any){

    const prop:{[key:string]:string}= {};
    prop['url'] = '/catalog/colors';
    prop['page'] = page;
    prop['curr'] = currpage;
    return (
        <Paging {...prop} className=""></Paging>
    );
  }
