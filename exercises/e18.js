/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  const mostAstro = data.asteroids;
  const discoveriesByYear = {};
  mostAstro.forEach(asteroid => {
    const year = asteroid.discoveryYear;
    discoveriesByYear[year] = (discoveriesByYear[year] || 0) + 1;
  });

  let maxYear = null;
  let maxDiscoveries = 0;

  for (const year in discoveriesByYear) {
    if (discoveriesByYear[year] > maxDiscoveries) {
      maxYear = parseInt(year);
      maxDiscoveries = discoveriesByYear[year];
    }
  }
  return maxYear;
}




// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
