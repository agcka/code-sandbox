import React, { useEffect, useState } from 'react';
import './fetching-data.scss';
function FetchingData() {
  const [ planetCounter, setPlanetCounter ] = useState(1)
  const [ planetData, setPlanetData ] = useState();
  // think of a useEffect with the second argument of
  // an empty array the same as componentDidMount

  // so the following function doesn't run when the component gets mounted.
  // in functional components we don't have the concept of lifecyle methods anymore.

  async function myFetch() {
    await fetch(`https://swapi.dev/api/planets/${planetCounter}`)
      .then(x => x.json())
      .then(x => {
        setPlanetData(x);
        return x;
      })
      .then(x => console.table(x))
      .catch(x => console.error('!!!!',x))
    console.log('my fetch has completed')
  }




  const incrementPlanet = () => {
    setPlanetCounter(planetCounter + 1)
  }

  useEffect(() => {
    myFetch()
  },[ planetCounter])




  return (
    <div className="data-list">
      <button onClick={incrementPlanet}>click for planet increment</button>
      <h3>{`current planet of ${planetData && planetData.name}`}</h3>
      <span>stats 👇</span>
      <span>{`rotation_period = ${planetData?.rotation_period}`}</span>
      <span>{`orbital_period = ${planetData?.orbital_period}`}</span>
      <span>{`diameter = ${planetData?.diameter}`}</span>
      <span>{`climate = ${planetData?.climate}`}</span>
      <span>{`gravity = ${planetData?.gravity}`}</span>
      <span>{`terrain = ${planetData?.terrain}`}</span>
    </div>
  )
}

export default FetchingData;
