import './App.css';

function Header(props){
    console.log(props)
    return (
        <header>
            <h1>{props.name}'s Kitchen</h1>
        </header>
    );
}

function Main(props){
    return (
        <section>
            <p>{props.adjective} Mexican food!</p>
        </section>
    );
}

function Footer(props){
    return (
        <footer>
            <p>Copyright: {props.year}</p>
        </footer>
    );
}


function App() {
  return (
    <div className="App">
      <Header name="Mark" />
      <Main adjective="Amazing"/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
