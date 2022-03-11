import './App.css';
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import Profile from "./Components/Profile";

function App() {
    return (

        <div className='app-wrapper'>
            <Header/>
            <Navigation/>
            <Profile/>
        </div>
    );
}

export default App;
