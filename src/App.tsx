import { useEffect, useState } from 'react'
import { letters } from './helpers/letters'
import {getword} from './helpers/getword'
import './App.css'
import { HangImage } from './components/HangImage'

function App()
{
  const [word, setword] = useState(getword());
  const [hiddenword, sethiddenword] = useState('_ '.repeat(word.length));
  const [attempts, setAttemts ] = useState(0);
  const [lose, setlose] = useState(false);
  const [win, setwin] = useState(false);

  useEffect( () => {
    if (attempts >= 9)
      setlose(true);
  }, [attempts])

  useEffect(() => {
    const currentHiddenword = hiddenword.split(' ').join('');
    if (currentHiddenword === word)
      setwin(true);
  }, [hiddenword])

  const newgame = () =>{

    setword(getword());
    sethiddenword('_ '.repeat(word.length));
    setAttemts(0);
    setlose(false);
    setwin(false);

  }
  
  const checkletter = ( letters:string) => {
    if (lose){ return ;}
    if (win){ return ;}

    if (!word.includes(letters)){
      setAttemts(Math.min(attempts + 1, 9));
      return ;
    }
    const hiddenwordArray = hiddenword.split(' ');
    for(let i = 0; i < word.length; i++)
    {
      if (word[i] === letters)
        hiddenwordArray[i] = letters;
    }
    sethiddenword(hiddenwordArray.join(' '));
  }

  return (
    <div className='App'>
      {/* imagenes */}
      {<HangImage imageNumber={attempts} />}
      
      {/* palabra oculta*/}
      <h3>{hiddenword}</h3>

      {/* contador de intentos*/}
      <h3>Intentos: {attempts}</h3>

      {/* msn lose */}
      {
        (lose) ?
        <h2>You lose Word: {word}</h2>: ''
      }

      {/* msn win */}
      {
        (win) ?
        <h2>!!!You Win!!!</h2>: ''
      }

      {/* Botones de Letras*/}
      {
        letters.map( (letters) => (<button onClick={() => checkletter(letters)}
        key={letters}>{letters} </button>))
      }

      <br/><br/>
      <button onClick={newgame}>RETRY</button>
    </div>
  )
}

export default App