import React, { useState } from "react";
import './App.css'
import Button from "./components/Button";
import Boxs from "./components/Boxs";
import Header from "./components/Header";
import DoneBoxs from "./components/DoneBoxs";

const App = () => {


  const [boxs, setBoxs] = useState([
    { id: 1, title: '리엑트 공부하기', content: '리엑트 기초를 공부해봅시다.', done : false },
    { id: 2, title: '리엑트 끝', content: '리엑트 기초를 공부해봅시다.', done : true },
  ])

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')


  const titleChangeHandler = (e) => {
    setTitle(e.target.value)
  }

  const contentChangeHandler = (e) => {
    setContent(e.target.value)
  }

  const clickAddButtonHandler = () => {

    const newBox = {
      id : boxs.length + 1,
      title,
      content,
      done : false
    }

    setBoxs([...boxs, newBox])
    
    console.log(boxs)
  }

  const clickRemoveButton = (id) => {
    const newBoxs = boxs.filter(function(box){
      return box.id !== id
    })
    setBoxs(newBoxs)
  }


  const notyetBoxs = boxs.filter(function(box){
    return box.done === false
  })

  const isDoneBoxs = boxs.filter(function(box){
    return box.done === true
  })
  

  const onChangeHandler = (i) => {
    console.log(i)
    const ChangeBoxs = boxs.map((b) => {
      if (b.id === i) { // i.id == i
        return {...b, done: !b.done }
      } else { 
      return b
    }
    })
    setBoxs(ChangeBoxs);
    // console.log('onChangeHandler : ',ChangeBoxs )
    // console.log('onChangeHandler2 : ',boxs )
  }
  

  return (

<div>
  <div className="layOut">
      <Header />
      <div className="add-form">
        <p>제목</p><input className="input-group" value={title} onChange={titleChangeHandler}/> <br />

        <p>내용</p><input className="input-group" value={content} onChange={contentChangeHandler}/><br />
        <Button clickAddButtonHandler={clickAddButtonHandler}/>
      </div>

  <div className="list-container">
    <h2>Working..🔥</h2>
    <div className="list-wrapper">
        {
          notyetBoxs.map(function(i){
            return <Boxs key={i.id} i={i} onChangeFunction={onChangeHandler} removeFunction={clickRemoveButton}/>
          })
        }
    </div>

    <h2>Done..!🎉</h2>
    <div className=".list-wrapper">
        {
          isDoneBoxs.map(function(i){
            return <DoneBoxs key={i.id} i={i} onChangeFunction={onChangeHandler} removeFunction={clickRemoveButton}/>
          })
        }
    </div>
   </div>
  </div> 
</div>
  
  )
}


export default App;