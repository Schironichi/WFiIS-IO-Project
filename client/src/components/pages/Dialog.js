import React from "react";
import './Dialog.css';

class Dialog extends React.Component {


    render() {
        let dialog = null;

        if( this.props.open === true )
            dialog = (
                <div id="main_body">
                    <button className="dialog_button" id="close_button" onClick={ this.props.onClose }> x </button>
                    <br/>
                    <p>
                        {this.props.children}
                    </p>
                    <button className="dialog_button" id="ok_button" onClick={ this.props.handleConfirm }> Tak </button>
                    <button className="dialog_button" id="cancle_button" onClick={ this.props.handleDecline }> Wyjdź </button>
                </ div>
            );
        
        return dialog;
    }

};


export default Dialog;