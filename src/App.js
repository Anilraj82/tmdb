import React, { Component } from 'react';
import './App.css';
import { Card, CardTitle } from 'react-materialize';
import {Header} from "./Header";

export default class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <div className="content2">
                        <Card header={
                            <CardTitle
                                reveal
                                image={"https://image.tmdb.org/t/p/w500/5gJkVIVU7FDp7AfRAbPSvvdbre2.jpg"}

                                waves='light' />
                            }
                              title="PASSENGERS"
                              reveal={
                                  <div>
                                      <p><b>There is a reason they woke up.</b></p>
                                      <p>A spacecraft traveling to a distant colony planet and transporting thousands of people has a malfunction in its sleep chambers. As a result, two passengers are awakened 90 years early.</p>                                      <h5>Release date</h5>
                                      <h5>Release date</h5>
                                      <p>2016-12-21</p>
                                      <h5>Rating</h5>
                                      <p>6.7/10</p>
                                      <h5>Running time</h5>
                                      <p>116 min</p>
                                      <h5>Box office</h5>
                                      <p>$303144152</p>
                                  </div>
                              }>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}