import Link from 'next/link'
export default function Paging(prop:any) {
    const additional = prop?.additional ?? '';
    return (
        <Link href={prop.url+"?page="+prop.page+additional}>
            <div className={`relative ${prop.page == prop.curr ? `bg-primary5 text-primary1`:`bg-primary1 text-primary5`}  font-m1 p-[1em]`}>
                {prop.page}
            </div>
        </Link>

    );
}