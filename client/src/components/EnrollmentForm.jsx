import React, { Component } from "react";

class EnrollmentForm extends Component {
  resetInput = input => {
    input.value = "";
    input.className = "active";
  };

  printTitle = edit => {
    if (edit) {
      return <span className="card-title">Editar Matrícula</span>;
    } else {
      return <span className="card-title">Nova Matrícula</span>;
    }
  };

  printButton = (edit, onclick, onedit) => {
    if (edit) {
      return (
        <button
          className="waves-effect small waves-light btn"
          onClick={async () => {
            await onedit();
            this.resetInput(document.getElementById("name"));
            this.resetInput(document.getElementById("course"));
            this.resetInput(document.getElementById("ingress"));
            this.resetInput(document.getElementById("period"));
            this.resetInput(document.getElementById("shift"));
            this.resetInput(document.getElementById("student"));
          }}
        >
          Editar
        </button>
      );
    } else {
      return (
        <button
          className="waves-effect small waves-light btn"
          onClick={async () => {
            await onclick();
            this.resetInput(document.getElementById("name"));
            this.resetInput(document.getElementById("course"));
            this.resetInput(document.getElementById("ingress"));
            this.resetInput(document.getElementById("period"));
            this.resetInput(document.getElementById("shift"));
            this.resetInput(document.getElementById("student"));
          }}
        >
          Adicionar
        </button>
      );
    }
  };

  printAccountInput = (edit, onchange, value) => {
    if (edit) {
      return (
        <input
          id="student"
          type="text"
          className="validate"
          name="student"
          value={value}
          disabled
        />
      );
    } else {
      return (
        <input
          id="student"
          type="text"
          className="validate"
          onChange={onchange.bind(this)}
          name="student"
        />
      );
    }
  };

  render() {
    const { edit } = this.props;
    if (edit) {
      return <div className="col s12 m6">{this.printEditForm(this.props)}</div>;
    } else {
      return <div className="col s12 m6">{this.printAddForm(this.props)}</div>;
    }
  }

  printAddForm = props => {
    const { onChange, onClick } = props;
    return (
      <div className="card white">
        <div className="card-content black-text">
          <span className="card-title">Nova Matrícula</span>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="name"
                type="text"
                className="validate"
                onChange={onChange.bind(this)}
                name="name"
              />
              <label className="active" htmlFor="name">
                Nome
              </label>
            </div>

            <div className="input-field col s6">
              <input
                id="course"
                type="text"
                className="validate"
                onChange={onChange.bind(this)}
                name="course"
              />
              <label className="active" htmlFor="course">
                Curso
              </label>
            </div>

            <div className="input-field col s6">
              <input
                id="ingress"
                type="text"
                className="validate"
                onChange={onChange.bind(this)}
                name="ingress"
              />
              <label className="active" htmlFor="ingress">
                Ingresso
              </label>
            </div>

            <div className="input-field col s6">
              <input
                id="period"
                type="text"
                className="validate"
                onChange={onChange.bind(this)}
                name="period"
              />
              <label className="active" htmlFor="period">
                Período
              </label>
            </div>

            <div className="input-field col s6">
              <input
                id="shift"
                type="text"
                className="validate"
                onChange={onChange.bind(this)}
                name="shift"
              />
              <label className="active" htmlFor="shift">
                Turno
              </label>
            </div>

            <div className="input-field col s12">
              <input
                id="student"
                type="text"
                className="validate"
                onChange={onChange.bind(this)}
                name="student"
              />
              <label className="active" htmlFor="student">
                Conta Metamask
              </label>
            </div>
          </div>
        </div>
        <div className="card-action" id="addMatricula">
          <button
            className="waves-effect small waves-light btn"
            onClick={async () => {
              await onClick();
              this.resetInput(document.getElementById("name"));
              this.resetInput(document.getElementById("course"));
              this.resetInput(document.getElementById("ingress"));
              this.resetInput(document.getElementById("period"));
              this.resetInput(document.getElementById("shift"));
              this.resetInput(document.getElementById("student"));
            }}
          >
            Adicionar
          </button>
        </div>
      </div>
    );
  };

  printEditForm = props => {
    const { onChange, onEdit, enrollment } = props;
    document.getElementById("name").value = enrollment.name;
    document.getElementById("course").value = enrollment.course;
    document.getElementById("ingress").value = enrollment.ingress;
    document.getElementById("period").value = enrollment.period;
    document.getElementById("shift").value = enrollment.shift;
    document.getElementById("student").value = enrollment.student;

    return (
      <div className="card white">
        <div className="card-content black-text">
          <span className="card-title">Editar Matrícula</span>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="name"
                type="text"
                className="validate"
                onChange={onChange.bind(this)}
                name="name"
                //value={enrollment.name}
              />
              <label className="active" htmlFor="name">
                Nome
              </label>
            </div>

            <div className="input-field col s6">
              <input
                id="course"
                type="text"
                className="validate"
                onChange={onChange.bind(this)}
                name="course"
                //value={enrollment.course}
              />
              <label className="active" htmlFor="course">
                Curso
              </label>
            </div>

            <div className="input-field col s6">
              <input
                id="ingress"
                type="text"
                className="validate"
                onChange={onChange.bind(this)}
                name="ingress"
                //value={enrollment.ingress}
              />
              <label className="active" htmlFor="ingress">
                Ingresso
              </label>
            </div>

            <div className="input-field col s6">
              <input
                id="period"
                type="text"
                className="validate"
                onChange={onChange.bind(this)}
                name="period"
                //value={enrollment.period}
              />
              <label className="active" htmlFor="period">
                Período
              </label>
            </div>

            <div className="input-field col s6">
              <input
                id="shift"
                type="text"
                className="validate"
                onChange={onChange.bind(this)}
                name="shift"
                //value={enrollment.shift}
              />
              <label className="active" htmlFor="shift">
                Turno
              </label>
            </div>

            <div className="input-field col s12">
              <input
                id="student"
                type="text"
                className="validate"
                name="student"
                //value={enrollment.student}
                disabled
              />
              <label className="active" htmlFor="student">
                Conta Metamask
              </label>
            </div>
          </div>
        </div>
        <div className="card-action" id="addMatricula">
          <button
            className="waves-effect small waves-light btn"
            onClick={async () => {
              await onEdit();
              this.resetInput(document.getElementById("name"));
              this.resetInput(document.getElementById("course"));
              this.resetInput(document.getElementById("ingress"));
              this.resetInput(document.getElementById("period"));
              this.resetInput(document.getElementById("shift"));
              this.resetInput(document.getElementById("student"));
            }}
          >
            Editar
          </button>
        </div>
      </div>
    );
  };
}

export default EnrollmentForm;