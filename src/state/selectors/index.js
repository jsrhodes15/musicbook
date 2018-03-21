import { createSelector } from 'reselect';

const getSearchResults = state => state.searchState.results;

export const getSearchResultsForList = createSelector(
  getSearchResults,
  (searchResults) => {
    if (searchResults && searchResults.length) {
      return searchResults.map(result => ({
        trackId: result.trackId,
        time: result.trackTimeMillis,
        album: result.collectionCensoredName,
        trackName: result.trackName,
      }));
    }
    return [];
  }
)