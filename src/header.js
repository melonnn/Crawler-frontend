import React from 'react';
import 'bulma/css/bulma.min.css';
import { Block, Notification } from 'react-bulma-components';

class header extends React.Component { 
    render() {
        return (
            <Block>
                <Notification color="info">
                Crawler
                </Notification>
            </Block>      
        );

    }
}

export default header;