import React, {Component,Fragment}from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,

  } from 'react-router-dom';

import Home from "../pages/Home/Home";

class RoutesPages extends Component {
    render() {
        return(
            <Router>
                <Fragment>    
                    <Routes>
                    <Route 
                        path="/" 
                        element={ 
                            <Fragment>
                                <div className="container-fluid">
                                <Home />
                                </div>
                            </Fragment>                       
                        } 
                    /> 
                    <Route path="*" element={<Home />} />
                    </Routes>
                </Fragment>
            </Router>
        )
    }
}
export default RoutesPages;