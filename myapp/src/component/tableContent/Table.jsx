import React, { Component } from 'react';

export default class Table extends Component {
    render() {
     return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col">
                        <table className="table table-hover ">
                            <thead className="headerColor">
                                <tr className="">
                                    <th>Name</th>
                                    <th>Lastname</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
)}}