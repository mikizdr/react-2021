import Header from "./components/tasks/Header";
import Tasks from './components/tasks/Tasks'

// Function component
const App = () => {
  return (
    <div className="container">
      <Header title="Task Tracker"/>
      <Tasks />
    </div>
  );
};

export default App;
