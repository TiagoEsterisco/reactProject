import React from 'react';
import { discardNotification  } from '../actions/filterAction'

export default class Notification extends React.Component {
    discardNotification(){
        this.props.dispatch(discardNotification())
    }

    setText(AmountOfNotifications){
        let plural = AmountOfNotifications > 1 ? 's':'';
        let text = `Your filter${plural}: `;
        return text;
    }

    render() {
        const {notification} = this.props
        let notifyTemplate;

        if(notification.haveMatch){
            let filterNames = [];
            let text = this.setText(notification.filters.length);

            notification.filters.forEach((filter)=>{
                filterNames = [...filterNames, filter.name];
            });

            notifyTemplate = <h6 onClick={this.discardNotification.bind(this)}> {text} "{filterNames.toString()}" match a new event </h6>;
        }

        return ( <div> {notifyTemplate} </div> );
    }
}
