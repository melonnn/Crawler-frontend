import React from 'react';
import 'bulma/css/bulma.min.css';
import { Modal,Media,Content,Image } from 'react-bulma-components';

class detail extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            result: [],
            show: false,
            id: ''
        }; 

        this.setOpenModal=this.setOpenModal.bind(this);
    }

    componentDidUpdate() {
        if (this.props.id != '' && this.state.show == false) {
            let id = this.props.id;
            let url = `http://localhost:8000/api/crawler/find/${id}`;
            // console.log(url);
            fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        result: result,
                        show: true,
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        error
                    });
                }
            );
        }
        
    }

    setOpenModal() {
        this.setState({
            show: false,
        });
        
    }

    render() {
            
        return (
            <Modal show={this.state.show == true} onClose={this.setOpenModal}>
                <Modal.Card>
                    <Modal.Card.Header showClose>
                        <Modal.Card.Title>
                            <a href={decodeURIComponent(this.state.result.url)} target="_blank" rel="noreferrer" >{this.state.result.title}</a>
                            <Content>{this.state.result.description}</Content>
                        </Modal.Card.Title>
                    </Modal.Card.Header>
                    <Modal.Card.Body>
                        <Media>
                        <Media.Item renderAs="figure" align="left">
                            <Image
                            size={64}
                            alt="64x64"
                            src={decodeURIComponent(this.state.result.image)}
                            />
                        </Media.Item>
                        <Media.Item>
                            {this.state.result.body}
                        </Media.Item>
                        </Media>
                    </Modal.Card.Body>
                </Modal.Card>
            </Modal>
        );

    }
}

export default detail;