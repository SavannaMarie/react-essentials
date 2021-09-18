import './App.css';

function Header(){
    return (
        <header>
            <h1>Savanna's Kitchen</h1>
        </header>
    );
}

function Main(){
    return (
        <section>
            <p>Amazing Mexican food!</p>
        </section>
    );
}

function Footer(){
    return (
        <footer>
            <p>It's true!!</p>
        </footer>
    );
}


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
