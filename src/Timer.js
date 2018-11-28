import React, { Component } from 'react';
import Time from './Time.js'

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeNew : 0
        }
        this.start = this.start.bind(this) 
        this.stop = this.stop.bind(this)
        this.reset = this.reset.bind(this)  
    }
    start () {
        if(this.state.interval){
            return
        }
        const interval = setInterval(
            () => {
                    this.setState({
                         timeNew: this.state.timeNew + 1000
             })
        }, 
        1000 
        )
        this.setState({
            interval : interval 
        })
        
    }

    stop(){
        if(!this.state.interval){
            return
        }
        clearInterval(this.state.interval)
        this.setState({
            interval: undefined
        })
    }
    reset(){
        this.setState({
            timeNew : 0
        })
    }

    render() { 
        return <div>
            <Time milliseconds={this.state.timeNew}/>
            <input 
                className ="btn-secondary"
                type="button"
                value="Start"
                onClick={this.start}
                onDoubleClick={this.stop} />
            {/* <input 
                className ="btn-secondary"
                type="button"
                value="Pause"
                onClick={this.stop} /> */}
            <input 
                className ="btn-secondary"
                type="button"
                value="Reset"
                onClick={this.reset} />
            <h6>* Double Click Start For Pause </h6>
        </div>
    }
}
 
export default Add ;