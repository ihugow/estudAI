//Styles
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

//Components
import Header from './presentation/components/Header'
import SideMenu from './presentation/components/SideMenu'
import HomePage from './presentation/pages/home/Home'
import Footer from './presentation/components/Footer'

function App() {

  return (
    <>
      <Header/>
      <SideMenu/>
      <HomePage/>
      <Footer/>
    </>
  )
}

export default App
