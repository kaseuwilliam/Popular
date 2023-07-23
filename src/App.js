import React, {useReducer} from 'react'
import Person from './components/Person'

function reducer(currentState, action){

  // console.log(action.type)
  // console.log(action.payload)

  if(action.type === 'edit-cartoon'){

    // let filtered = currentState.filter( cartoon => cartoon.id !== action.payload.id)

  
    let filtered = currentState.map( cartoon => 
      {
        if (cartoon.id === action.payload.id ){
        
            let newCartoon = {
            name:'Pepe Le Pew',
            image: 'images/pepe.png',
            profession:'Chases a cat',
            quote: "I am in the mood for love", birthday: 1920,
            dogName: 'Lulu', 
            id: 4
          }
          return newCartoon
        
        }

        return cartoon
        
      
      })

    return [...filtered]

  } else if (action.type === 'delete-cartoon'){

    let filtered = currentState.filter( cartoon => cartoon.id !== action.payload.id)

    return filtered;


  } else{

    
    return currentState
  }


}

const App = () => {

  let [superstars, dispatch] = useReducer( reducer,
    [{
    name:'Barbie',
    image: 'images/barbie.jpg',
    profession:'model',
    quote: "Come on Barbie let's go party", birthday: 1959,
    dogName: 'Tiffany', 
    id: 1
  },
  {
    name:'Pocahontas',
    image: 'images/poch.png',
    profession:'Future Leader',
    quote: "Love the world", birthday: 1659,
    dogName: 'Scouts',
    id: 2
  },

  {
    name:'Fred Flintstone',
    image: 'images/fred.jpg',
    profession:'Stone maker',
    quote: "yabba dabba doo", birthday: 1799,
    dogName: 'Dino',
    id: 3
  },
])

  return (
    <>

    {superstars.map(person =>{

      return <Person name={person.name} image={person.image} profession={person.profession} quote={person.quote} birthday={person.birthday} dogName={person.dogName} id={person.id} dispatch={dispatch}/>
    })}
    
    
    
    </>
  )
}

export default App