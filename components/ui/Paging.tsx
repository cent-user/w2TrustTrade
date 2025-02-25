import Link from 'next/link'
export default function Paging(prop:any) {
    return (
        <div className='relative'>
            <Link href={prop.url+"?page="+prop.page}>{prop.page}</Link>
        </div>

    );
}