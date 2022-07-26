import { api } from '../axios';
import { Shows } from '../interfaces';

export const search = async (lang: string = 'es') => {
  try {
    const result = await api.get<Shows>('/tv/popular', {
      params: {
        language: lang
      }
    });

    return result.data as Response;
  } catch (error) {
    return error;
  }
};
