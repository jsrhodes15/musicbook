import { createSelector } from 'reselect';

const getSearchResults = state => state.searchState.results;
const getSearchResultCount = state => state.searchState.resultCount;

export const getSearchResultsForList = createSelector(
  getSearchResults,
  (searchResults) => {
    if (searchResults && searchResults.length) {
      return searchResults.map(result => ({
        trackId: result.trackId,
        album: result.collectionCensoredName,
        trackName: result.trackName,
      }));
    }
    return [];
  }
)