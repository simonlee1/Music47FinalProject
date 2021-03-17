var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QuackPanel = function (_React$Component) {
  _inherits(QuackPanel, _React$Component);

  function QuackPanel() {
    _classCallCheck(this, QuackPanel);

    var _this = _possibleConstructorReturn(this, (QuackPanel.__proto__ || Object.getPrototypeOf(QuackPanel)).call(this));

    _this.state = {
      inputDelay: 10,
      channelVal: "2",
      blockVal: "64",
      isOn: false,
      double: false,
      callName: "",
      server: "foo.ucsd.edu"
    };
    return _this;
  }

  _createClass(QuackPanel, [{
    key: "onChange",
    value: function onChange(e) {
      if (e.target.tagName === "INPUT") {
        this.setState({ inputDelay: e.target.value });
        var data = {
          "id": e.target.value
        };
        $.post("/setQuack", data, function () {});
      } else {
        if (this.state.isOn) {
          this.setState({ isOn: false });
        } else {
          this.setState({ isOn: true });
        }

        var _data = {
          "state": this.state.isOn ? 0 : 1
        };
        $.post("/setQuack", _data, function () {});
      }
    }
  }, {
    key: "onClick",
    value: function onClick(event, value) {
      if (event.target.name == "Channels") {
        this.setState({
          channelVal: value
        });
        var data = {
          "chnls": value
        };
        $.post("/setQuack", data, function () {});
      } else if (event.target.name == "BlockSize") {
        this.setState({
          blockVal: value
        });
        var _data2 = {
          "blcksz": value == "64" ? 0 : value == "128" ? 1 : 2
        };
        $.post("/setQuack", _data2, function () {});
      } else if (event.target.name == "2x") {
        var _data3 = {
          "dbl": event.target.checked ? 1 : 0
        };
        $.post("/setQuack", _data3, function () {});
      }
    }
  }, {
    key: "onNameChange",
    value: function onNameChange(e) {
      if (e.target.name == "callName") {
        this.setState({
          callName: e.target.value
        });
        var data = {
          cllnm: e.target.value
        };

        $.post("/setQuack", data, function () {});
      } else if (e.target.name == "serverName") {
        this.setState({
          server: e.target.value
        });

        var _data4 = {
          srvrnm: e.target.value
        };

        $.post("/setQuack", _data4, function () {});
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "div",
        { className: "col-12 text-center text-white" },
        React.createElement(
          "h2",
          null,
          "Quack Panel"
        ),
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { className: "col-2" },
            React.createElement(
              "label",
              null,
              "On/Off"
            ),
            " ",
            React.createElement("br", null),
            React.createElement(
              "button",
              {
                className: "btn btn-" + (this.state.isOn ? "danger" : "success"),
                onClick: function onClick(e) {
                  return _this2.onChange(e);
                }
              },
              this.state.isOn ? "Off" : "On"
            )
          ),
          React.createElement(
            "div",
            { className: "col-2" },
            React.createElement(
              "label",
              null,
              "Input Delay"
            ),
            React.createElement(
              "div",
              { className: "col-6 mx-auto" },
              React.createElement("input", {
                type: "number",
                className: "form-control",
                value: this.state.inputDelay,
                onChange: function onChange(e) {
                  return _this2.onChange(e);
                }
              })
            )
          ),
          React.createElement(
            "div",
            { className: "col-3" },
            React.createElement(
              "label",
              null,
              "Channels"
            ),
            React.createElement(RadioButton, {
              form: "Channels",
              value: "0",
              onClick: function onClick(e) {
                return _this2.onClick(e, "0");
              },
              checked: this.state.channelVal == "0"
            }),
            React.createElement(RadioButton, {
              form: "Channels",
              value: "1",
              onClick: function onClick(e) {
                return _this2.onClick(e, "1");
              },
              checked: this.state.channelVal == "1"
            }),
            React.createElement(RadioButton, {
              form: "Channels",
              value: "2",
              onClick: function onClick(e) {
                return _this2.onClick(e, "2");
              },
              checked: this.state.channelVal == "2"
            })
          ),
          React.createElement(
            "div",
            { className: "col-3" },
            React.createElement(
              "label",
              null,
              "Block Size"
            ),
            React.createElement(RadioButton, {
              form: "BlockSize",
              value: "64",
              onClick: function onClick(e) {
                return _this2.onClick(e, "64");
              },
              checked: this.state.blockVal == "64"
            }),
            React.createElement(RadioButton, {
              form: "BlockSize",
              value: "128",
              onClick: function onClick(e) {
                return _this2.onClick(e, "128");
              },
              checked: this.state.blockVal == "128"
            }),
            React.createElement(RadioButton, {
              form: "BlockSize",
              value: "256",
              onClick: function onClick(e) {
                return _this2.onClick(e, "256");
              },
              checked: this.state.blockVal == "256"
            })
          ),
          React.createElement(
            "div",
            { className: "col-2 " },
            React.createElement(
              "div",
              { className: "form-check my-auto " },
              React.createElement("input", {
                className: "form-check-input",
                type: "checkbox",
                value: "",
                id: "flexCheckDefault",
                name: "2x",
                onClick: function onClick(e) {
                  return _this2.onClick(e, "2x");
                }
              }),
              React.createElement(
                "label",
                { className: "form-check-label", htmlFor: "flexCheckDefault" },
                "2x"
              )
            )
          ),
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "div",
              { className: "col-4 mx-auto my-3" },
              React.createElement(
                "h3",
                null,
                "Call Name"
              ),
              React.createElement("input", { type: "text", className: "form-control", name: "callName", onChange: function onChange(e) {
                  _this2.onNameChange(e);
                }, value: this.state.callName })
            ),
            React.createElement(
              "div",
              { className: "col-4 mx-auto my-3" },
              React.createElement(
                "h3",
                null,
                "Server"
              ),
              React.createElement("input", { type: "text", className: "form-control", name: "serverName", onChange: function onChange(e) {
                  _this2.onNameChange(e);
                }, value: this.state.server })
            )
          )
        )
      );
    }
  }]);

  return QuackPanel;
}(React.Component);

function RadioButton(props) {
  return React.createElement(
    "div",
    { className: "form-check" },
    React.createElement("input", {
      className: "form-check-input",
      type: "radio",
      name: props.form,
      id: props.form + props.value,
      onChange: function onChange(e) {
        return props.onClick(e);
      },
      checked: props.checked
    }),
    React.createElement(
      "label",
      { className: "form-check-label", htmlFor: "flexRadioDefault1" },
      props.value
    )
  );
}

export default QuackPanel;