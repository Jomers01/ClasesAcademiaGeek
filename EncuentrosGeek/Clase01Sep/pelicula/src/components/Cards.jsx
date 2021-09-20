import React, { Component } from 'react'
import 'bootswatch/dist/solar/bootstrap.min.css'

export default class Cards extends Component {
    render() {
        const {Title, Poster, Year} = this.props.movies
        return (
            <div className="container ms-1 text-center">
                <div className="col">
                    <div className="card text-white bg-dark mb-3">
                        <img src={Poster} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{Title}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{Year}</h6>
                        </div>
                        <div className="m-2">
                            <a 
                                href="/" 
                                className="btn btn-danger"
                                >detalle
                                </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
