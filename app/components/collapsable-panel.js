'use strict';

import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Animated
} from 'react-native'
import { Icon } from 'react-native-elements'


const ICONS = {
  up: require('./images/arrow-up.png'),
  down: require('./images/arrow-down.png')
}

export default class Collapse extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      expanded: props.expanded,
      animation: new Animated.Value()
    }
  }

  toggle = () => {
    const { onToggle } = this.props
    const { expanded, maxHeight, minHeight, animation } = this.state
    const initialValue = expanded ? minHeight + maxHeight : minHeight
    const finalValue = expanded ? minHeight : minHeight + maxHeight

    this.setState({ expanded: !expanded })
    animation.setValue(initialValue)

    Animated.timing(animation, {
      toValue: finalValue
    }).start()

    onToggle()
  }

  render() {
    const { expanded, animation, maxHeight } = this.state
    const icon = expanded ? 'up' : 'down'

    return (
      <Animated.View style={[styles.container, { height: animation }]}>
        <View style={styles.titleContainer}
          onLayout={event => this.setState({ minHeight: event.nativeEvent.layout.height })}>
          <Text style={styles.title}>{this.props.title}</Text>
          <TouchableHighlight
            style={styles.button}
            onPress={this.toggle}
            underlayColor="#f1f1f1">
            <Image style={styles.buttonImage} source={ICONS[icon]} />
          </TouchableHighlight>
        </View>
        {/*fixed bug in recent version of react-native that maxHeight will be changed when body is collapsed*/}
        <View style={styles.body}
          onLayout={event => !maxHeight && this.setState({ maxHeight: event.nativeEvent.layout.height })}>
          {this.props.children}
        </View>
      </Animated.View>
    )
  }
}

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),
      icon: 'angle-right',
      onPressed: null,
      title: '',
      children: null,
      expanded: props.expanded,
      animation: new Animated.Value()
    };
  }

  componentDidMount() {
    if (this.props.clickable) {
      this.setState({
        icon: this.props.icon,
        onPressed: this.props.onPressed,
        title: this.props.title
      });
    } else if (this.props.collapsible) {
      Animated.timing(
        this.state.fadeAnim,
        { toValue: 1 }
      ).start();
      const openIcon = this.props.iconOpened || 'minus'
      const activeIcon = this.props.iconActive || 'plus'
      this.setState({
        icon: this.props.showOnStart ? openIcon : activeIcon,
        iconCollapsed: this.props.iconCollapsed || 'plus',
        iconOpened: this.props.iconOpened || 'minus',
        title: this.props.title
      });
    } else {
      this.setState({
        title: this.props.title
      });
    }

    this._tintColor = this.props.tintColor || '#FFF';
    this._iconSize = this.props.iconSize || 30;
  }

  render() {

    if (this.props.clickable) {
      return this._renderClickable();
    } else if (this.props.collapsible) {
      return this._renderCollapsible();
    } else {
      return this._renderDefault();
    }
  }

  _renderDefault() {
    return (
      <View style={styles.bar}>
        <Text style={[styles.title, this.props.titleStyle]}>{this.state.title}</Text>
      </View>
    );
  }

  _renderClickable() {
    return (
      <TouchableHighlight style={styles.barWrapper} underlayColor='transparent' onPress={this.state.onPressed}>
        <View style={[styles.bar, this.props.style]}>
          <Text style={[styles.title, this.props.titleStyle]}>{this.state.title}</Text>
          <Icon name={this.state.icon} size={this._iconSize} color={this._tintColor} style={styles.icon} />
        </View>
      </TouchableHighlight>
    );
  }

  _renderCollapsible() {
    return (
      <View>
        <TouchableHighlight style={styles.barWrapper} underlayColor='transparent' onPress={() => { this._toggleView() }}>
          <View style={[styles.bar, this.props.style]}>
            <Text style={[styles.title, this.props.titleStyle]}>{this.state.title}</Text>
            <Icon name={this.state.icon} size={this._iconSize} color={this._tintColor} style={styles.icon} />
          </View>
        </TouchableHighlight>
        {this.state.show && <Animated.View
          style={{ opacity: this.state.fadeAnim }}>
          {this.props.children}
        </Animated.View>}
      </View>
    );
  }

  _toggleView() {
    this.setState({
      show: !this.state.show,
      icon: this.state.show ? this.state.iconCollapsed : this.state.iconOpened
    });
  }
}

Panel.defaultProps = {
    expanded: true
  }

Panel.propTypes = {
  style: View.propTypes.style,
  titleStyle: Text.propTypes.style,
  tintColor: PropTypes.string,
  expanded: PropTypes.bool,
  title: PropTypes.string,
  onToggle: PropTypes.func
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 10,
    overflow: 'hidden'
  },
  titleContainer: {
    flexDirection: 'row'
  },
  title: {
    flex: 1,
    padding: 10,
    color: '#2a2f43',
    fontWeight: 'bold'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonImage: {
    width: 25,
    height: 20
  },
  body: {
    padding: 10,
    paddingTop: 0
  }
});