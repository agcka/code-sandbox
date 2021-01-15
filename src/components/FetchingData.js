import React, { useEffect } from 'react';

function FetchingData() {
  // think of a useEffect with the second argument of
  // an empty array the same as componentDidMount

  useEffect(() => {
    fetch('https://swapi.dev/api/planets/5')
      .then(x => x.json())
      .then(x => console.table(x))
      .catch(x => console.table(x))
  },[])
  return <span>fetch</span>
}

export default FetchingData;
