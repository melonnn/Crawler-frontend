import React from 'react';
import { Container } from 'react-bulma-components';
import Header from './header.js';
import Input from './input.js';
import Table from './table.js';
import Detail from './detail.js';

class list extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            refresh: false,
            id: ''
        }; 
        this.needRefresh=this.needRefresh.bind(this);
        this.showDetail=this.showDetail.bind(this);

    }

    needRefresh(target) {
        this.setState({
            refresh: target
        });
    }

    showDetail(id) {
        this.setState({
            id: id
        });
    }

    render() {
        return (
            <Container className="App">
                <Header />
                <Input reload={this.needRefresh} />
                <Table refresh={this.state.refresh} detail={this.showDetail} />
                <Detail id={this.state.id }/>
            </Container>    
        );

    }
}

export default list;
