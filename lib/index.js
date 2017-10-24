(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'react-dom', 'react-infinite', 'lodash.isequal', 'core-decorators', './GetHeightWrapper'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('react-dom'), require('react-infinite'), require('lodash.isequal'), require('core-decorators'), require('./GetHeightWrapper'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.React, global.propTypes, global.reactDom, global.reactInfinite, global.lodash, global.coreDecorators, global.GetHeightWrapper);
    global.index = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _reactDom, _reactInfinite, _lodash, _coreDecorators, _GetHeightWrapper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _reactInfinite2 = _interopRequireDefault(_reactInfinite);

  var _lodash2 = _interopRequireDefault(_lodash);

  var _GetHeightWrapper2 = _interopRequireDefault(_GetHeightWrapper);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

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

  var InfiniteAnyHeight = (0, _coreDecorators.autobind)(_class = (_temp2 = _class2 = function (_Component) {
    _inherits(InfiniteAnyHeight, _Component);

    function InfiniteAnyHeight() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, InfiniteAnyHeight);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InfiniteAnyHeight.__proto__ || Object.getPrototypeOf(InfiniteAnyHeight)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        heights: [],
        list: []
      }, _this.lastScrollTop = 0, _this.scrollTopDelta = 0, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(InfiniteAnyHeight, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.setList(this.props.list);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (!(0, _lodash2.default)(nextProps.list, this.props.list)) {
          this.setList(nextProps.list);
        }
      }
    }, {
      key: 'getScrollContainer',
      value: function getScrollContainer() {
        if (this.props.useWindowAsScrollContainer) {
          return document.body;
        }
        return _reactDom2.default.findDOMNode(this);
      }
    }, {
      key: 'addHeight',
      value: function addHeight(i, height) {
        var heights = this.state.heights;
        var scrollDiff = height - heights[i];

        if (scrollDiff && this.scrollTopDelta < 0) {
          this.getScrollContainer().scrollTop += scrollDiff;
        }

        heights[i] = height;
        this.props.heightsUpdateCallback(heights);
        this.setState({ heights: heights });
      }
    }, {
      key: 'setList',
      value: function setList(listProp) {
        var _this2 = this;

        var heights = [];

        var list = listProp.map(function (item, i) {
          heights[i] = _this2.state.heights[i] || _this2.props.heights[i] || 200;

          return _react2.default.createElement(
            _GetHeightWrapper2.default,
            {
              addHeight: function addHeight(height) {
                return _this2.addHeight(i, height);
              },
              key: i
            },
            item
          );
        });

        this.setState({ heights: heights, list: list });
      }
    }, {
      key: 'handleScroll',
      value: function handleScroll() {
        var scrollTop = this.getScrollContainer().scrollTop;
        this.scrollTopDelta = scrollTop - this.lastScrollTop;
        this.lastScrollTop = scrollTop;
        if (typeof this.props.handleScroll === 'function') {
          var _props;

          (_props = this.props).handleScroll.apply(_props, arguments);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          _reactInfinite2.default,
          _extends({
            elementHeight: this.state.heights,
            handleScroll: this.handleScroll
          }, this.props),
          this.state.list
        );
      }
    }]);

    return InfiniteAnyHeight;
  }(_react.Component), _class2.displayName = 'InfiniteAnyHeight', _class2.propTypes = {
    heights: _propTypes2.default.array,
    heightsUpdateCallback: _propTypes2.default.func,
    list: _propTypes2.default.node,
    scrollContainer: _propTypes2.default.object,
    useWindowAsScrollContainer: _propTypes2.default.bool
  }, _class2.defaultProps = {
    heightsUpdateCallback: function heightsUpdateCallback() {},
    heights: []
  }, _temp2)) || _class;

  exports.default = InfiniteAnyHeight;
});