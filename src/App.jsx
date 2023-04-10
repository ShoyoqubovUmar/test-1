import './App.css'
import Lol from './lol'
function App() {
  return (
    <div className="home">
        <div className="l">
          <h1>Category</h1>
          <input type="text" placeholder='Add Category' />
          <div className="colors">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="bruh">
          <div className="z">
              <span></span>
              <h2>All</h2>
              </div>          
              <div className="z">
              <span></span>
              <h2>All</h2>
              </div>   
              <div className="z">
              <span></span>
              <h2>All</h2>
              </div>   
              <div className="z">
              <span></span>
              <h2>All</h2>
              </div>   
          </div>
        </div>
        <div className="r">
          <h1>All Tasks</h1>
          <input type="text" placeholder='Add a new task insdie ‘All’ category'/>
          <Lol></Lol>
          <Lol></Lol>
          <Lol></Lol>
          <Lol></Lol>
          <Lol></Lol>
        </div>
    </div>
  )
}

export default App
