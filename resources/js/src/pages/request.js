import React, {Component} from 'react';

class Request extends Component{
    constructor(props){
        super(props);
    }

    getCookie(name) {
        var re = new RegExp(name + "=([^;]+)");
        var value = re.exec(document.cookie);
        return (value != null) ? unescape(value[1]) : null;
    }

    render(){
        return(
            <div>Hello</div>
        );
    }
}

export default Request;