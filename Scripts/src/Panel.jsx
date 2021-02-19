import InPanel from "./InPanel.js";
import InputMonitor from "./InputMonitor.js";
import QuackPanel from "./QuackPanel.js";
import OutPanel from "./OutPanel.js";
import ReadOuts from "./ReadOuts.js";

class Panel extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="col-8 text-center text-white border border-white">
        <div className="row">
          <InPanel />
          <InputMonitor />
        </div>
        <div className="row">
          <QuackPanel></QuackPanel>
          <ReadOuts></ReadOuts>
        </div>
        <div className="row">
          <OutPanel></OutPanel>
        </div>
      </div>
    );
  }
}

export default Panel;
