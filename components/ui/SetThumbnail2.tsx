import Image from 'next/image'
export default function SetThumbnail2(prop:any) {
    return (

        <div className='relative w-full h-full flex flex-col basis[1]'>
            <div className='relative grow-[1] bg-primary5'>
                <Image src={prop.image_url} 
                    quality={100} 
                    placeholder = 'empty'
                    fill       
                    alt="img_furniture"
                    objectFit={'cover'}
                    className='relative block'
                />
            </div>
            <div className='text-center bg-primary1 rounded-b-lg basis-[1]'>
                {prop.furniture_name}
            </div>
        </div>

    );
}