import './Body.css'
import React from 'react';
import PageType from '../Header/BodyCommunicating/PageType';
import Child from './Child/Child'


class Body extends React.Component{

    #connectionManager;

    constructor(props){
        super(props);
        this.state = {renderingPage: props.pageType};
        console.log(this.state);
        console.log(this.state);
        this.#connectionManager = props.connectionManager;
        console.log(this.state);
        this.handleAuthConfirmation = this.handleAuthConfirmation.bind(this);
    }

    componentDidUpdate(prevProps){
        if (this.props.pageType !== prevProps.pageType) {
         this.setState({renderingPage: this.props.pageType});
       }
     }

    handleAuthConfirmation(){
        this.props.handleAuthConfirmation();
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