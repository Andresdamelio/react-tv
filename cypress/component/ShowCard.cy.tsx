import show from '../fixtures/show.json';
import ShowCard from '../../src/components/ShowCard';

describe('Test component <ShowCard />', () => {
  it('The component must be displayed correctly', () => {
    cy.mount(<ShowCard show={show} />);
    cy.get('[data-testid="title"').should('have.text', 'Stranger Things');
    cy.get('[data-testid="image"]').should(
      'have.attr',
      'src',
      'https://image.tmdb.org/t/p/w300/g3nzhHBDTrJ7RWhzozFTYFjvRbd.jpg'
    );
  });
});
