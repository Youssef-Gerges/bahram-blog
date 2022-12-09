import axios, { AxiosStatic } from 'axios';
import { useEffect, useState } from 'react';
import IPost from '../interfaces/IPost';
import api from './api.config';

const useNewPosts = (limit?: number) => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  const request = () => {
    api
      .get(
        `/posts?_sort=date&_order=desc${
          limit && `&_limit=${limit}`
        }&_expand=user&_expand=category`
      )
      .then((res) => setPosts(res.data))
      .catch((err) => setError(err));
    setLoading(false);
  };

  useEffect(() => {
    request();
  }, []);

  return { posts, loading, error };
};

export default useNewPosts;
