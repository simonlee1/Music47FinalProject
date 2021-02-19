class InPanel extends React.Component {
  constructor() {
    super();
    this.state = {
      inputVal: 0,
      muteOn: false,
      testOn: false,
    };
  }

  onTodoChange(value) {
    this.setState({
      inputVal: value,
    });
  }

  onMute() {
    if (this.state.muteOn) {
      this.setState({
        muteOn: false,
      });
    } else {
      this.setState({
        muteOn: true,
      });
    }
  }

  onTest() {
    if (this.state.testOn) {
      this.setState({
        testOn: false,
      });
    } else {
      this.setState({
        testOn: true,
      });
    }
    console.log(this.state);
  }

  render() {
    return (
      <div className="col-6 text-center text-white ">
        <label className="form-label">Input Panel</label>
        <div className="row d-flex justify-content-center">
          <div className="col-7">
            <div className="col-6 mx-auto">
              <label>Level</label>

              <input
                type="range"
                className="form-range col"
                min="0"
                max="100"
                value={this.state.inputVal}
                onChange={(e) => this.onTodoChange(e.target.value)}
              ></input>

              <input
                type="number"
                style={{ textAlign: "center" }}
                className="form-control col mb-2"
                max="100"
                min="0"
                value={this.state.inputVal}
                onChange={(e) => this.onTodoChange(e.target.value)}
              ></input>
            </div>

            <button
              type="button"
              className={
                "btn btn" +
                (this.state.muteOn ? "-" : "-outline-") +
                "light mx-2 my-4"
              }
              onClick={(e) => this.onMute()}
            >
              Mute
            </button>

            <button
              type="button"
              className={
                "btn btn" +
                (this.state.testOn ? "-" : "-outline-") +
                "light mx-2"
              }
              onClick={(e) => this.onTest()}
            >
              Test
            </button>
          </div>
          <div className="col-1 bg-secondary"></div>
        </div>
      </div>
    );
  }
}

export default InPanel;
