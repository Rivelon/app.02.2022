import './App.css';
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navbar/Navigation";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Routes, Route} from "react-router-dom";
import {updateNewPostText} from "./redux/state";

function App(props) {



    return (

        <div className='app-wrapper'>
            <Header/>
            <Navigation/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile/*' element={<Profile posts={props.posts}
                                                               addPost={props.addPost}
                                                               newPostText={props.newPostText}
                                                               updateNewPostText={props.updateNewPostText}/>}/>
                    <Route path='/dialogs/*' element={<Dialogs dialogs={props.dialogs}
                                                               messages={props.messages}/>}/>
                </Routes>
            </div>
        </div>

    );
}

export default App;
