import { useState, useEffect } from 'react';

import { search } from '../helpers';
import { Shows } from '../interfaces';

export const useFetch = (lang: string) => {
  const [state, setState] = useState({
    data: {},
    loading: true,
    error: null
  });

  useEffect(() => {
    search(lang)
      .then((data) => {
        setState({
          data: data as Shows,
          loading: false,
          error: null
        });
      })
      .catch((error) => {
        setState({
          data: {},
          loading: false,
          error: error
        });
      });

    return () => {
      setState({
        data: {},
        loading: true,
        error: null
      });
    };
  }, [lang]);

  return state;
};
