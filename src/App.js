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
            <ul style={{textAlign: "left"}}>
                {props.dishes.map((dish, i) => (
                    <li key={i}>{dish}</li>))}
            </ul>
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
];

const dishObjects = dishes.map((dish, i) => ({id: i, title: dish}))
console.log(dishObjects);


function App() {
  return (
    <div className="App">
      <Header name="Mark" />
      <Main adjective="Amazing" dishes={dishes}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
