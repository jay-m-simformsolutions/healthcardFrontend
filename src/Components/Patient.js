import React, { useState, useEffect } from 'react';
import { Switch ,Route, Redirect } from "react-router";
import { Jumbotron } from 'reactstrap';
import CaseDetails from "./CaseDetails";
import Prescription from "./Prescription";
import imgg from '../Jay_nayak.jpg';
//import pdf from 'D:/Project/dataset/Heart_Report.pdf';
//import pdf from './Heart_Report.pdf';
//import { Document, Page } from 'react-pdf';
//import PDFViewer from 'pdf-viewer-reactjs';
import axios from 'axios';

function Patient() {
    const instance = axios.create({
        baseURL: 'http://localhost:3000/api/',
    });
    const [pdfData, setPDFData] = useState(null);

    const getData = () => {
        instance.get('lab/downloadfile', {
            responseType: 'arraybuffer',
            headers: {
                Accept: 'application/pdf',
            },
        }).then(resp => {
            setPDFData(resp.data)
            const file = new Blob([resp.data],{ type: "application/pdf", filename: 'sample.pdf' , __filename: "sample.pdf" });
            const fileUrl = URL.createObjectURL(file);
            window.open(fileUrl, '_blank')
            console.log(resp);
            console.log('Done')
        })
        .catch(e => {
            console.log('Done')
            console.log(e)
        })
    }
    return (
        <div>
            <Jumbotron>
                <div className='container-fluid'>
                    <div className='row patientDetail'>
                            <div className='col-4'><h3>Patient ID: 170170107049</h3>
                            <h3>Name: Jay Nayak</h3>
                            <h5>Blood Group: O+</h5>
                            <a href="https://drive.google.com/file/d/1DZI2sBopPhkV2ZDfCc0GSUV6mB9Nhzy6/view?usp=sharing" target="_blank" rel="noreferrer">click here!</a>
                            <button onClick={() => getData()}>get pdf</button>
                        </div>
                        <div className='offset-5'><img className='patientimage' src={imgg} alt='Jay_nayak' /></div>                        
                    </div>
                </div>
            </Jumbotron>
            {/* <div>
                <Document
                    file={pdf} //"https://drive.google.com/file/d/1DZI2sBopPhkV2ZDfCc0GSUV6mB9Nhzy6/view?usp=sharing"
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
            </div>
            <div>
            <PDFViewer
                document={{
                    url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
                }}
            />
            </div> */}
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item ml-3 active">
                                <a className="nav-link" href="/patient/casedetail">Case Detail<span class="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item ml-5">
                                <a className="nav-link" href="/patient/pres">Prescription</a>
                            </li>
                            <li className="nav-item ml-5">
                                <a className="nav-link" href="#">Report</a>
                            </li>
                        </ul>
                    </div>
                </nav>  
                <Switch>
                    <Route path="/patient/pres" component={Prescription} />
                    <Route path="/patient/casedetail" component={CaseDetails} />
                    <Redirect to="/patient/casedetail" />
                </Switch>  
            </div> 
            
        </div>
    )
}

export default Patient;
