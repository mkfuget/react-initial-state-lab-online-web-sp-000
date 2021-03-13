// your Bomb code here!
class ImageSlider extends React.Component {
  constructor() {
    super()
    this.state = {
      count: this.props.initialCount
    }
  }
  render() {
    return (
      this.state.count === 0 ? 'Boom!':`${this.state.count} seconds left before I go boom`
    )
  }
}
