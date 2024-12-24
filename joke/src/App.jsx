import Joke from "./Joke"
import jokesData from "./jokesData"

export default function App(){
      const jokeElement = jokesData.map((joke) =>{
        return <Joke setup={joke.setup} punchline={joke.punchline}/>
      }) 
  return(
    <>
      {jokeElement}
    </>
    
  )
}