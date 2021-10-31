import React from 'react'
import AgregarCitas from '../components/AgregarCitas'
import ListarCita from '../components/ListarCita'
import { Provider } from 'react-redux'
import store from '../store/store'

const AgendaApp = () => {
    return (
        <Provider store={store}>
          <div className="container text-center">
            <header><h1>EPS Sura</h1></header>
            <div className="row mt-3">
              <div className="col-md-6">
                <AgregarCitas />
              </div>
              <div className="col-md-6">
                <ListarCita />
              </div>
            </div>
          </div>
        </Provider>
    )
}

export default AgendaApp
