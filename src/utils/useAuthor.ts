import { useEffect, useState } from 'react';
import IAuthor from '../interfaces/IAuthor';
import api from './api.config';

type authorHookType = { id: number }

const useAuthor = (props: authorHookType): { author?: IAuthor } => {

    const [author, setAuthor] = useState<IAuthor>();
    const getAuthorById = async () => {

        const { data } = await api.get(`/users/${props.id}`);
        setAuthor(JSON.parse(JSON.stringify(data)));
    }

    useEffect(() => {
        getAuthorById();
    }, []);

    return { author: author };
}

export default useAuthor;