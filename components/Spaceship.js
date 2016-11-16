const React = require('react')

class SpaceShip extends React.Component{
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.speed}</p>
        <p>{this.props.hasRockets.toString()}</p>
        <p>{this.props.colors}</p>
      </div>
    )
  }
}

SpaceShip.defaultProps= {
  name: "Millennium Falcon",
  speed: 'over 9000',
  hasRockets: false,
  colors: ["black", "red"]
}

module.exports = SpaceShip;
