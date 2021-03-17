var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReadOuts = function (_React$Component) {
  _inherits(ReadOuts, _React$Component);

  function ReadOuts() {
    _classCallCheck(this, ReadOuts);

    var _this = _possibleConstructorReturn(this, (ReadOuts.__proto__ || Object.getPrototypeOf(ReadOuts)).call(this));

    _this.state = {
      callingStatus: "Not Calling",
      serverStatus: "Disconnected",
      connection: "Disconnected",
      incomingPackets: 0,
      droppedPackets: 0,
      fillStatus: [0, 0],
      inChannel: [0, 0, 0, 0],
      outChannel: [0, 0, 0, 0]
    };
    return _this;
  }

  _createClass(ReadOuts, [{
    key: "updateState",
    value: function updateState() {
      var self = this;
      $.get("/getUpdate", function (data) {
        console.log(data.calling == 0);
        console.log(data.calling);
        self.setState({
          callingStatus: data.calling == 0 ? "Not Calling" : "Calling",
          serverStatus: data.foundsrvr == 0 ? "Disconnected" : "Connected",
          connection: data.connected == 0 ? "Disconnected" : "Connected",
          incomingPackets: data.pcktsin,
          droppedPackets: data.dropouts,
          fillStatus: [data.fill0, data.fill1],
          inChannel: [data.insr, data.inchnl, data.inblcksz, data.inkbits],
          outChannel: [data.outsr, data.outchnl, data.outblcksz, data.outkbits]
        });
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      setInterval(function () {
        return _this2.updateState();
      }, 30000);
    }
  }, {
    key: "onReset",
    value: function onReset() {
      var data = {
        reset: 0
      };

      $.post("/setQuack", data, function () {});
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return React.createElement(
        "div",
        { className: "col-12 text-center text-white mx-auto" },
        React.createElement(
          "h2",
          null,
          "Read Outs"
        ),
        React.createElement(
          "div",
          { className: "row my-4" },
          React.createElement(
            "div",
            { className: "col-4" },
            "Call Status: ",
            React.createElement(
              "span",
              { className: this.state.callingStatus == "Not Calling" ? "text-danger" : "text-success" },
              this.state.callingStatus
            )
          ),
          React.createElement(
            "div",
            { className: "col-4" },
            "Server Status: ",
            React.createElement(
              "span",
              { className: this.state.serverStatus == "Disconnected" ? "text-danger" : "text-success" },
              this.state.serverStatus
            )
          ),
          React.createElement(
            "div",
            { className: "col-4" },
            "Connection Status: ",
            React.createElement(
              "span",
              { className: this.state.connection == "Disconnected" ? "text-danger" : "text-success" },
              this.state.connection
            )
          )
        ),
        React.createElement(
          "div",
          { className: "row my-4" },
          React.createElement(
            "div",
            { className: "col-4" },
            "Fill: ",
            this.state.fillStatus[0],
            " - ",
            this.state.fillStatus[1]
          ),
          React.createElement(
            "div",
            { className: "col-4" },
            "Incoming Packets: ",
            this.state.incomingPackets
          ),
          React.createElement(
            "div",
            { className: "col-4" },
            "Dropped Packets: ",
            this.state.droppedPackets,
            React.createElement(
              "button",
              { className: "btn btn-sm btn-light mx-2", onClick: function onClick(e) {
                  return _this3.onReset();
                } },
              "Reset"
            )
          )
        ),
        React.createElement(
          "div",
          { className: "col-10 mx-auto" },
          React.createElement(
            "table",
            { className: "table table-bordered table-dark" },
            React.createElement(
              "thead",
              null,
              React.createElement(
                "tr",
                null,
                React.createElement("th", { scope: "col" }),
                React.createElement(
                  "th",
                  { scope: "col" },
                  "Sample Rate"
                ),
                React.createElement(
                  "th",
                  { scope: "col" },
                  "Channels"
                ),
                React.createElement(
                  "th",
                  { scope: "col" },
                  "Block Size"
                ),
                React.createElement(
                  "th",
                  { scope: "col" },
                  "Kbps"
                )
              )
            ),
            React.createElement(
              "tbody",
              null,
              React.createElement(
                "tr",
                null,
                React.createElement(
                  "td",
                  null,
                  "Out"
                ),
                React.createElement(
                  "td",
                  null,
                  this.state.outChannel[0]
                ),
                React.createElement(
                  "td",
                  null,
                  this.state.outChannel[1]
                ),
                React.createElement(
                  "td",
                  null,
                  this.state.outChannel[2]
                ),
                React.createElement(
                  "td",
                  null,
                  this.state.outChannel[3]
                )
              ),
              React.createElement(
                "tr",
                null,
                React.createElement(
                  "td",
                  null,
                  "In"
                ),
                React.createElement(
                  "td",
                  null,
                  this.state.inChannel[0]
                ),
                React.createElement(
                  "td",
                  null,
                  this.state.inChannel[1]
                ),
                React.createElement(
                  "td",
                  null,
                  this.state.inChannel[2]
                ),
                React.createElement(
                  "td",
                  null,
                  this.state.inChannel[3]
                )
              )
            )
          )
        )
      );
    }
  }]);

  return ReadOuts;
}(React.Component);

export default ReadOuts;