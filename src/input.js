import React from 'react';
import 'bulma/css/bulma.min.css';
import { Form, Button, Block } from 'react-bulma-components';
import validator from 'validator';

class input extends React.Component {
    constructor(props){
        super(props)
        this.state = ({
            url: '',
            showModal: false,
        })

        this.needRefresh=this.needRefresh.bind(this);
    }

    setUrl(url) {
        this.setState({
            url: url
        });
    }

    crawler() {
        this.setState({
            showModal: true
        });
        let url = this.state.url;
        let data = JSON.stringify({ 'url': url });
        // console.log(data);
        if (validator.isURL(url)) {
            fetch('http://localhost:8000/api/crawler/store', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: data,
            })
            .then(res => res.json())
            .then(
                (res) => {
                    console.log(res.result);
                    if (res.result == 1) {
                    this.needRefresh();
                    }
                },

                (error) => {
                    this.setState({
                        error
                    });
                }
            );
        } else {

        }

        // console.log(url);
    }

    needRefresh() {
        this.props.reload(true);
    }

    render() {
        return (
            <Block>
                <Form.Field mt='5'>
                    <Form.Label>Please Enter Url</Form.Label>
                    <Form.Control>
                        <Form.Input
                            size="medium"
                            placeholder="Url"
                            type="text"
                            // value={this.state.url}
                            onChange={(e) => {
                                return this.setUrl(e.target.value);
                              }} />
                    </Form.Control>
                </Form.Field>

                <Form.Field kind="group">
                    <Form.Control>
                        <Button color="info" onClick={this.crawler.bind(this)}>Crawler</Button>
                    </Form.Control>
                </Form.Field>
            </Block>
        );

    }
}

export default input;