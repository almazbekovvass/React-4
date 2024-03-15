import {MainPage} from "./pages/mainPage/MainPage";
import {AboutPage} from "./pages/aboutPage/AboutPage";
import {UsersPage} from "./pages/usersPage/UsersPage";

function App() {
    const aboutObject=
        {
            title: "Hello word",
            descr: "text text text"
        }
    const arrayUsers= [
            {name: "Anna", age: 20},
            {name: "Klara", age: 30},
            {name: "Sofia", age: 25}
        ]
    return (
    <div>
        <MainPage name='Aiperi'/>
        <AboutPage object={aboutObject}/>
        <UsersPage array={arrayUsers}/>
    </div>
  );
}

export default App;
