import { nanoid } from 'nanoid';

import Loader from './Loader';
import ShowCard from '../ShowCard';
import { useFetch } from '../../hooks';
import { ListContainer } from './style';
import { Params, Response } from '../../interfaces';

const ShowList = ({ lang }: Params) => {
  const { data, loading, error }: Response = useFetch(lang);

  if (loading) return <Loader />;

  if (error) return <p>Ha ocurrido un error</p>;

  return (
    <ListContainer>
      {data.results?.map((show) => (
        <ShowCard key={nanoid()} show={show} />
      ))}
    </ListContainer>
  );
};

export default ShowList;
