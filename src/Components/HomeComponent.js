import React , { Component } from 'react';
import {Button, FormGroup, Label, Input, Form} from 'reactstrap';

class Home extends Component {
    render() {
        return(
            <div className="container">
                <h2>Home</h2><hr />
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <Form className="mt-2" onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="userid">Enter Patient Id</Label>
                                <Input type="text" id="userid" name="userid" placeholder="Patient Id" 
                                    innerRef = {(input) => this.useid = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="userPass">Enter OTP</Label>
                                <Input type="password" id="userPass" name="userPass" placeholder="OTP" 
                                    innerRef = {(input) => this.userPass = input} />
                            </FormGroup>
                            <Button type="submit" className="btn mt-2 btn-primary" value="submit">Login</Button>
                        </Form>
                    </div>
                    
                    <div className="col-md-8 border mb-3">
                        <div className="row">
                            <div className="col-md-6 mt-3">
                                <h3 className="ml-2">History</h3>
                            </div>
                            <div className="col-md">
                            <Form className="mt-2" onSubmit={this.handleLogin}>
                                <div className="row">
                                    <div className="col-md-8 mt-2">
                                        <FormGroup>
                                            <Input type="text" id="search" name="search" placeholder="Search" 
                                                innerRef = {(input) => this.useid = input} />
                                        </FormGroup>
                                    </div>
                                    <div className="col-md-4">
                                        <Button type="submit" className="btn mt-2 btn-primary" value="submit"><span className="fa fa-search"></span>Search</Button>
                                    </div>
                                </div>
                            </Form> 
                            </div>
                        </div>
                        <hr/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
