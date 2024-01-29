import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
function App() {
  return (
    <center class="todocontainer">
      <AppName />
      <AddTodo></AddTodo>

      <div class="container text-center">
        <div class="row">
          <div class="col-6">Buy Milk</div>
          <div class="col-4">1/1/24</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </center>
  );
}

export default App;
