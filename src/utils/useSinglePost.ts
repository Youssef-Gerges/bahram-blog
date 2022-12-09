import { useEffect, useState } from 'react';
import IPost from '../interfaces/IPost';
import api from './api.config';

const useSinglePost = (id: number) => {
  const [post, setPost] = useState<IPost>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  const request = () => {
    api
      .get(`/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch((err) => setError(err));
    setLoading(false);
  };

  useEffect(() => {
    request();
  }, []);

  return { post, loading, error };
};

export default useSinglePost;
