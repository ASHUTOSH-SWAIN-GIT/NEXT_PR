import { cn,formatDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'
import {Author,Startup} from "@/sanity/types"
import {Skeleton} from './ui/skeleton'  


export type StartupTypeCard = Omit<Startup, "author"> & { author?: Author };


const StartUpCard = ({ post }: { post: StartupTypeCard }) => {
    // Fix the typo here: "catagory" → "category"
    const {
        _createdAt,
        views,
        author,
        title,
        category,
        _id,
        image,
        description,
      } = post;
        
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
                        <p className='text-16-medium line-clamp-1'>{author?.name}</p>
                    </Link>
                    
                    <Link href={`/startup/${_id}`}>
                        <h3 className='text-26-semibold line-clamp-1'> {title}</h3>
                    </Link>
                </div>
                <Link href={`/user/${author?._id}`}>
                    <Image src="https://placehold.co/48x48" alt="placeholder" width={48} height={48} className='rounded-full'/>
                </Link>
            </div>
            <Link href={`/startup/${_id}`}>
                <p className='startup-card_desc'>
                    {description}
                </p>
                <img src={image} alt='placeholder' className='startup-card_img'></img>
            </Link>
            <div className='flex-between gap-3 mt-5'>
                {/* Add conditional check for category before calling toLowerCase() */}
                {category && (
                    <Link href={`/query=${category.toLowerCase()}`}>
                        <p className='text-16-medium'>{category}</p>
                    </Link>
                )}
                <Button className='startup-card_btn' asChild>
                    <Link href={`/startup/${_id}`}>
                        Details
                    </Link>
                </Button>
            </div>
        </li>
    )
}

export const StartupCardSkeleton = () => (
    <>
      {[0, 1, 2, 3, 4].map((index: number) => (
        <li key={cn("skeleton", index)}>
          <Skeleton className="startup-card_skeleton" />
        </li>
      ))}
    </>
  );
export default StartUpCard