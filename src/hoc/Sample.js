import React, { Component } from 'react';

class RandomComponent extends Component {
    render() {
        return <div style={{ height: '100px', width: '200px', backgroundColor: this.props.color || 'grey' }}>{this.props.description}</div>
    }
}

function AddColorProps(WrappedComponent) {
    let color = 'tomato'
    return class ColorWrapper extends Component {
        render() {
            return <WrappedComponent color={color} {...this.props} />
        }
    }
}

const ColoredComponent = AddColorProps(RandomComponent)

export {
    ColoredComponent,
    RandomComponent
}