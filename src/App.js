
import React from "react"
import Header from './Header'
import Tags from './Tags'
import Sidebar from './Sidebar'
import Videos from './Videos'
function App() {
  return (
    // BEM Class Naming Convention
    <div className="app">
      {/*<h1>Hello Clever Programmer Let's Build A Youtube Clone 	٩(◕‿◕｡)۶</h1>}
      {/*Header <header/> */}
      <Header/>
        {/*Slider <slder/>*/}
        <Sidebar/>
      {/* Tags*/}
      <Tags/>
      {/*Videos <videos/>*/}
      <Videos/>
    </div>
  );
}

export default App;
