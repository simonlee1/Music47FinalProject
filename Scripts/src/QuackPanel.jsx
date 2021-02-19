class QuackPanel extends React.Component {
  constructor() {
    super();
    this.state = {
      inputDelay: 10,
      channelVal: "2",
      blockVal: "64",
      isOn: false,
    };
  }

  onChange(e) {
    if (e.target.tagName === "INPUT") {
      this.setState({ inputDelay: e.target.value });
    } else {
      if (this.state.isOn) {
        this.setState({ isOn: false });
      } else {
        this.setState({ isOn: true });
      }
    }
  }

  onClick(event, value) {
    if (event.target.name == "Channels") {
      this.setState({
        channelVal: value,
      });
    } else if (event.target.name == "BlockSize") {
      this.setState({
        blockVal: value,
      });
    }
  }

  render() {
    return (
      <div className="col-12 text-center text-white">
        <h2>Quack Panel</h2>

        <div className="row">
          <div className="col-2">
            <label>On/Off</label> <br></br>
            <button
              className={"btn btn-" + (this.state.isOn ? "danger" : "success")}
              onClick={(e) => this.onChange(e)}
            >
              {this.state.isOn ? "Off" : "On"}
            </button>
          </div>
          <div className="col-2">
            <label>Input Delay</label>
            <div className="col-6 mx-auto">
              <input
                type="number"
                className="form-control"
                value={this.state.inputDelay}
                onChange={(e) => this.onChange(e)}
              ></input>
            </div>
          </div>

          <div className="col-3">
            <label>Channels</label>
            <RadioButton
              form="Channels"
              value="0"
              onClick={(e) => this.onClick(e, "0")}
              checked={this.state.channelVal == "0"}
            />
            <RadioButton
              form="Channels"
              value="1"
              onClick={(e) => this.onClick(e, "1")}
              checked={this.state.channelVal == "1"}
            />
            <RadioButton
              form="Channels"
              value="2"
              onClick={(e) => this.onClick(e, "2")}
              checked={this.state.channelVal == "2"}
            />
          </div>

          <div className="col-3">
            <label>Block Size</label>
            <RadioButton
              form="BlockSize"
              value="64"
              onClick={(e) => this.onClick(e, "64")}
              checked={this.state.blockVal == "64"}
            />
            <RadioButton
              form="BlockSize"
              value="128"
              onClick={(e) => this.onClick(e, "128")}
              checked={this.state.blockVal == "128"}
            />
            <RadioButton
              form="BlockSize"
              value="256"
              onClick={(e) => this.onClick(e, "256")}
              checked={this.state.blockVal == "256"}
            />
          </div>

          <div className="col-2 ">
            <div className="form-check my-auto ">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                2x
              </label>
            </div>
          </div>

          <div className="row">
            <div className="col-4 mx-auto my-3">
              <h3>Call Name</h3>
              <input type="text" className="form-control"></input>
            </div>
            <div className="col-4 mx-auto my-3">
              <h3>Server</h3>
              <input type="text" className="form-control"></input>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function RadioButton(props) {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name={props.form}
        id={props.form + props.value}
        onChange={(e) => props.onClick(e)}
        checked={props.checked}
      />
      <label className="form-check-label" htmlFor="flexRadioDefault1">
        {props.value}
      </label>
    </div>
  );
}

export default QuackPanel;
