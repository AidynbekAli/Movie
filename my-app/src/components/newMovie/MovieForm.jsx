import { useState } from "react";
import { Button } from "../UI/Button";
import { Input } from "../UI/Input";
import "./MovieForm.css";

export const MovieForm = ({ onClick, onSubmit }) => {
  const [inputText, setInputText] = useState("");
  const [inputNumber, setInputNumber] = useState(0);
  const [inputData, setInputData] = useState(null);

  function getInputValue(e) {
    setInputText(e.target.value);
  }
  function getInputNamber(e) {
    setInputNumber(e.target.value);
  }
  function getInputDatar(e) {
    setInputData(e.target.value);
  }

  function submitHandler() {
    const product = {
      title: inputText,
      price: inputNumber,
      date: inputData,
    };
    onSubmit(product);
  }

  return (
    <>
      <div id="backdrop"></div>
      <div className="wrapper">
        . <label>Заголовок</label>
        <Input
          type="text"
          placeholder="Заголовок"
          value={inputText}
          onChange={getInputValue}
        />
        <label>Количества</label>
        <Input
          type="url"
          placeholder="URL"
          value={inputNumber}
          onChange={getInputNamber}
        />
        <label >Дата</label>
        <Input
          type="number"
          placeholder="Rating"
          value={inputData}
          onChange={getInputDatar}
         
        />
        <div className="new-expense-actions">
          <Button onClick={onClick}>Cancel</Button>
          <Button onClick={submitHandler} >Add</Button>
        </div>
      </div>
    </>
  );
};
