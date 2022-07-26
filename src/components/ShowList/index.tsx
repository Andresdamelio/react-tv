import { nanoid } from 'nanoid';

import ShowCard from '../ShowCard';
import { useFetch } from '../../hooks';
import { Params, Response } from '../../interfaces';

const ShowList = ({ lang }: Params) => {
  const { data, loading, error }: Response = useFetch(lang);

  if (loading) return <p>Cargando data...</p>;

  if (error) return <p>Ha ocurrido un error</p>;

  return (
    <div>
      {data.results?.map((show) => (
        <ShowCard key={nanoid()} show={show} />
      ))}
    </div>
  );
};

export default ShowList;
