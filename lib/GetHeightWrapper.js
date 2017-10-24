(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'core-decorators'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('core-decorators'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.React, global.propTypes, global.coreDecorators);
    global.GetHeightWrapper = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _coreDecorators) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var _class, _class2, _temp2;

  var style = {
    display: 'block',
    clear: 'both'
  };

  var GetHeightWrapper = (0, _coreDecorators.autobind)(_class = (_temp2 = _class2 = function (_Component) {
    _inherits(GetHeightWrapper, _Component);

    function GetHeightWrapper() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, GetHeightWrapper);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GetHeightWrapper.__proto__ || Object.getPrototypeOf(GetHeightWrapper)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        height: undefined
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(GetHeightWrapper, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.setHeight();
      }
    }, {
      key: 'setHeight',
      value: function setHeight() {
        var height = this.node.getBoundingClientRect().height;
        this.props.addHeight(height);
        this.setState({ height: height });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        return _react2.default.createElement(
          'span',
          {
            ref: function ref(node) {
              return _this2.node = node;
            },
            style: style
          },
          this.props.children
        );
      }
    }]);

    return GetHeightWrapper;
  }(_react.Component), _class2.propTypes = {
    addHeight: _propTypes2.default.func,
    children: _propTypes2.default.node
  }, _temp2)) || _class;

  exports.default = GetHeightWrapper;
});