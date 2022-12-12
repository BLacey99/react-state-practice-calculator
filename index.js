import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function AddForm() {
  const [sum, setSum] = useState(0); //Destructuring and swapping. sum is original value, setSum is where
  //next value will go and replace sum with. [x, y] = y. [y, z] = z. And so on.
  const [num, setNum] = useState(0); //Same logic as above.
  //So essentially, replace value x with result of function y ---> [valX, y(f)];

  const [difference, setDifference] = useState(0); //Callback? Replace difference with the result of setDifference()?

  const [product, setProduct] = useState(0); // Replace product with result of setProduct()??

  const [result, setResult] = useState(0); // replace result with value of setResult()??

  const [length, setLength] = useState(0);
  function handleChange(e) { //On any change in the input field, updates state of below setX functions

    setNum(e.target.value);
    setLength(e.target.value.length); //e.target is whatever element which is calling an event and this event is tied to.
  } //value={num} says whatever is typed is now the value of {num}. Each change, called handleChange(e) and setNum, taking the current value, which is value={num} and setting it as the value of const{num, setNum};

  function handleSubmit(e) { //On invoke, calls all setX Functions below to update the state for each.

    setSum(sum + Number(num)); //Takes sum and type converts string from form field into Number.

    setDifference(sum - Number(num) + Number(num)); //Takes current value of difference, and subtracts num from it.

    setProduct((Number(num) + sum) * Number(num)); //Takes current value of product + 1, and multiples it by num

    setResult(sum / Number(num)+1); // Takes current value of result+1, and divides it by num.

    e.preventDefault(); //stops form from refreshing
  }
  //On submit, invokes setX function calls.

  //Each input, prior to submit, takes the value typed in the field, and passes it as argument {num} when it detects a change in the field by using onChange, to handleChange.

  //handleChange takes the event occuring where it is set to monitor, and gets the data needed. In this case, it grabs the value because handleChange is attached as an event listener argument.

  //setNum is then invoked in handleChange. setNum grabs the target value, and replaces the current value of num with the new one found in the target.

  //When submit button is clicked, handleSubmit is invoked. handleSubmit calls any function inside of it for the given element, in this case, it handles it for form since it is attached to <form>

  // Invokes setSum which takes the current value of sum, and adds it to the value of num.
  // Invokes setDifference, which takes the current value of difference and subtracts num from it.
  // Invokes setProduct, which takes the current value of product + 1, and multiplies it by num.
  // Invokes setResult, which takes the current value of result +1, and divides it by num.

  //handleChange invokes setNum which takes the targeted element's value using e.target, and literally sets the num
  return (
    <form onSubmit={handleSubmit}>
      <input type="number" value={num} onChange={handleChange} />
      <input type="submit" value="Submit" />
      <p> Current num is {num}</p>
      <p> Characters remaining {16-length}</p>

      <br />
      <br />

      <p> Sum is {sum} </p>
      <p>Difference is {difference}</p>
      <p>Product is {product}</p>
      <p>Result is {result}</p>

    </form>
  );
}

const el = <AddForm />;
ReactDOM.render(el, document.getElementById('root'));
