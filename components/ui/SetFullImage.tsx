import Image from 'next/image'
export default function SetFullImage(prop:any) {
    return (

        <div className='relative w-full h-full flex flex-col basis[1]'>
            <div className='relative grow-[1] bg-primary5'>
                <Image src={prop.image_url} 
                    quality={100} 
                    placeholder = 'empty'
                    fill       
                    alt="img_furniture"
                    objectFit={'contain'}
                    className='relative block'
                />
            </div>
        </div>

    );
}