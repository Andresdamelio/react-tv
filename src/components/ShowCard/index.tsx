import { Show } from '../../interfaces';

interface Props {
  show: Show;
}

const ShowCard = ({ show }: Props) => {
  return <div>{show.name}</div>;
};

export default ShowCard;
