import BoardComponent from "./components/BoardComponent";

function App() {
  return (
    <div style = {{display: 'flex', flexDirection: 'column',justifyContent: 'center',alignItems:'center'}}>
      Tic Tac Toe
      <BoardComponent />
    </div>
  );
}

export default App;
