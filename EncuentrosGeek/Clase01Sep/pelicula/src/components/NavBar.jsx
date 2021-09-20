import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <>
                <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div class="container-fluid">
                        <Link to="/" class="navbar-brand">Navbar</Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" arial-label="Toggle navigation">
                            <span class="navbar-toggle-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarColor01">
                            <ul class="navbar-nav me-auto">
                                <li class="nav-item">
                                    <Link to="/" class="nav-link active">Home
                                        <span class="visually-hidden">(current)</span>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/" class="nav-link">Features</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/" class="nav-link">Pricing</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/" class="nav-link">About</Link>
                                </li>
                            </ul>
                            <form class="d-flex">
                                <input type="text" class="form-control me-sm-2" placeholder="Buscar" />
                                <button class="btn btn-secondary my-2 my-sm-0">Buscar</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
