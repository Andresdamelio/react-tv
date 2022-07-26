import { nanoid } from 'nanoid';

import Loader from './Loader';
import ShowCard from '../ShowCard';
import { Container } from './style';
import { useFetch } from '../../hooks';
import { Params, Response } from '../../interfaces';

const ShowList = ({ lang }: Params) => {
  const { data, loading, error }: Response = useFetch(lang);

  if (loading) return <Loader />;

  if (error) return <p>Ha ocurrido un error</p>;

  return (
    <Container data-testid='list-tv'>
      {data.results?.map((show) => (
        <ShowCard key={nanoid()} show={show} />
      ))}
    </Container>
  );
};

export default ShowList;
