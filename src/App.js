import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {MyWorks} from "./works/MyWorks";
import {DistantWork} from "./distantWork/DistantWork";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyWorks />
            <DistantWork />
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;
