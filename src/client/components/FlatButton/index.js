import React from 'react';
import FlatButton from 'material-ui/FlatButton';

class Button extends React.Component {
  static propTypes = {
    buttonFilterColor: React.PropTypes.string,
    children: React.PropTypes.node,
    style: React.PropTypes.object
  };

  static defaultProps = {
    buttonFilterColor: '',
    style: {}
  };

  render() {
    const style = Object.assign({}, {lineHeight: '33px'}, this.props.style);

    return (
      <FlatButton {...this.props} style={style}>
        {React.Children.toArray(this.props.children)}
      </FlatButton>
    );
  }
}

export default Button;