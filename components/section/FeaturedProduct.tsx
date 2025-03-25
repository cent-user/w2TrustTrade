import Link from "next/link";
import Image from 'next/image'
export default async function FeaturedProduct(){
    const featuredSets = [
        {
          id: 4,
          image_url: "https://unijywgetgmmouifnrhj.supabase.co/storage/v1/object/public/w2trusttrade-furniture/photoset/set_4.jpg",
          furniture_name: "Tea Room"
        },
        {
          id: 2,
          image_url: "https://unijywgetgmmouifnrhj.supabase.co/storage/v1/object/public/w2trusttrade-furniture/photoset/set_2.jpg",
          furniture_name: "Cottage Study Room"
        },
        // More products here
      ];
      
      const individualFurniture = [
        {
          id: 42,
          image_url: "https://unijywgetgmmouifnrhj.supabase.co/storage/v1/object/public/w2trusttrade-furniture/bedroom/Chesapeake_Bachelor_Chest.png",
          furniture_name: "Chesapeake Bachelor Chest"
        },
        {
          id: 174,
          image_url: "https://unijywgetgmmouifnrhj.supabase.co/storage/v1/object/public/w2trusttrade-furniture/occasional_table/Soho_Side_Table.png",
          furniture_name: "Soho Side Table"
        },{
            id: 122,
            image_url: " https://unijywgetgmmouifnrhj.supabase.co/storage/v1/object/public/w2trusttrade-furniture/dining_room/Arka_Chair_And_Ottoman.png",
            furniture_name: "Arka Chair And Ottoman"
          },{
            id: 71,
            image_url: " https://unijywgetgmmouifnrhj.supabase.co/storage/v1/object/public/w2trusttrade-furniture/bedroom/Chesapeake_Armoire.png",
            furniture_name: "Chesapeake Armoire"
          },
       
        // More products here
      ];
      
    return(
        <>
           <section id="featuredProducts" className='w-full bg-primary1 text-primary5 py-[3em] pb-[5em]'>
                <div className='text-center mb-[2em]'>
                    <h3 className='font-h1 pb-[1em]'>Featured Products</h3>
                    <p>Explore our curated selection of premium, custom-made furniture</p>
                </div>

                {/* Featured Sets Section */}
                <div className='flex flex-wrap justify-center gap-[1.5em]'>
                    {featuredSets.map((product) => (
                        <div className='min-w-[300px] sm:min-w-[350px] min-h-[50vh] w-[30%] sm:w-[30%] md:w-[30%] lg:w-[30%]' key={product.id}>
                            <Link href={"/catalog/furniture_set_list/" + product.id}>
                                <div className='relative w-full h-full'>
                                    <div className='relative grow-[1] h-[80%] '>
                                        <Image
                                            src={product.image_url}
                                            quality={100}
                                            placeholder="empty"
                                            fill
                                            alt={product.furniture_name}
                                            objectFit="cover"
                                            className='relative block rounded-t-lg'
                                        />
                                    </div>
                                    <div className='relative text-center rounded-b-lg bg-primary5 text-primary1 py-[1em] font-b1'>
                                        <p className="font-medium block">{product.furniture_name}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
            

                    {/* Featured Individual Furniture Section */}
                    <div className='flex flex-wrap justify-center sm:gap-[1.5em] gap-[3.5em] mt-[3em]'>
                        {individualFurniture.map((product) => (
                            <div 
                                className='min-w-[150px] sm:min-w-[200px] min-h-[25vh] w-[10%] sm:w-[10%] md:w-[10%] lg:w-[10%]' 
                                key={product.id}  // Moving the key here for each individual item
                            >
                                <Link href={"/catalog/furniture_list/" + product.id}>
                                    <div className='relative w-full h-full'>
                                        <div className='relative grow-[1] h-[80%] rounded-t-lg'>
                                            <Image
                                                src={product.image_url}
                                                quality={100}
                                                placeholder="empty"
                                                fill
                                                alt={product.furniture_name}
                                                objectFit={'contain'}
                                                className='relative rounded-t-lg block drop-shadow-[1px_1px_rgba(100,100,100,1)]'
                                            />
                                        </div>
                                        <div className='relative text-center rounded-b-lg bg-primary5 text-primary1 py-[1em] font-b1 block'>
                                            <p className="font-medium block">{product.furniture_name}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                    
                </div>

               
            </section>
        </>
    );
}