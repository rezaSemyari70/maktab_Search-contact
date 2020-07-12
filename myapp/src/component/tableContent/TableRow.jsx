import React, { Component } from 'react';



export default class TableRow extends Component {

    render() {
        return (
                <tr>
                    <td>{this.props.name}</td>
                    <td>{this.props.lastname}</td>
                    <td>{this.props.email}</td>
                    <td>{this.props.phone}</td>
                </tr>  
        )
    }
}
