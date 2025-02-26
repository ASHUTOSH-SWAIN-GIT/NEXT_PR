import { formatDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'

const StartUpCard = ({ post }: { post: StartupTypeCard }) => {
    const {_createdAt,views,author:{_id:authorId,name},title,catagory,_id,image,description} = post

    return (
        <li className='startup-card group'>
            <div className='felx-between'>
                <p className='startup_card_date'>
                    {formatDate(post._createdAt)}
                </p>
            </div>
            name
            <div className='flex gap-1.5'>
                <EyeIcon className='size-6 text-primary'/>
                <span>{post.views}</span>
            </div>

            <div className='flex-between mt-5 gap-5'>
                <div className='flex-1'>
                    <Link href={`/user/${post.author?._id}`}>
                        <p className='text-16-medium line-clamp-1'>{post.author?.name}</p>
                    </Link>

                    <Link href={`/startup/${_id}`}>
                        <h3 className='text-26-semibold line-clamp-1'> {title}</h3>
                    </Link>
                </div>
                <Link href={`/user/${authorId}`}>
                    <Image src="https://placehold.co/48x48" alt="palceholder" width={48} height={48} className='rounded-full'/>
                </Link>
            </div>
            <Link href={`/startup/${_id}`}>
                <p className='startup-card_desc'>
                    {description}
                </p>

                <img src={image} alt='placeholder' className='startup-card_img'></img>
            </Link>
            <div  className='flex-between gap-3  mt-5' >
                <Link href={`/query=${catagory.toLowerCase()}`}>
                    <p className='text-16-medium'> { catagory }</p>
                </Link>
                <Button className='startup-card_btn'asChild>
                    <Link href={`/startup/${_id}`}>
                    Details
                    </Link>
                </Button>
            </div>
        </li>
    )
}

export default StartUpCard
