import React, {useEffect, useState} from 'react';

import './konami.scss';

// classic videogame cheatcode
// up, up, down, down, left, right, left, right, b, a

// tutorial attempt from...
// https://usehooks.com/useKonamiCode/
function useKonamiCode(handler) {
  // state to hold array of recently pressed keys
  const [keys, setKeys ] = useState([]);

  const isKonamiCode = keys.join(' ') === "up, up, down, down, left, right, left, right, B, A";

  useEffect(() => {
    let timeout;

    //when a key is pressed...
    window.document.onkeydown = e => {
      // update array of keys with new Key.
      console.log('!!', keys, getKeyName(e.keyCode))
      setKeys((keys) => [...keys, getKeyName(e.keyCode)]);
      // clear 5sec timeout since key was pressed.
      clearTimeout(timeout);
      // reset keys if 5sec passes so user can try again
      timeout = setTimeout(() => setKeys([]),5000)
    }

  },[keys])

  useEffect(()=> {
    console.table({
      "currentKonamiCodeIs": isKonamiCode,
    })
    if(isKonamiCode) {
      handler();
      setKeys([])
    }
  },[isKonamiCode, handler])

  const getKeyName = (keyCode) => ({
    37: 'left',
    38: 'up',
    39:'right',
    40: 'down',
    65: 'A',
    66: 'B'
  })[keyCode]
}


function Konami() {

  // we call our hook with a function that fires when the code is entered..
  // for now, just a log.

  useKonamiCode(() => {
    console.table({
      goodJob: true,
      awesome: true,
    })
  })
  return (
    <div className="konami">
      <span>konami code</span>
    </div>
  )
}

export default Konami;
