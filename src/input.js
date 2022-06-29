import React from 'react';
import 'bulma/css/bulma.min.css';
import { Form, Button, Block } from 'react-bulma-components';

class input extends React.Component {
    render() {
        return (
            <form>
                <Block>
                    <Form.Field mt='5'>
                        <Form.Label>Please Enter Url</Form.Label>
                        <Form.Control>
                            <Form.Input
                                size="medium"
                                placeholder="Url"
                                type="text"
                            />
                        </Form.Control>
                    </Form.Field>

                    <Form.Field kind="group">
                        <Form.Control>
                            <Button color="info">Crawler</Button>
                        </Form.Control>
                    </Form.Field>
                </Block>
            </form>
        );

    }
}

export default input;