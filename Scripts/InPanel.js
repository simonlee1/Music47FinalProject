var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InPanel = function (_React$Component) {
  _inherits(InPanel, _React$Component);

  function InPanel() {
    _classCallCheck(this, InPanel);

    var _this = _possibleConstructorReturn(this, (InPanel.__proto__ || Object.getPrototypeOf(InPanel)).call(this));

    _this.state = {
      inputVal: 0,
      muteOn: false,
      testOn: false
    };
    return _this;
  }

  _createClass(InPanel, [{
    key: "onTodoChange",
    value: function onTodoChange(value, name) {
      this.setState({
        inputVal: value
      });

      if (name == "inputVal") {
        var data = {
          'level': value
        };
        $.post("/setInput", data, function () {});
      }
    }
  }, {
    key: "onMute",
    value: function onMute() {
      if (this.state.muteOn) {
        this.setState({
          muteOn: false
        });
      } else {
        this.setState({
          muteOn: true
        });
      }

      var data = {
        "mute": 0
      };
      $.post("/setInput", data, function () {});
    }
  }, {
    key: "onTest",
    value: function onTest() {
      if (this.state.testOn) {
        this.setState({
          testOn: false
        });
      } else {
        this.setState({
          testOn: true
        });
      }

      var data = {
        "test": this.state.testOn ? 0 : 1
      };
      $.post("/setInput", data, function () {});
    }
  }, {
    key: "updateLevel",
    value: function updateLevel() {
      var data = {
        'level': this.state.inputVal
      };
      $.post("/setInput", data, function () {});
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "div",
        { className: "col-6 text-center text-white " },
        React.createElement(
          "label",
          { className: "form-label" },
          "Input Panel"
        ),
        React.createElement(
          "div",
          { className: "row d-flex justify-content-center" },
          React.createElement(
            "div",
            { className: "col-7" },
            React.createElement(
              "div",
              { className: "col-6 mx-auto" },
              React.createElement(
                "label",
                null,
                "Level"
              ),
              React.createElement("input", {
                type: "range",
                className: "form-range col",
                min: "0",
                max: "100",
                value: this.state.inputVal,
                onChange: function onChange(e) {
                  return _this2.onTodoChange(e.target.value, "");
                },
                onMouseUp: function onMouseUp(e) {
                  return _this2.updateLevel();
                }
              }),
              React.createElement("input", {
                type: "number",
                style: { textAlign: "center" },
                className: "form-control col mb-2",
                max: "100",
                min: "0",
                value: this.state.inputVal,
                onChange: function onChange(e) {
                  _this2.onTodoChange(e.target.value, "inputVal");
                }
              })
            ),
            React.createElement(
              "button",
              {
                type: "button",
                className: "btn btn" + (this.state.muteOn ? "-" : "-outline-") + "light mx-2 my-4",
                onClick: function onClick(e) {
                  return _this2.onMute();
                }
              },
              "Mute"
            ),
            React.createElement(
              "button",
              {
                type: "button",
                className: "btn btn" + (this.state.testOn ? "-" : "-outline-") + "light mx-2",
                onClick: function onClick(e) {
                  return _this2.onTest();
                }
              },
              "Test"
            )
          ),
          React.createElement("div", { className: "col-1 bg-secondary" })
        )
      );
    }
  }]);

  return InPanel;
}(React.Component);

export default InPanel;