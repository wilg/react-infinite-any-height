var React = require('react')
var ReactDOM = require('react-dom')
var ReactInfinite = require('react-infinite')

var InfiniteAnyHeight = React.createClass({
  getInitialState() {
    return {
      heights: [],
      list: [],
    }
  },

  addHeight(i, height) {
    var heights = this.state.heights
    heights[i] = height
    this.setState({heights})
  },

  componentDidMount() {
    this.setList(this.props.list)
  },

  componentWillReceiveProps(nextProps) {
    if (nextProps.list.length != this.props.list.length)
    this.setList(nextProps.list)
  },

  setList(propsList) {
    var heights = []
    var list =
    propsList.map( (x, i)=>{
      heights[i] = this.state.heights[i] || 200
      return (
        <GetHeightWrapper
          addHeight={this.addHeight.bind(this, i)}
          key={i}
        >
          {x}
        </GetHeightWrapper>
      )
    })
    this.setState({
      heights,
      list,
    })
  },

  render() {
    return (
      <ReactInfinite elementHeight={this.state.heights} useWindowAsScrollContainer>
        {this.state.list}
      </ReactInfinite>
    )
  }
})

var GetHeightWrapper = React.createClass({
  getInitialState() {
    return {height: undefined}
  },

  componentDidMount() {
    this.setHeight()
  },

  setHeight() {
    var height = ReactDOM.findDOMNode(this).getBoundingClientRect().height
    this.props.addHeight(height)
  },
  render() {
    var s = {
      content: ' ',
      display: 'block',
      clear: 'both',
    }
    return (
      <span style={s} className={this.state.height +'-px'}>
        {this.props.children}
      </span>
    )
  }
})

module.exports = InfiniteAnyHeight