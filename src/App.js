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
            {/*<ul>*/}
            {/*    {props.dishes.map} =>*/}
            {/*</ul>*/}
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

const dishes = [
    "Enchiladas",
    "Mac and cheese",
    "Spaghetti"
]

dishes.map((dish) => console.log(dish));

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
