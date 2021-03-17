class ReadOuts extends React.Component {
  constructor() {
    super();
    this.state = {
      callingStatus: "Not Calling",
      serverStatus : "Disconnected",
      connection: "Disconnected",
      incomingPackets: 0,
      droppedPackets: 0,
      fillStatus: [0, 0],
      inChannel: [0, 0, 0, 0],
      outChannel: [0, 0, 0, 0]
    };
  }

  updateState(){
    var self = this;
    $.get("/getUpdate", function(data){
      console.log(data.calling == 0)
      console.log(data.calling)
      self.setState({
        callingStatus: data.calling == 0? "Not Calling" : "Calling",
        serverStatus: data.foundsrvr == 0? "Disconnected":"Connected",
        connection: data.connected == 0? "Disconnected": "Connected",
        incomingPackets: data.pcktsin,
        droppedPackets: data.dropouts,
        fillStatus: [data.fill0, data.fill1],
        inChannel: [data.insr, data.inchnl, data.inblcksz, data.inkbits],
        outChannel: [data.outsr, data.outchnl, data.outblcksz, data.outkbits]
      })
    })
  }

  componentDidMount() {
    setInterval( () => this.updateState(), 1000);
  }

  onReset(){
    let data = {
      reset: 0
    }

    $.post("/setQuack", data, function(){

    })
  }

  render() {
    return (
      <div className="col-12 text-center text-white mx-auto">
        <h2>Read Outs</h2>

        {/* Readout Statuses */}
        <div className="row my-4">
          <div className="col-4">
            Call Status: <span className={this.state.callingStatus == "Not Calling" ? "text-danger" : "text-success"}>{this.state.callingStatus}</span>
          </div>
          <div className="col-4">
            Server Status: <span className={this.state.serverStatus == "Disconnected" ? "text-danger" : "text-success"}>{this.state.serverStatus}</span>
          </div>
          <div className="col-4">
            Connection Status: <span className={this.state.connection == "Disconnected" ? "text-danger" : "text-success"}>{this.state.connection}</span>
          </div>
        </div>

        {/* Packets */}
        <div className="row my-4">
          <div className="col-4">
            Fill: {this.state.fillStatus[0]} - {this.state.fillStatus[1]}
          </div>
          <div className="col-4">
            Incoming Packets: {this.state.incomingPackets}
          </div>
          <div className="col-4">
            Dropped Packets: {this.state.droppedPackets}
            <button className="btn btn-sm btn-light mx-2" onClick={(e) => this.onReset()}>Reset</button>
          </div>
        </div>

        {/* Input/Output Status */}
        <div className="col-10 mx-auto">
          <table className="table table-bordered table-dark">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Sample Rate</th>
                <th scope="col">Channels</th>
                <th scope="col">Block Size</th>
                <th scope="col">Kbps</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Out</td>
                <td>{this.state.outChannel[0]}</td>
                <td>{this.state.outChannel[1]}</td>
                <td>{this.state.outChannel[2]}</td>
                <td>{this.state.outChannel[3]}</td>
              </tr>
              <tr>
                <td>In</td>
                <td>{this.state.inChannel[0]}</td>
                <td>{this.state.inChannel[1]}</td>
                <td>{this.state.inChannel[2]}</td>
                <td>{this.state.inChannel[3]}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ReadOuts;
