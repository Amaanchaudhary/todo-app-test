import './App.css';
import { React, useEffect, useState } from 'react'


function App() {

  const [todos, setTodos] = useState('')
  const [todos2, setTodos2] = useState([])
  const [isChecked, setIsChecked] = useState([]);

  console.log(todos, "todo typing")
  console.log(isChecked, 'checked?')
  console.log(todos2, "todos")

  function handleChange(event) {
    setTodos([event.target.name] = event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    setTodos2([...todos2, todos])
    setTodos('')
    setIsChecked([...isChecked, false])

  }

  function Delete(i) {
    console.log(i, "index deleted")
    todos2.splice(i, 1)
    setTodos2([...todos2])
    isChecked.splice(i, 1)
    setIsChecked([...isChecked])
    // console.log(todos2, 'deleted')
    // alert("todos Deleted")
  }

  function check(i) {
    var doc = document.getElementsByClassName('checkbox')
    // console.log(doc[i].checked, i)
    if (doc[i].checked == true) {
      var updatedVal = [...isChecked]
      updatedVal[i] = true;
      setIsChecked(updatedVal)
      console.log(doc[i], 'is ', isChecked[i])
    }
    else {
      var updatedVal = [...isChecked]
      updatedVal[i] = false;
      setIsChecked(updatedVal)
      console.log(doc[i], 'is ', isChecked[i])
    }
  }

  // useEffect(() => {
  //   setIsChecked([...isChecked])
  //   setTodos2([...todos2]);
  // } , [isChecked] , [todos2])

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
              <h1>{pro} <input className='checkbox' type='checkbox' value={`index${i}`} checked={isChecked[i]} onClick={() => check(i)} /> </h1>
              {isChecked[i] == true &&
                <button onClick={() => Delete(i)}>Delete</button>
              }
            </div>
          </>
        ))}

      </div>
    </div>
  );
}

export default App;
