import React, {Component} from 'react'

export default class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hours: new Date().getHours(),
            minutes: new Date().getMinutes(),
            seconds: new Date().getSeconds(),
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.updateTime(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    updateTime() {
        this.setState({
            hours: new Date().getHours(),
            minutes: new Date().getMinutes(),
            seconds: new Date().getSeconds(),
        })
    }

    render() {
        return (
            <div id="clock">
                <span id="hours">{this.state.hours}:</span>
                <span id="mins">{this.state.minutes}:</span>
                <span id="secs">{this.state.seconds}</span>
            </div>
        )
    }
}