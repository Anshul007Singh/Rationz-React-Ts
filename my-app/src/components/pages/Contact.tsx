import { useReducer } from 'react';

function reducer(state:any, action:any) {
  switch (action.type) {
    case 'add': {
      return {
        age: state.age + 1
      };
    }
    case 'remove': {
      return {
        age: state.age -1
      };
    }
  }
  throw Error('Unknown action: ' + action.type);
}

const initialState = { age: 42 };

 const Contact:React.FC<{onAddTodo: (age: number) => void }> = (props)=> {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleIncrementClick() {
    dispatch({ type: 'add' });
    props.onAddTodo(state.age)
  }

  function handleDecrementClick() {
    dispatch({ type: 'remove' });
  }
  // function handleInputChange(e: { target: { value: any; }; }) {
  //   dispatch({
  //     type: 'changed_name',
  //     nextName: e.target.value
  //   }); 
  // }

  return (
    <>
     <button onClick={handleIncrementClick}>
        Increment Cart
      </button>
      <button onClick={handleDecrementClick}>
        Decrement Cart
      </button>
      <p>Hello You are {state.age}.</p>
    </>
  );
}

export default Contact;
