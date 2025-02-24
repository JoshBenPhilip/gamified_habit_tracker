import "./App.css";
// import "./game_comp_lib/game_comp_lib.css";
import { CharCard, HabitList } from "./large_components/large_comp_lib.tsx";

function App() {
  return (
    <>
      <CharCard></CharCard>
      {/* <HabitList></HabitList> */}
      <div>
        <header>
          <h1>Todolist</h1>
          <form>
            <input type="text" placeholder="search todos" />
          </form>
        </header>
        <ul>
          <li>test list item</li>
        </ul>
      </div>
    </>
  );
}

export default App;
