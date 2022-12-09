import { useEffect, useState } from 'react';
import IPost from '../interfaces/IPost';
import api from './api.config';

const usePopularPosts = (limit?: number, page?: number) => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  const request = () => {
    api
      .get(
        `/posts?_sort=views&_order=desc${page && `&_page=${page}`}${
          limit && `&_limit=${limit}`
        }&_expand=user&_expand=category`
      )
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => setError(err));
    setLoading(false);
  };

  useEffect(() => {
    request();
  }, []);

  return { posts, loading, error };
};

export default usePopularPosts;
