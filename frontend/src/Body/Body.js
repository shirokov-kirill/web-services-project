import './Body.css'
import React from 'react';
import Child from './Child/Child'


class Body extends React.Component{

    #connectionManager;

    constructor(props){
        super(props);
        this.state = {renderingPage: props.pageType};
        this.#connectionManager = props.connectionManager;
        this.handleAuthConfirmation = this.handleAuthConfirmation.bind(this);
    }

    componentDidUpdate(prevProps){
        if (this.props.pageType !== prevProps.pageType) {
         this.setState({renderingPage: this.props.pageType});
       }
     }

    handleAuthConfirmation(type){
        this.props.handleAuth(type);
    }

    render(){
        return(
            <div className="main-body">
                <Child screen={this.state.renderingPage} serverConnector={this.#connectionManager} handleAuthConfirmation={this.handleAuthConfirmation}/>
            </div>
        );
    }
}

export default Body;