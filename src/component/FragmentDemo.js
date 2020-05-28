import React, { Component } from 'react'

export class FragmentDemo extends Component {
    render() {
        return (
            <React.Fragment key='1'>
                <h1> Hi, Fragment </h1>
                <p> This is rapped inside one Fragment, which is not added in the dom tree as extra element</p>
                <>
                   <h3> This is also an fragment having limitation  that it cannot take key as prop</h3>
                </>
            </React.Fragment>
        )
    }
}

export default FragmentDemo
