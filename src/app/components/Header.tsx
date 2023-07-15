import { TbGridDots } from 'react-icons/tb';
import Image from 'next/image';
import profile from '../pradeep_profile..jpg';
import Link from 'next/link';

const Header: React.FunctionComponent = () => {


    return (
        <div className='flex  justify-end pr-4 pt-3 space-x-4 items-center '>
            <Link href="https://mail.google.com" className='text-sm hover:underline cursor-pointer'>Gmail</Link>
            <Link href="https://images.google.com" className='text-sm hover:underline cursor-pointer'>Images</Link>
            <TbGridDots className='text-3xl hover:bg-gray-200 rounded-full cursor-pointer' />
            <Image src={profile} alt='dp-image' width={40} height={40} className='rounded-full object-cover ' />
        </div>
    )
}
export default Header; 