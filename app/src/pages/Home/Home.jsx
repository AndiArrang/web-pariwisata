import React from "react";
import '../Home/Home.css';
import Banner from "../../component/banner/Banner";
import Navbar from "../../component/Navbar/Navbar";

const Home = () => {

    return(
            <div className="container-home">
                <header className="header-home">
                    <div className="content-slider">
                        <div className="info-slider">
                            <h5>Welcome to Wonderfull Sul-Sel</h5>
                            <h1>Jelajahi Keindahan Sulawesi Selatan Dengan Paket Liburan Wonderfull Sul-Sel </h1>
                            <button type="button" class="btn-order">Book Now</button>
                        </div>
                    </div>
                    <Banner />
                <Navbar />
                </header>
                <section className="section-place">
                    <h1>Discover Your Perfect Place</h1>
                    <div className="list-place">
                        <div class="card card-place">
                            <img src="https://images.unsplash.com/photo-1622222455965-f3dc621f7cc1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <p class="card-text"> Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="card card-place">
                            <img src="https://images.unsplash.com/photo-1622222455965-f3dc621f7cc1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <p class="card-text">S\e and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="card card-place">
                            <img src="https://images.unsplash.com/photo-1622222455965-f3dc621f7cc1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="card card-place">
                            <img src="https://images.unsplash.com/photo-1622222455965-f3dc621f7cc1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <p class="card-text">S\e and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="card card-place">
                            <img src="https://images.unsplash.com/photo-1622222455965-f3dc621f7cc1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="card card-place">
                            <img src="https://images.unsplash.com/photo-1622222455965-f3dc621f7cc1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <p class="card-text">S\e and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="card card-place">
                            <img src="https://images.unsplash.com/photo-1622222455965-f3dc621f7cc1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="card card-place">
                            <img src="https://images.unsplash.com/photo-1622222455965-f3dc621f7cc1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <p class="card-text">S\e and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-why">
                    <h1>Why Wonderfull SulSel</h1>
                    <div className="list-why">
                        {/* row 1 */}        
                        <div className="text text-1">
                           <h3>Lorem ipsum dolor sit.</h3>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, explicabo! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti dolorum quis magni.</p>
                        </div>
                        <div className="line line-1">
                            <div className="border-point">
                            </div>
                        </div>
                        <div className="img">
                            <img src="https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRyYXZlbCUyMHBsYW5lfGVufDB8fDB8fHww" alt="" />
                        </div>
                        {/* row 2 */}
                        <div className="img">
                            <img src="https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRyYXZlbCUyMHBsYW5lfGVufDB8fDB8fHww" alt="" />
                        </div>
                        <div className="line line-2">
                            <div className="border-point">
                            </div>
                        </div>
                        <div className="text text-2">
                           <h3>Lorem ipsum dolor sit.</h3>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, explicabo! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti dolorum quis magni.</p>
                        </div>
                        {/* row 3 */}
                        <div className="text text-3">
                           <h3>Lorem ipsum dolor sit.</h3>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, explicabo! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti dolorum quis magni.</p>
                        </div>
                        <div className="line">
                            <div className="border-point">
                            </div>
                        </div>
                        <div className="img">
                            <img src="https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRyYXZlbCUyMHBsYW5lfGVufDB8fDB8fHww" alt="" />
                        </div>
                        {/* row 4 */}
                        <div className="img">
                            <img src="https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRyYXZlbCUyMHBsYW5lfGVufDB8fDB8fHww" alt="" />
                        </div>
                        <div className="line">
                            <div className="border-point">
                            </div>
                        </div>
                        <div className="text text-4">
                           <h3>Lorem ipsum dolor sit.</h3>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, explicabo! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti dolorum quis magni.</p>
                        </div>
                        
                    </div>
                </section>
            </div>
    )
}

export default Home;
