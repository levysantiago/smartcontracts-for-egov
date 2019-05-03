import React, { Component } from "react";

class EnrollmentForm extends Component {
  render() {
    return (
      <div className="col s12 m6">
        <div className="card white">
          <div className="card-content black-text">
            <span className="card-title">Nova Matrícula</span>
            <div className="row">
              <div className="input-field col s12">
                <input id="first_name2" type="text" className="validate" />
                <label className="active" htmlFor="first_name2">
                  Nome
                </label>
              </div>

              <div className="input-field col s6">
                <input id="curso" type="text" className="validate" />
                <label className="active" htmlFor="curso">
                  Curso
                </label>
              </div>

              <div className="input-field col s6">
                <input id="ingresso" type="text" className="validate" />
                <label className="active" htmlFor="ingresso">
                  Ingresso
                </label>
              </div>

              <div className="input-field col s6">
                <input id="periodo" type="text" className="validate" />
                <label className="active" htmlFor="periodo">
                  Período
                </label>
              </div>

              <div className="input-field col s6">
                <input id="turno" type="text" className="validate" />
                <label className="active" htmlFor="turno">
                  Turno
                </label>
              </div>

              <div className="input-field col s12">
                <input id="conta" type="text" className="validate" />
                <label className="active" htmlFor="conta">
                  Conta Metamask
                </label>
              </div>
            </div>
          </div>
          <div className="card-action">
            <a href="#">Adicionar</a>
          </div>
        </div>
      </div>
    );
  }
}

export default EnrollmentForm;
