import React from "react";
import { withRouter } from "react-router-dom";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import moment from "moment";

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
      guests: 1
    };
    // debugger;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearBookingErrors();
  }

  renderErrors() {
    if (this.props.errors) {
      return (
        <ul>
          {this.props.errors.map((error, i) => (
            <li className={`error-${i}`} key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let booking;
    if (this.props.currentUser && this.props.listing) {
      if (this.state.startDate && this.state.endDate) {
        booking = {
          guest_id: this.props.currentUser.id,
          listing_id: this.props.listing.id,
          from_date: this.state.startDate._d,
          to_date: this.state.endDate._d,
          guests: this.state.guests
        };
        this.props.createBooking(booking);
        // .then(this.props.history.push("/"))
      }
    } else {
      this.props.openModal("login");
    }
  }

  render() {
    return (
      <div className="booking-form-container">
        <ul className="booking-details">
          <li className="b-from">From</li>
          <li className="b-price-per-night">
            <span className="b-price">${this.props.listing.price}</span>
            <span className="b-price-text">per night</span>
          </li>
          <li className="b-rating">Stars and Count(323)</li>
        </ul>
        <form onSubmit={this.handleSubmit} className="booking-form">
          <div className="booking-errors">{this.renderErrors()}</div>
          <DateRangePicker
            startDateId="startDate"
            endDateId="endDate"
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onDatesChange={({ startDate, endDate }) => {
              this.setState({ startDate, endDate });
            }}
            focusedInput={this.state.focusedInput}
            onFocusChange={focusedInput => {
              this.setState({ focusedInput });
            }}
          />
          <input className="booking-submit" type="submit" value="Book" />
        </form>
      </div>
    );
  }
}

export default withRouter(BookingForm);

// guest_id: this.props.currentUser ? this.props.currentUser.id : null,
// listing_id: this.props.listing.id,
// from_date: "",
// to_date: "",
