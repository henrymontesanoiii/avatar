import React, { Component } from "react";
// import { render } from "react-dom";
import events from "./events";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("en");
const localizer = BigCalendar.momentLocalizer(moment);

const allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

class Calendar extends Component {
  state = {
    view: "month",
    date: new Date(),
    // month: 
    month: moment().month("ddd MMM DD YYYY"),

    width: 500
  };

  componentDidMount() {
    window.addEventListener("resize", () => {
      /*this.setState({
        width: window.innerWidth,
        height: window.innerHeight
      });*/
    });
  }

  

  render() {
    return (
      <div className="container">
      <div style={{ height: 700 }}>
        <button onClick={() => this.setState({ view: "day" })}>Day</button>
        <button onClick={() => this.setState({ view: "month" })}>Month</button>
        <BigCalendar
          month={this.state.month}
          style={{ height: 500, width: this.state.width }}
          toolbar={false}
          events={events}
          step={60}
          views={allViews}
          view={this.state.view}
          onView={() => {}}
          date={this.state.date}
          onNavigate={date => this.setState({ date })}
          localizer={localizer}
          
        />
      </div></div>
    );
  }
}
export default Calendar;
// render(<App />, document.getElementById("root"));
