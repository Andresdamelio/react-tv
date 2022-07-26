import { Show } from '../../interfaces';
import { Body, Container, Image, ImageContainer, Title } from './style';

type Props = {
  show: Show;
};

const imagePath = 'https://image.tmdb.org/t/p/w300';

const ShowCard = ({ show }: Props) => {
  return (
    <Container data-testid='card'>
      <Body>
        <ImageContainer>
          <Image
            src={`${imagePath}${show.poster_path}`}
            alt={show.original_name}
            data-testid='image'
          />
        </ImageContainer>
        <Title data-testid='title'>{show.name}</Title>
      </Body>
    </Container>
  );
};

export default ShowCard;
