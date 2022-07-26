import { Card } from './style';
import { Show } from '../../interfaces';
import { imagePath } from '../../helpers';

type Props = {
  show: Show;
};

const ShowCard = ({ show }: Props) => {
  return (
    <Card data-testid='card'>
      <Card.Body>
        <Card.ImageContainer>
          <Card.Image
            src={`${imagePath}${show.poster_path}`}
            alt={show.original_name}
            data-testid='image'
          />
        </Card.ImageContainer>
        <Card.Title data-testid='title'>{show.name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default ShowCard;
