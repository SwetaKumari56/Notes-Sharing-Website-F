
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import{analytics} from './Utils/Index';
import { logEvent } from 'firebase/analytics';

function App() {
  if(analytics){
    logEvent(analytics,'Init...')
  }
  

  return (
    <>
     <Navbar/>
     <Home/>
     <Footer/>
    </>
  )
}

export default App
