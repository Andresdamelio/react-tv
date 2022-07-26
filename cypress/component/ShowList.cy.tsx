import ShowList from '../../src/components/ShowList';

describe('Test component <ShowList />', () => {
  it('The component must be displayed correctly', () => {
    cy.viewport(1280, 700);
    cy.mount(<ShowList lang='es' />);
    cy.get('[data-testid="list-tv"]').should('exist');
    cy.get('[data-testid="list-tv"]').children().should('have.length', 20);
  });
});
