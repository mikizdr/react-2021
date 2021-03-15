import { Header } from "./components/Header";

// Function component
// const App = () => {
//   return (
//     <div className="container">
//       <Header />
//     </div>
//   );
// };

// Class based component
import React, { Component } from "react";

class App extends Component {
  render() {
    return <Header />;
  }
}

export default App;
