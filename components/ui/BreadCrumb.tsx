'use client'

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

// Type definitions for createBreadCrumb props
interface CreateBreadCrumbProps {
    index: number;
    path: string[];
    pathName: string;
}

export default function BreadCrumb() {
    const paths = usePathname();
    const pathNames = paths.split('/').filter(path => path); // Split and filter empty paths
    const currPath: string[] = [];
    const breadcrumbElements = pathNames.map((pathName, index) => {
        currPath.push(pathName); // Build current path
        return createBreadCrumb({
            index,
            path: currPath,
            pathName,
        });
    });

    return (
        <nav className='ml-[1em] mb-[1em] pl-[.5em] pr-[.5em] relative w-fit flex bg-primary4 text-primary1 rounded-lg font-m1 !text-sm'>
            {breadcrumbElements}
        </nav>
    );
}

// Create a breadcrumb element
function createBreadCrumb({ index, path, pathName }: CreateBreadCrumbProps) {
    return (
        <div key={index} className=''>
           <Link href={`/${path.join('/')}`} className=''>&nbsp;/&nbsp;{pathName.replaceAll('_',' ')}</Link>
        </div>
    );
}