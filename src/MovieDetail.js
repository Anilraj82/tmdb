import React, { Component } from 'react';
import { Card, CardTitle } from 'react-materialize';
import {Header} from "./Header";


const imageUrl = 'https://image.tmdb.org/t/p/w500';
export class MovieDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: null
        }
    }

    componentDidMount(){
        const {movieId} = this.props.match.params;
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=dabd0229faca72dc1e2d5fd2bed9c0e9&language=en-US`)
            .then(res => res.json())
            .then(dt => this.setState({movie: dt}))
    }

    render() {
        const {movie} = this.state;
        console.log('The movie is ', this.state.movie);

        return (
            <div>
                <Header/>
                { movie &&
                <div className="container">
                    <div className="content2">
                        <Card header = { <CardTitle reveal image={imageUrl + movie.poster_path} waves='light' /> }
                              title={movie.original_title}
                              reveal={
                                  <div>
                                      <p><b>{movie.tagline}</b></p>
                                      <p>{movie.overview}</p>
                                      <h5>Release date</h5>
                                      <p>{movie.release_date}</p>
                                      <h5>Rating</h5>
                                      <p>{movie.vote_average}/10</p>
                                      <h5>Running time</h5>
                                      <p>{movie.runtime} min</p>
                                      <h5>Box office</h5>
                                      <p>${movie.revenue}</p>
                                  </div>


                              }>
                        </Card>
                    </div>
                </div>
                }
            </div>
        );
    }
}