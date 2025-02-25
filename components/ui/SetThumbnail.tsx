import Image from 'next/image'
export default function SetThumbnail(prop:any) {
    return (

        <div className='relative w-full h-full flex flex-col basis[1]'>
            <div className='relative grow-[1]'>
                <Image src={prop.image_url} 
                    quality={1} 
                    placeholder = 'empty'
                    fill       
                    alt="img_furniture"
                    objectFit={'cover'}
                    className='relative block'
                />
            </div>
            <div className='text-center'>
                {prop.furniture_name}
            </div>
        </div>

    );
}