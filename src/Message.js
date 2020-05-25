import React, {Component} from "react";
class Message extends Component {
    showMessageInConsole = (msg) =>{
        console.log(msg);
    }
    render() {
        this.showMessageInConsole("This is My Lovely Message for u!");
        return (
        <div>
            <h2 style={{color: this.props.color}}> Hi Gulu, {this.props.msg} </h2>
            <p> Love you  {this.props.times} </p>
        </div>
        );
    }
}

export default Message;
