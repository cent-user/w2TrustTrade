import Image from 'next/image'
export default function ProductThumbnail(prop:any) {
    return (

        <div className='relative w-full h-full basis[1] flex flex-col '>
            <div className='relative w-full h-[100px] border-[1px] bg-primary5 rounded-t-lg'>
                <Image src={prop.image_url} 
                    quality={1} 
                    placeholder = 'empty'
                    fill       
                    alt="img_furniture"
                    objectFit={'contain'}
                    className='relative block drop-shadow-[1px_1px_rgba(100,100,100,1)]'
                />
            </div>
            <div className='text-center bg-primary1 rounded-b-lg grow-[1] font-m1 !text-sm'>
                {prop.furniture_name}
            </div>
        </div>

    );
}