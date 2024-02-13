import Link from 'next/link'
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-[100vh] gap-5">
            <div className='flex items-center justify-center space-x-2'>
                <h1 className="font-semibold text-primary">404</h1>
                <p className="font-light">Page not found.</p>
            </div>
            <Link href="/" className='flex items-center justify-center space-x-2 text-gray-800 hover:text-primary duration-200'><span>Return Home</span><ArrowUturnLeftIcon className='w-4' /></Link>
        </div>
    )
}