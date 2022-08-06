import Image from 'next/image'
import React from 'react'
import { ChevronDownIcon, HomeIcon, SearchIcon } from '@heroicons/react/solid';
import { BeakerIcon } from '@heroicons/react/outline';

const Header = () => {
    return (
        <div className="flex bg-white px-4 py-2 shadow-sm sticky top-0 z-50 ">
            <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
                <Image objectFit="contain" src="https://links.papareact.com/fqy" layout='fill' />
            </div>
            <div className='mx-7 flex items-center xl:min-w-[300px]'>
                <HomeIcon className='h-5 w-5' />
                <p className='flex-1 ml-2 hidden lg:inline'>Home</p>
                <ChevronDownIcon className='h-5 w-5' />
            </div>

            {/* Search Box */}
            <form className="flex flex-1 items-center space-x-2 border border-gray-200 rounded-sm">
                <SearchIcon className='h-6 w-6 text-gray-400' />
                <input type="text" placeholder="Search Reddit" />
                <button type="submit" hidden />
            </form>
        </div>
    )
}

export default Header