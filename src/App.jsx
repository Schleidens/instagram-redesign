import Navbar from "./components/navbar"
import Stories from "./components/stories"

function App() {

  return (
    <div className="text-2xl">
     <Navbar />
     <div className="mt-6 mx-52">
       <Stories />
     </div>
    </div>
  )
}

export default App
