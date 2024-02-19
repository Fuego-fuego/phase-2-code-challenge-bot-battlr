import BotCollection from "./BotCollection"
import BotArmy from "./BotArmy"


function App() {


  return (
    <main className="main | bg-primary-800">
     <div className="container">
      <h1 className="fs-primary-heading  text-accent-100 capitalize">
        <span className="accent">b</span>ot 
         <span className="accent uppercase">b</span>attler
        </h1>
        <p className="capitalize text-primary-500">build your bot army</p>
      
      <div className="army-container | bg-primary-700">
        <BotCollection/>
        <BotArmy/>
      </div>

     </div>
    </main>
  )
}

export default App
