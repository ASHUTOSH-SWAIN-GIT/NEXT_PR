import { formatDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import React from 'react'
import Link from 'next/link'

const StartUpCard = ({ post }: { post: StartupTypeCard }) => {
    const {_createdAt,views,author:{_id:authorId,name},title,catagory,_id,image} = post

    return (
        <li className='startup-card group'>
            <div className='felx-between'>
                <p className='startup_card_date'>
                    {formatDate(post._createdAt)}
                </p>
            </div>

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
                        <h3 className='text-26-semibold line-clamp-1'> 1{title}</h3>
                    </Link>
                </div>
            </div>
        </li>
    )
}

export default StartUpCard
