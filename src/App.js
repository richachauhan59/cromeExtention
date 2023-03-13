import React, { useState } from 'react'
import './App.css';

const data = [
  {
    name: "Search engine",
    url: ["https://www.google.com", "https://www.bing.com"]
  }
]

function App() {

  const [list, setLists] = useState(data)

  const openTabs = (url) => {
    for(const link of url){
      window.open(link, "_blank");
    }
  }

  return (
    <div className="App">
      <h3>Choose your app list</h3>
      <div className="lists" >
        {list && list.map((item) => {
          return (
            <button className="button" onClick={() => {openTabs(item.url)}} >{item.name}</button>
          )
        })}
      </div>
    </div>
  );
}

export default App;
