import Image from 'next/image'
export default function ProductThumbnail(prop:any) {
    return (

        <div className='relative w-full h-full basis[1]'>
            <div className='relative w-full h-[100px]'>
                <Image src={prop.image_url} 
                    quality={1} 
                    placeholder = 'empty'
                    fill       
                    alt="img_furniture"
                    objectFit={'contain'}
                    className='relative block'
                />
            </div>
            <div className='text-center'>
                {prop.furniture_name}
            </div>
        </div>

    );
}