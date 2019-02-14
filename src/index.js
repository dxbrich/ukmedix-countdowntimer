import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class CountdownTimer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeRemaining: {
                h: '',
                m: '',
                interval: function () {

                }
            },
            startDate: new moment(),
            min: new Date(),
            startTimer: false
        }
        this.tick = this.tick.bind(this);
    }
    componentDidMount() {
        this.state.interval = setInterval(this.tick, 1000)
    }
    componentWillUnmount() {
        this.state.interval && clearInterval(this.state.interval);
    }

    tick() {
        if (typeof this.props.endDate  === typeof new Date()) {
            this.afterEachSecond(this.props.endDate);
        } else {
        }
    }
    afterEachSecond(endDate){
        var temp = {h: '', m: ''};
        var now = moment(); // today's date
        var end = moment(endDate); // end date
        var duration = moment.duration(end.diff(now));
        if (duration.asSeconds() >= 0) {
            if (Math.floor(duration.asHours()) > 0) { if (Math.floor(duration.hours()) < 10) { temp.h = '0'+ Math.floor(duration.hours())} else {temp.h = Math.floor(duration.hours())}}
            if (Math.floor(duration.asMinutes()) > 0) { if (Math.floor(duration.minutes()) < 10) { temp.m = '0'+ Math.floor(duration.minutes())} else {temp.m = Math.floor(duration.minutes())}}
        }
        this.setState({
            timeRemaining: temp
        })
    }
    render() {
        const timer = {
            display: 'flex',
            justifyContent: 'space-around'
        };
        const time = {
            color: 'white',
            fontSize: '74px',
        }
        const label = {
            fontSize: '22px',
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'white',
            minWidth: 'inherit',
            color: '#000',
            fontWeight: '100',
        }
        const section = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minWidth: '100px',
            minHeight: '100px',
            backgroundColor: 'black',
            borderRadius: '7px',
    }
        return (
            <div className="timer" style={timer}>
                {
                    this.state.timeRemaining.h &&
                    <div className="section hours" style={section}>
                        <div className="time" style={time}>{this.state.timeRemaining.h}</div>
                        <div className="label" style={label}>Hours</div>
                    </div>
                }
                {
                    this.state.timeRemaining.m &&
                    <div className="section minutes" style={section}>
                        <div className="time" style={time}>{this.state.timeRemaining.m}</div>
                        <div className="label" style={label}>Minutes</div>
                    </div>
                }
            </div>
        )
    }
}

CountdownTimer.propTypes = {
    endDate: PropTypes.object.isRequired,
}

export default CountdownTimer;
