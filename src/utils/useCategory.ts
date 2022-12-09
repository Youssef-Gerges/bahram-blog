import { useEffect, useState } from 'react';
import ICategory from '../interfaces/ICategory';
import api from './api.config';

const useCategories = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const getAllCategories = () => {
    api
      .get(`/categories`)
      .then((res) => setCategories(res.data))
      .catch((err) => setError(err));

    setLoading(false);
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return { categories, loading, error };
};

export default useCategories;
