class InputMonitor extends React.Component {
  constructor() {
    super();
    this.state = {
      inputVal: 0,
      delayVal: 0,
    };
  }

  onVolumeChange(value) {
    this.setState({
      inputVal: value,
    });
  }

  onTodoChange(value) {
    this.setState({
      delayVal: value,
    });
  }

  updatePd(im, imdelay){
    let data = {
      'im': im, 
      'imdelay': imdelay
    }

    $.post("/setInput", data, function(){
      
    })
  }

  render() {
    return (
      <div className="col-6 text-center text-white ">
        <label className="form-label">Input Monitor</label>
        <div className="row d-flex justify-content-center">
          <div className="col-6">
            <div className="col-6 mx-auto">
              <label>Volume</label>
              <input
                type="range"
                className="form-range col"
                min="0"
                max="100"
                value={this.state.inputVal}
                onChange={(e) => this.onVolumeChange(e.target.value)}
                onMouseUp = {(e) => this.updatePd(this.state.inputVal, this.state.delayVal)}
              ></input>

              <input
                type="number"
                style={{ textAlign: "center" }}
                className="form-control col mb-2"
                max="100"
                min="0"
                value={this.state.inputVal}
                onChange={(e) => {this.onVolumeChange(e.target.value); this.updatePd(e.target.value, this.state.delayVal)}}
              ></input>

              <label>Delay</label>
              <input
                type="range"
                className="form-range col"
                min="0"
                max="100"
                value={this.state.delayVal}
                onChange={(e) => this.onTodoChange(e.target.value)}
                onMouseUp = {(e) => this.updatePd(this.state.inputVal, this.state.delayVal)}
              ></input>

              <input
                type="number"
                style={{ textAlign: "center" }}
                className="form-control col mb-2"
                max="100"
                min="0"
                value={this.state.delayVal}
                onChange={(e) => {this.onTodoChange(e.target.value); this.updatePd(this.state.inputVal, e.target.value)}}
              ></input>
            </div>
          </div>
          <div className="col-1 bg-secondary"></div>
        </div>
      </div>
    );
  }
}

export default InputMonitor;
