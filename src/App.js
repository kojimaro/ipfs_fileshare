import React, { Component } from 'react';
import Swarm from 'swarm-js';
import {Grid, Row, Col, FormGroup, ControlLabel} from 'react-bootstrap';
import Result from './presentational/atoms/result.js';
import Load from './presentational/atoms/load.js';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            swarmHash: null,
            isImg: false,
            isUploading: false,
            isComplete: false
        }
    }

    handleFile = (event) => {
        event.stopPropagation();
        event.preventDefault();

        this.setState({isUploading: true, isComplete: false});


        const file = event.target.files[0];
        if (file.type.match('image.*')) {
            this.setState({isImg: true});
        } else {
            this.setState({isImg: false});
        }

        let reader = new window.FileReader();

        //アップロードするファイルのバイナリを読み込む
        reader.readAsArrayBuffer(file);
        reader.onloadend = () => this.convertToBuffer(reader);
    }

    //アップロードするファイルのバイナリをUint8Arrayとして扱う
    convertToBuffer = async(reader) => {
        const buffer = await Buffer.from(reader.result);
        this.uploadToSwarm(buffer);
    }

    uploadToSwarm = (buffer) => {
        Swarm.at("http://swarm-gateways.net").upload(buffer).then(hash => {
            this.setState({swarmHash: hash, isUploading: false, isComplete: true});
        },(reason) => {
            this.setState({swarmHash: '', isUploading: false, isComplete: false});
            console.log(reason);
        });
    }

    render() {
        return (
            <section>
                <form id="swarmForm">
                    <div className="container">
                        <Grid>
                            <Row>
                                <Col md={12}>
                                    <h5>You can share your file by SWARM.</h5>
                                    <FormGroup>
                                        <ControlLabel>Choose image file</ControlLabel>

                                        <div className="dropzone-wrapper">
                                            <div className="dropzone-desc">
                                                <i className="glyphicon glyphicon-download-alt"></i>
                                                <p>Select or Drop image file</p>
                                            </div>
                                            <input type="file" name="img_logo" className="dropzone" id="publish" onChange={this.handleFile}/>
                                        </div>
                                    </FormGroup>
                                    <p> Please do not upload ilegal contents. This service assumes no responsibility.</p>
                                    <p>This is open source project, source code is available on <a href="https://github.com/kojimaro/swarm_fileshare">Github</a></p>

                                    <Load isUploading={this.state.isUploading} />

                                    <Result data={this.state} />
                                </Col>
                            </Row>
                        </Grid>
                    </div>
                </form>
            </section>
        );
    }
}

export default App;
