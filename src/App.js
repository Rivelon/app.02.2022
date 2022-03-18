import './App.css';
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navbar/Navigation";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Routes, Route} from "react-router-dom";

function App() {
    return (

        <div className='app-wrapper'>
            <Header/>
            <Navigation/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile/*' element={<Profile/>}/>
                    <Route path='/dialogs/*' element={<Dialogs/>}/>
                </Routes>
            </div>
        </div>

    );
}

export default App;
