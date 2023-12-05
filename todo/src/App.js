import './App.css';
import { React, useState } from 'react'


function App() {

  const [todos, setTodos] = useState('')
  const [todos2, setTodos2] = useState([])
  const [isChecked, setIsChecked] = useState([]);
  console.log(isChecked , 'val')

  console.log(todos, "todo")
  console.log(todos2, "todos")

  function handleChange(event) {
    setTodos([event.target.name] = event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    setTodos2([...todos2, todos])
    setTodos('')
    setIsChecked([...isChecked , false])
  }

  function Delete(i) {
    console.log(i, "inex")
    todos2.splice(i, 1)
    // console.log(todos2, 'deleted')
    setTodos2([...todos2])
    alert("todos Deleted")
  }

  function check(i) {
    (isChecked[i]) == false ?  setIsChecked([...isChecked , isChecked[i] = true]) : setIsChecked([...isChecked , isChecked[i] = false]) 
    // console.log(event.target.value, 'event.target.value')
  }

  // console.log(check)

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>Enter Todo</label><br />
        <input type='text' onChange={handleChange} value={todos} /><br /><br />
        <input type='submit' value='Submit' />
      </form>

      <div className='display'>
        {todos2?.map((pro, i) => (
          <>
            <div key={i} className='singleDiv'>
              <h1>{pro} <input className='checkbox' type='checkbox' checked={isChecked[i]} onClick={() => check(i)}/> </h1>
              {isChecked[i] == true && <button onClick={() => Delete()}>Delete</button>}
            </div>
          </>
        ))}

      </div>
    </div>
  );
}

export default App;
