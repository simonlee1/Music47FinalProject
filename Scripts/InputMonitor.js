var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputMonitor = function (_React$Component) {
  _inherits(InputMonitor, _React$Component);

  function InputMonitor() {
    _classCallCheck(this, InputMonitor);

    var _this = _possibleConstructorReturn(this, (InputMonitor.__proto__ || Object.getPrototypeOf(InputMonitor)).call(this));

    _this.state = {
      inputVal: 0,
      delayVal: 0
    };
    return _this;
  }

  _createClass(InputMonitor, [{
    key: 'onVolumeChange',
    value: function onVolumeChange(value) {
      this.setState({
        inputVal: value
      });
    }
  }, {
    key: 'onTodoChange',
    value: function onTodoChange(value) {
      this.setState({
        delayVal: value
      });
    }
  }, {
    key: 'updatePd',
    value: function updatePd(im, imdelay) {
      var data = {
        'im': im,
        'imdelay': imdelay
      };

      $.post("/setInput", data, function () {});
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        { className: 'col-6 text-center text-white ' },
        React.createElement(
          'label',
          { className: 'form-label' },
          'Input Monitor'
        ),
        React.createElement(
          'div',
          { className: 'row d-flex justify-content-center' },
          React.createElement(
            'div',
            { className: 'col-6' },
            React.createElement(
              'div',
              { className: 'col-6 mx-auto' },
              React.createElement(
                'label',
                null,
                'Volume'
              ),
              React.createElement('input', {
                type: 'range',
                className: 'form-range col',
                min: '0',
                max: '100',
                value: this.state.inputVal,
                onChange: function onChange(e) {
                  return _this2.onVolumeChange(e.target.value);
                },
                onMouseUp: function onMouseUp(e) {
                  return _this2.updatePd(_this2.state.inputVal, _this2.state.delayVal);
                }
              }),
              React.createElement('input', {
                type: 'number',
                style: { textAlign: "center" },
                className: 'form-control col mb-2',
                max: '100',
                min: '0',
                value: this.state.inputVal,
                onChange: function onChange(e) {
                  _this2.onVolumeChange(e.target.value);_this2.updatePd(e.target.value, _this2.state.delayVal);
                }
              }),
              React.createElement(
                'label',
                null,
                'Delay'
              ),
              React.createElement('input', {
                type: 'range',
                className: 'form-range col',
                min: '0',
                max: '100',
                value: this.state.delayVal,
                onChange: function onChange(e) {
                  return _this2.onTodoChange(e.target.value);
                },
                onMouseUp: function onMouseUp(e) {
                  return _this2.updatePd(_this2.state.inputVal, _this2.state.delayVal);
                }
              }),
              React.createElement('input', {
                type: 'number',
                style: { textAlign: "center" },
                className: 'form-control col mb-2',
                max: '100',
                min: '0',
                value: this.state.delayVal,
                onChange: function onChange(e) {
                  _this2.onTodoChange(e.target.value);_this2.updatePd(_this2.state.inputVal, e.target.value);
                }
              })
            )
          ),
          React.createElement('div', { className: 'col-1 bg-secondary' })
        )
      );
    }
  }]);

  return InputMonitor;
}(React.Component);

export default InputMonitor;