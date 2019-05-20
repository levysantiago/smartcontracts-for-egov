import React, { Component } from "react";
import Input from "./Input";

class EnrollmentCard extends Component {
  componentDidMount() {
    const { enrollment } = this.props;
    if (enrollment) {
      document.getElementById("account").value = enrollment.student;
      document.getElementById("name").value = enrollment.name;
      document.getElementById("course").value = enrollment.course;
      document.getElementById("ingress").value = enrollment.ingress;
      document.getElementById("period").value = enrollment.period;
      document.getElementById("shift").value = enrollment.shift;
    }
  }

  resetInput = input => {
    input.value = "";
    input.className = "active";
  };

  render() {
    const { onChange, onAddSubject } = this.props;
    return (
      <div className="col s12">
        <div className="card white">
          <div className="card-content black-text row">
            <span className="card-title">My Enrollment Proof</span>
            <Input
              col="s4"
              id="account"
              name="account"
              title="Ethereum Account"
              disabled={true}
            />
            <Input
              col="s6"
              id="name"
              name="name"
              title="Name"
              disabled={true}
            />
            <Input
              col="s2"
              id="ingress"
              name="ingress"
              title="Ingress"
              disabled={true}
            />
            <Input
              col="s8"
              id="course"
              name="course"
              title="Course"
              disabled={true}
            />
            <Input
              col="s2"
              id="period"
              name="period"
              title="Period"
              disabled={true}
            />
            <Input
              col="s2"
              id="shift"
              name="shift"
              title="Shift"
              disabled={true}
            />
            {/*Subjects*/}
            <span className="card-title">Subjects</span>
            <table>
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Subject</th>
                  <th>Class</th>
                  <th>Credit</th>
                  <th>Schedule</th>
                  <th>Room</th>
                </tr>
              </thead>

              <tbody>
                {this.props.enrollment.subjects.map(s => (
                  <tr key={s.key}>
                    <td>{s.code}</td>
                    <td>{s.name}</td>
                    <td>{s.class}</td>
                    <td>{s.credit}</td>
                    <td>{s.schedule}</td>
                    <td>{s.room}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card-action">
            <a href="javascript:void(0)" className="activator">
              Add new Subject
            </a>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              Add new Subject<i className="material-icons right">close</i>
            </span>
            <Input
              col="s4"
              id="code"
              name="code"
              title="Code"
              onChange={onChange}
            />
            <Input
              col="s4"
              id="subjectName"
              name="subjectName"
              title="Subject Name"
              onChange={onChange}
            />
            <Input
              col="s4"
              id="class"
              name="class"
              title="Class"
              onChange={onChange}
            />
            <Input
              col="s4"
              id="credit"
              name="credit"
              title="Credit"
              onChange={onChange}
            />
            <Input
              col="s4"
              id="schedule"
              name="schedule"
              title="Schedule"
              onChange={onChange}
            />
            <Input
              col="s4"
              id="room"
              name="room"
              title="Room"
              onChange={onChange}
            />
            <button
              className="waves-effect waves-light btn-large"
              onClick={async () => {
                await onAddSubject();
                /*this.resetInput(document.getElementById("code"));
                this.resetInput(document.getElementById("subjectName"));
                this.resetInput(document.getElementById("class"));
                this.resetInput(document.getElementById("credit"));
                this.resetInput(document.getElementById("schedule"));
                this.resetInput(document.getElementById("room"));*/
              }}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default EnrollmentCard;