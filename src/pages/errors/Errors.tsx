import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

const Errors = () => {
    return (
        <div className="container">
            Below are some errors when you try access the endpoint
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Error Code</th>
                        <th>Error Description</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Error 401</td>
                        <td>Invalid Username and/or Password</td>

                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Error 403</td>
                        <td>Missing mandatory field(s)</td>

                    </tr>
                    <tr>
                        <td>3</td>
                        <td >Error 404</td>
                        <td>Invalid URL</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td >Error 412</td>
                        <td>Wrong Company Id or Duplicate SystemTraceAuditNumber detected</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td >Error 500</td>
                        <td>Invalid Bank branch code</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td >Error 400</td>
                        <td>Query transaction with an Id that doesn”t exist</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td >Error 429</td>
                        <td>Too many requests</td>
                    </tr>
                </tbody>
            </Table>

        </div >
    )
}

export default Errors;