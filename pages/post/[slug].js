import React from 'react'
import { useRouter } from 'next/router'
import { getPosts, getPostDetails } from '../../services'
import Head from 'next/head'

import {PostDetail, Categories, Loader } from '../../components'

const PostDetails = ({ post }) => {
  const router = useRouter();
  if(router.isFallback){
    return <Loader />
  }
  return (
    <div className='container mx-auto px-10 mb-8'>
        <Head>
            <title>Heaven</title>
            <meta name="description" content=":D" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            <div className='col-span-1 lg:col-span-8'>
                <PostDetail post={post}/>
            </div>
            <div className='col-span-1 lg:col-span-4'>
                <div className='relative lg:sticky top-8'>
                    <Categories />
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostDetails

export async function getStaticProps({ params }){
  const data = await getPostDetails(params.slug);

  return {
    props: {post: data}
  }
}

export async function getStaticPaths(){
  const posts = await getPosts();
  return{
    paths: posts.map(({node: {slug}}) => ({params: {slug}})),
    fallback: true,
  };
}