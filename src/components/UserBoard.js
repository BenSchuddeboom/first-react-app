import React, { Component } from 'react'
import User from './User'

export default class UserBoard extends Component {
    render() {
        return (
            <div>
                <h3>User Board</h3>
                <User name="Ben"/>
                <User name="Joe"/>
                <User name="Henry"/>
            </div>
        )
    }
}