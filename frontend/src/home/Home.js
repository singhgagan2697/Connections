import React, { Component } from 'react';
import NavigationBar from '../navbar/NavigationBar';
import './style.css';

class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavigationBar/>
                <header id="home-section">
                        <div className="dark-overlay">
                            <div className="home-inner">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 text-white">
                                        <h1 className="display-4">Build your<strong> Connections </strong> and <strong>meet</strong> new people!</h1>
                                        <div className="d-flex flex-row">
                                        <div className="p-4 align-self-end">
                                            Create an account or sign in and easily find people!
                                        </div>
                                        </div>

                                        <div className="d-flex flex-row">
                                        <div className="p-4 align-self-end">
                                            Many content to find!
                                        </div>
                                        </div>
                                        <div className="d-flex flex-row">
                                        <div className="p-4 align-self-end">
                                            Social media has never been more fun!
                                        </div>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                            </div>
                        </div>
                    </header>
            </div>
        );
    }
}

export default Home;