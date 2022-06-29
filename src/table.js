import React from 'react';
import 'bulma/css/bulma.min.css';
import { Box, Table, Image, Button } from 'react-bulma-components';

class table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }; 

        this.showDetail=this.showDetail.bind(this);
    }

    getInfo() {
        fetch("http://localhost:8000/api/crawler/getAll")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    items: result
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

    showDetail(e) {
        let id = e.target.id;
        this.props.detail(id);
    }

    componentDidMount() {
        this.getInfo();
    };

    componentDidUpdate(prevProps) {
        if (this.props.refresh != prevProps.refresh) {
            this.getInfo();
        }
    }

    render() {
        console.log(this.state.items);
        let infos = this.state.items.map((item) =>
            <tr>
                <td>
                    <a href={decodeURIComponent(item.url)} target="_blank" rel="noreferrer" >{item.title}</a>
                </td>
                <td>{decodeURIComponent(item.url)}</td>
                <td>{item.description}</td>
                <td>
                    <Image size="4by3" src={decodeURIComponent(item.image)} />
                </td>
                <td>{item.created_at}</td>
                <td>
                    <Button color="info" id={item.id} onClick={this.showDetail.bind(this)} > See more </Button>
                </td>
            </tr>
        );
        return (
            <Box mt='3'>
                <Table size='fullwidth'>
                    <thead>
                        <tr>
                            <th>
                                Title
                            </th>
                            <th>Url</th>
                            <th>
                                Description
                            </th>
                            <th>
                                Preview
                            </th>
                            <th>
                                Created at
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {infos}
                    </tbody>
                </Table>
            </Box>
        );

    }
}

export default table;