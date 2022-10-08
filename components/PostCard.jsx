import React from 'react'
import moment from 'moment';
import Link from 'next/link';

const PostCard = ({post}) => {
    return (
        <div className='bg-white border border-hmint border-4 shadow-lg rounded-lg p-0 lg:p-8 lg:ml-12 pb-4 mb-8 mx-3'>
          <h1 className='transition duration-700 mx-4 mt-4 text-center mb-8 cursor-pointer text-hgray hover:text-hblush text-4xl font-semibold'>
            <Link href={`/post/${post.slug}`}>
              {post.title}
            </Link>
          </h1>
          <div className='block lg:flex text-hgray text-center items-center justify-center mb-4 w-full'>
            <div className='font-medium text-hgray'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-hblush" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>
                    {moment(post.date).format('MMM DD, YYYY')}
                </span>
            </div>
          </div>
          <div className='text-center'>
            <Link href={`/post/${post.slug}`}>
              <span className='transition duration-500 transform hover:-translate-y-1 inline-block bg-hmint text-lg font-medium rounded-full text-hgray px-8 py-3 cursor-pointer'>
                Continue Reading
              </span>
            </Link>
          </div>
    
        </div>
      )
}

export default PostCard