import React from "react";
import emojipedias from "../emojipedia"
import Emoji from "./emoji"

function creatEmoji(emojipedia){
return(
  <Emoji
   key={emojipedia.id}
   emoji={emojipedia.emoji}
   name={emojipedia.name}
   meaning={emojipedia.meaning}
  />
  )
  
}


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">

      {emojipedias.map(creatEmoji)}

      </dl> 
    </div>
  );
}

export default App;
