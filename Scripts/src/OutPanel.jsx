class OutPanel extends React.Component {
  constructor() {
    super();
    this.state = {
      outputVal: 0,
      muteOn: false,
      balance: 5
    };
  }

  onTodoChange(value) {
    this.setState({
      outputVal: value,
    });
  }

  onBalanceChange(value){
    this.setState({
      balance: value
    })
  }

  onResetBalance(){
    this.setState({
      balance: 5
    })

    let data = {
      'bal' : 5
    }

    $.post("/setOutput", data, function (){

    })
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
    let data = {
      'mute': 0
    }

    $.post("/setOutput", data, function (){

    })

  }

  updateLevel(levelValue, balance){
    let data = {
      'level': levelValue,
      'bal' : balance
    }

    $.post("/setOutput", data, function (){

    })
  }

  onMono(e){
    let data = {
      "mono": e.target.checked ? 1 : 0
    }
    $.post("/setOutput", data, function (){

    })
  }

  render() {
    return (
      <div className="col-6 text-center text-white mx-auto my-4">
        <label className="form-label">Output Panel</label>
        <div className="row d-flex justify-content-center">
          <div className="col-7">
            <div className="col-6 mx-auto">
              <label>Level</label>

              <input
                type="range"
                className="form-range col"
                min="0"
                max="100"
                value={this.state.outputVal}
                onChange={(e) => this.onTodoChange(e.target.value)}
                onMouseUp= {(e) => this.updateLevel(this.state.outputVal, this.state.balance)}
              ></input>

              <input
                type="number"
                style={{ textAlign: "center" }}
                className="form-control col mb-2"
                max="100"
                min="0"
                value={this.state.outputVal}
                onChange={(e) => {this.onTodoChange(e.target.value); this.updateLevel(e.target.value, this.state.balance)}}
              ></input>
            </div>

            

            <div className="col-6 mx-auto">
              <button
                type="button"
                className={
                  "btn btn" +
                  (this.state.muteOn ? "-" : "-outline-") +
                  "light mx-2 my-2"
                }
                onClick={(e) => this.onMute()}
              >
                Mute
              </button>
              
              <div className="form-check my-2 mx-auto" style={{width:"50%"}}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  onClick={(e) => this.onMono(e)}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Mono
                </label>
              </div>
            </div>

            
            <div className="col-6 mx-auto">
              <label>Balance</label>
              <input
                  type="range"
                  className="form-range col"
                  min="1"
                  max="9"
                  value={this.state.balance}
                  onChange={(e) => this.onBalanceChange(e.target.value)}
                  onMouseUp={(e) => this.updateLevel(this.state.outputVal, this.state.balance)}
                ></input>
                <button className="btn btn-sm btn-light mx-2" onClick={(e) => this.onResetBalance()}>Reset</button>
            </div>
            
          </div>
          <div className="col-1 bg-secondary mx-1"></div>
          <div className="col-1 bg-secondary mx-1"></div>
        </div>
      </div>
    );
  }
}

export default OutPanel;
