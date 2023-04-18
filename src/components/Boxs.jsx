const Boxs = ({i, removeFunction,onChangeFunction}) => {

    return(
      <div key={i.id} className="todo-container">
        <h2>
          {i.title} 
        </h2>
       <div>
          {i.content}
       </div>
       <div className="button-set">
          <button className="todo-delete-button" onClick={() => removeFunction(i.id)}>삭제</button>
          <button className="todo-complete-button" onClick={() => onChangeFunction(i.id)}>완료</button>
      </div>
    </div>
    )
  }

  export default Boxs