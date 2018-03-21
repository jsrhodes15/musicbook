const easterEggResults = [
  {
    artistName: "Jordan Rhodes",
    trackId: 5879284,
    trackTimeMillis: 60000,
    collectionCensoredName: "I want to be with you",
    trackName: "Don't give up on me now",
  },
  {
    artistName: "Jordan Rhodes",
    trackId: 59995830,
    trackTimeMillis: 120000,
    collectionCensoredName: "I want to be with you",
    trackName: "I'm not a designer (Why I used Bootstrap)",
  },
  {
    artistName: "Jordan Rhodes",
    trackId: 4829230,
    trackTimeMillis: 180000,
    collectionCensoredName: "I want to be with you",
    trackName: "I hope it's not to late for us.",
  },
  {
    artistName: "Jordan Rhodes",
    trackId: 4677230,
    trackTimeMillis: 120000,
    collectionCensoredName: "A better place",
    trackName: "Take me with you",
  },
  {
    artistName: "Jordan Rhodes",
    trackId: 4829230,
    trackTimeMillis: 120000,
    collectionCensoredName: "Where have you been",
    trackName: "Can I see you soon?",
  },
]

export function createEasterEgg() {
  return (store) => next => action => {
    if (action.payload &&
        action.payload.meta &&
        action.payload.meta.cleanedValue === 'jordan rhodes') {
    
      const subAction = {
        type: action.type,
        payload: {
          results: easterEggResults,
          resultCount: easterEggResults.length,
          searchValue: action.searchValue,
        }
      }      
      
      return store.dispatch(subAction);
    }

    return next(action);    
  }
}

