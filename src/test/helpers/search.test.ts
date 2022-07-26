import { search } from '../../helpers';
import { Shows } from '../../interfaces';

describe('Test helper search', () => {
  test('The search function should return the information correctly.', async () => {
    const result = await search('es');
    const { page, total_pages, total_results, results } = result as Shows;

    expect(page).toBe(1);
    expect(total_results).toBeGreaterThan(0);
    expect(total_pages).toBeGreaterThan(0);
    expect(results?.length).toBeGreaterThan(0);
  });
});
