import Head from 'next/head'
import Image from 'next/image'
import { Categories, PostCard } from '../components'
import { getPosts } from '../services'

export default function Home({posts}) {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <Head>
        <title>Heaven</title>
        <meta name="description" content=":D" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
            {posts.map((post, index) => <PostCard post={post.node} key={post.title}/> )}
        </div>  
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <Categories />
          </div>
        </div>
      </div>

    </div>
  )
}


export async function getServerSideProps(){
  var posts = await getPosts() || [];
  posts = posts.reverse();

  return {
    props: {posts}
  }
}