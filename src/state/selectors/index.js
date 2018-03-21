import { createSelector } from 'reselect';

const getSearchResults = state => state.searchState.results.results;
const getSearchResultCount = state => state.searchState.results.resultCount