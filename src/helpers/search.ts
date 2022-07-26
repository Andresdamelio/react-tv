import { api } from '../axios';
import { Shows } from '../interfaces';

export const search = async (lang: string = 'es') => {
  try {
    const data = await api.get<Shows>('/tv/popular', {
      params: {
        language: lang
      }
    });

    return data;
  } catch (error) {
    return error;
  }
};
