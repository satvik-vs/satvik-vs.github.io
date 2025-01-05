import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { request, gql } from 'graphql-request';

interface Post {
  title: string;
  brief: string;
  url: string;
}

interface FeaturedPostsProps {
  limit?: number;
}

const FeaturedPosts: React.FC<FeaturedPostsProps> = ({ limit = 10 }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const query = gql`
        query FetchPosts {
          publication(host: "anonbash.hashnode.dev") {
            posts(first: ${limit}) {
              edges {
                node {
                  title
                  brief
                  url
                }
              }
            }
          }
        }
      `;

      try {
        const response = await request(
          'https://api.hashnode.com',
          query,
          {
            Authorization: `a2129764-9356-482a-aabf-24351a7f118e`,
          }
        );
        const postsData = response.publication.posts.edges.map((edge: any) => edge.node);
        setPosts(postsData);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [limit]);

  if (loading) {
    return (
      <div className="flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-400"></div>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <motion.a
          key={post.url}
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-900 rounded-xl overflow-hidden hover:border-cyan-500 border border-gray-800 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
            <p className="text-gray-400 mb-4 line-clamp-2">{post.brief}</p>
          </div>
        </motion.a>
      ))}
    </div>
  );
};

export default FeaturedPosts;
