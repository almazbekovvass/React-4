import {Title} from "./components/title/Title";
import {About} from "./components/about/About";

function App() {
  const objectTitle= {
    title: 'Айпери',
    subtitle: "geeks"
  }
  const objectAbout= {
      title: "Dastan",
      body: "value",
      link: "value"
  }
    return (
    <div>
      <Title object={objectTitle}/>
      <About object={objectAbout}/>
    </div>
  );
}

export default App;
