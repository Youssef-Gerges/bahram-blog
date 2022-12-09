import { useEffect, useState } from 'react';
import IReadingList from '../interfaces/IReadingList';
import api from './api.config';

const useReadingList = () => {
  const [readinglists, setReadingLists] = useState<IReadingList[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const getAllReadingLists = () => {
    api
      .get(`/reading-lists`)
      .then((res) => setReadingLists(res.data))
      .catch((err) => setError(err));
    setLoading(false);
  };

  useEffect(() => {
    getAllReadingLists();
  }, []);

  return { readinglists, error, loading };
};

export default useReadingList;
