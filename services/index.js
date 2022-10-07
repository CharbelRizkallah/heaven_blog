import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
        postsConnection {
            edges {
              node {
                date
                createdAt
                slug
                title
                categories {
                  name
                  slug
                }
              }
            }
          }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};

export const getCategories = async () => {
  const query = gql`
    query GetGategories {
        categories {
            name
            slug
          }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.categories;
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug : String!) {
        post(where: {slug: $slug}) {
            title
            createdAt
            slug
            content {
              raw
            }
            categories {
              name
              slug
            }
            date
          }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.post;
};

export const getCategoryPost = async (slug) => {
  const query = gql`
    query GetCategoryPost($slug: String!) {
        postsConnection(where: {categories_some: {slug: $slug}}) {
            edges {
              node {
                date
                createdAt
                slug
                title
                categories {
                  name
                  slug
                }
              }
            }
          }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.postsConnection.edges;
};
