import {useState} from "react";
import './App.css';

function App() {
  const [text, setText] = useState("");
  const [lsetf, setLsetf] = useState([]);

  const Post = () => {
    const items = {
      id : lsetf.length + 1,
      comment : text,
    };

    setLsetf([...lsetf, items]);
    setText("");
  } 

  console.log(lsetf)
  console.log(text)
  
  return (
    <div className="CardHolder">
      <br/>
      <span><input className="input" value={text} onChange={(e)=>{setText(e.target.value)
      console.log(text)
      }} placeholder="Enter comment"/>
      <button className="Post" onClick={()=>{Post()
      console.log('Have Posted')}}>Post</button></span>
      
      {lsetf.map((props)=>(
        <div className="Card">
          <div>{props.id}.</div>
          <div>{props.comment}</div>
          <button className="btn">Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;