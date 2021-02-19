import Panel from "./Panel.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="col-12 d-flex justify-content-center vertical-center">
        <Panel />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
