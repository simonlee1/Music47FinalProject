var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OutPanel = function (_React$Component) {
  _inherits(OutPanel, _React$Component);

  function OutPanel() {
    _classCallCheck(this, OutPanel);

    var _this = _possibleConstructorReturn(this, (OutPanel.__proto__ || Object.getPrototypeOf(OutPanel)).call(this));

    _this.state = {
      outputVal: 0,
      muteOn: false,
      balance: 5
    };
    return _this;
  }

  _createClass(OutPanel, [{
    key: 'onTodoChange',
    value: function onTodoChange(value) {
      this.setState({
        outputVal: value
      });
    }
  }, {
    key: 'onBalanceChange',
    value: function onBalanceChange(value) {
      this.setState({
        balance: value
      });
    }
  }, {
    key: 'onResetBalance',
    value: function onResetBalance() {
      this.setState({
        balance: 5
      });

      var data = {
        'bal': 5
      };

      $.post("/setOutput", data, function () {});
    }
  }, {
    key: 'onMute',
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
        'mute': 0
      };

      $.post("/setOutput", data, function () {});
    }
  }, {
    key: 'updateLevel',
    value: function updateLevel(levelValue, balance) {
      var data = {
        'level': levelValue,
        'bal': balance
      };

      $.post("/setOutput", data, function () {});
    }
  }, {
    key: 'onMono',
    value: function onMono(e) {
      var data = {
        "mono": e.target.checked ? 1 : 0
      };
      $.post("/setOutput", data, function () {});
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        { className: 'col-6 text-center text-white mx-auto my-4' },
        React.createElement(
          'label',
          { className: 'form-label' },
          'Output Panel'
        ),
        React.createElement(
          'div',
          { className: 'row d-flex justify-content-center' },
          React.createElement(
            'div',
            { className: 'col-7' },
            React.createElement(
              'div',
              { className: 'col-6 mx-auto' },
              React.createElement(
                'label',
                null,
                'Level'
              ),
              React.createElement('input', {
                type: 'range',
                className: 'form-range col',
                min: '0',
                max: '100',
                value: this.state.outputVal,
                onChange: function onChange(e) {
                  return _this2.onTodoChange(e.target.value);
                },
                onMouseUp: function onMouseUp(e) {
                  return _this2.updateLevel(_this2.state.outputVal, _this2.state.balance);
                }
              }),
              React.createElement('input', {
                type: 'number',
                style: { textAlign: "center" },
                className: 'form-control col mb-2',
                max: '100',
                min: '0',
                value: this.state.outputVal,
                onChange: function onChange(e) {
                  _this2.onTodoChange(e.target.value);_this2.updateLevel(e.target.value, _this2.state.balance);
                }
              })
            ),
            React.createElement(
              'div',
              { className: 'col-6 mx-auto' },
              React.createElement(
                'button',
                {
                  type: 'button',
                  className: "btn btn" + (this.state.muteOn ? "-" : "-outline-") + "light mx-2 my-2",
                  onClick: function onClick(e) {
                    return _this2.onMute();
                  }
                },
                'Mute'
              ),
              React.createElement(
                'div',
                { className: 'form-check my-2 mx-auto', style: { width: "50%" } },
                React.createElement('input', {
                  className: 'form-check-input',
                  type: 'checkbox',
                  value: '',
                  id: 'flexCheckDefault',
                  onClick: function onClick(e) {
                    return _this2.onMono(e);
                  }
                }),
                React.createElement(
                  'label',
                  { className: 'form-check-label', htmlFor: 'flexCheckDefault' },
                  'Mono'
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'col-6 mx-auto' },
              React.createElement(
                'label',
                null,
                'Balance'
              ),
              React.createElement('input', {
                type: 'range',
                className: 'form-range col',
                min: '1',
                max: '9',
                value: this.state.balance,
                onChange: function onChange(e) {
                  return _this2.onBalanceChange(e.target.value);
                },
                onMouseUp: function onMouseUp(e) {
                  return _this2.updateLevel(_this2.state.outputVal, _this2.state.balance);
                }
              }),
              React.createElement(
                'button',
                { className: 'btn btn-sm btn-light mx-2', onClick: function onClick(e) {
                    return _this2.onResetBalance();
                  } },
                'Reset'
              )
            )
          ),
          React.createElement('div', { className: 'col-1 bg-secondary mx-1' }),
          React.createElement('div', { className: 'col-1 bg-secondary mx-1' })
        )
      );
    }
  }]);

  return OutPanel;
}(React.Component);

export default OutPanel;