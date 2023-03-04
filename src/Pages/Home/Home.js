import React, { Component } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import './Home.css';
import Images from '../../ProjectImages/ProjectImages';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Header />
                <div class="splash-container">
                    <h1 class="splash-subhead">WEB CHAT APP</h1>
                    <p class="splash-subhead">
                        Let's talk with our parents
                    </p>
                    <div id="custom-button-wrapper">
                        <Link to='/login'>
                            <a class="my-super-cool-btn">
                                <div class="dots-container">
                                    <div class="dot"></div>
                                    <div class="dot"></div>
                                    < div class="dot"></div>
                                    <div class="dot"></div>
                                </div>
                                <span className='buttoncooltext'>Get Started</span>
                            </a>
                        </Link>
                    </div>
                </div>
                <div class="content-wrapper">
                    <div class="content">
                        <h2 class="content-head is-center">Feature Of Web Chat Application </h2>

                        <div className='Appfeature'>
                            <div className='contenthead'>

                                <h3 class="content-subbhead">
                                    <i class="fa fa-rocket"></i>
                                    Get Started Quickly
                                </h3>
                                <p> Just Register youself with this app and start chating with your loved ones</p>
                            </div>
                            <div class="1-box pure-u-md-1-2 pure-u-lg-1-4">
                                <h3 class="content-subhead">
                                    <i class="fa fa-sign-in"></i>
                                    Firebase Authentication
                                </h3>
                                <p>Firebase Authentication has been implemented in this app</p>
                            </div>
                            <div class="1-box pire-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                                <h3 class="content-subhead">
                                    <i class="fa fa-th-large"> </i>
                                    Media
                                </h3>
                                <p>You can share images with your friends for better experience</p>
                            </div>
                            <div class="1-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                                <h3 class="content-subhead">
                                    <i class="fa fa-refresh"></i>
                                    updates
                                </h3>
                                <p>We will working with new features for this app for better experience in future</p>
                            </div>
                        </div>
                    </div>

                    <div class="AppfeaturesFounder">
                        <div class="1-box-lrg is-center pure-u-1 pure-u-md-1-2 pure-u-lg-2-5">
                            <img width="300" alt="File Icons" class="pure-img-responsive" src={Images.r1} />
                        </div>
                        <div class="pure-u-1 pure-u-md-1-2 pure-u-lg-3-5">
                            <h2 class="content-head content-head-ribbon"> Ravi kumar</h2>
                            <p style={{ color: 'white' }} >
                                The Founder of Ravi Development infotech
                            </p>
                            <p style={{ color: 'white' }} >
                                Currently i am studing pursuing bca from amity university patna and i love to coding. i am explore new ideas in  my free time
                            </p>
                        </div>
                    </div>

                    <div class="content">
                        <h2 class="content-head is-center"> Who We are?</h2>
                        <div class="AppFeatures">
                            <div class="1-box-lrg pure-u-1 pure-u-md-2-5">
                                <form class="pure-form pure-form-stacked">
                                    <fieldset>
                                        <label for="name">Your Name</label>
                                        <input id="name" type="text" placeholder="your Name"></input>

                                        <label for="email">Your E-mail</label>
                                        <input id="email" type="text" placeholder="your e-mail"></input>

                                        <label for="password"> Enter Password</label>
                                        <input id="password" type="text" placeholder="your password"></input>
                                        <button type="submit" class="Pure-button">Sign Up</button>
                                    </fieldset>
                                </form>
                            </div>

                            <div class="1-box-lrg pure-u-1 pure-u-md-3-5">
                                <h4>Contact Us</h4>
                                <p>
                                    For any question or suggestion you can directly contact us on our facebook page:
                                    <a href="https://www.facebook.com/">This is our facebook page </a>
                                </p>
                                <p>
                                    instagram :<a href="https://www.instagram.com/"> This is our instagram page</a>
                                </p>
                                <p>
                                    Twitter:<a href="https://twitter.com/?lang=en-in"> This is our twitter page</a>
                                </p>
                                <p>
                                    linkedin:<a href="https://www.linkedin.com/"> This is our linkedin page</a>
                                </p>

                                <h4>More information</h4>
                                <p>To whom it may concern</p>
                                <p>This app is developed for our collage project purpose <br />
                                    developed by -Ravi kumar
                                </p>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>


            </div>
        )
    }
}