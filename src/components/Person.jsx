import React from 'react'
import Dog from './Dog'
import '../styles/Person.css'

const Person = ({name, image, profession, quote, birthday, dogName, id, dispatch}) => {

  function handleEdit(e){
    console.log(`Edit button works: ${id}`)
    dispatch({type:'edit-cartoon', payload:{name:name, id:id, quote:quote}})
  }

  function handleDelete(e){
    console.log(`Delete button works: ${id}`)
    dispatch({type:'delete-cartoon', payload:{name:name, id:id, quote:quote}})
  }

  return (
    <>
    
    <h2> Name: {name}</h2>
    <img src={image} alt={name} />
    <h3>Profession: {profession}</h3>
    <p>Quote: {quote}</p>
    <p className='birthday'>Birthday: {birthday}</p>
    <Dog dogName={dogName} ownerName={name}/>
    <br />
    <button onClick={handleEdit}>Edit</button>
    <button onClick={handleDelete}>Delete</button>
    </>
  )
}

export default Person