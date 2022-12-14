import React from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head'
import { getCategories, getCategoryPost } from '../../services';
import { PostCard, Categories, Loader } from '../../components';

const CategoryPost = ({ posts }) => {
    useEffect(() => {
        const slug = window.location.pathname.replace('/category/','');
        fetchData(slug);
    }, []);
    
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }


  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Heaven</title>
        <meta name="description" content=":D" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryPost;

const fetchData = async (slug) => {
    var posts = await getCategoryPost(slug);
    posts = posts.reverse();

  return {
    props: { posts },
  };
}

// Fetch data at build time
export async function getStaticProps({ params }) {
  var posts = await getCategoryPost(params.slug);
  posts = posts.reverse();

  return {
    props: { posts }, revalidate: 1,
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}