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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  componentWillUnmount() {
    this.props.clearBookingErrors();
    // for (let i = 0; i < 5; i++) {
    //   "text" + "The number is " + i + "<br>";
    // }
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
        this.props
          .createBooking(booking)
          .then(this.props.history.push("/bookings"))
          .then(
            this.setState({
              startDate: null,
              endDate: null,
              focusedInput: null,
              guests: 1
            })
          );
      }
    } else {
      this.props.openModal("login");
    }
  }

  render() {
    const guestOptions = () => {
      let rows = [];
      for (var i = 1; i <= parseInt(this.props.listing.guests); i++) {
        rows.push(
          <option value={`${i}`} key={`guest-option-${i}`}>
            {`${i}`}
          </option>
        );
      }
      return rows;
    };

    return (
      <div className="booking-form-container">
        <form onSubmit={this.handleSubmit} className="booking-form">
          <ul className="booking-details">
            <li className="b-from">From</li>
            <li className="b-price-per-night">
              <span className="b-price">${this.props.listing.price}</span>
              <span className="b-price-text">&nbsp; per&nbsp; night</span>
            </li>
            <li className="b-rating" />
          </ul>
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
          <div className="booking-guests-dropdown">
            Guests:
            <select
              className="booking-form-select-guests"
              value={this.state.guests}
              onChange={this.update("guests")}
            >
              {guestOptions()}
            </select>
          </div>

          <input className="booking-submit" type="submit" value="Book" />
        </form>
      </div>
    );
  }
}

export default withRouter(BookingForm);

// <option value="1">1 guest</option>
// <option value="2">2 guests</option>
// <option value="3">3 guests</option>
// <option value="4">4 guests</option>
// <option value="5">5 guests</option>
// <option value="6">6 guests</option>
// <option value="7">7 guests</option>
// <option value="8">8 guests</option>
// <option value="9">9 guests</option>
// <option value="10">10 guests</option>
// <option value="11">11 guests</option>
// <option value="12">12 guests</option>

// guest_id: this.props.currentUser ? this.props.currentUser.id : null,
// listing_id: this.props.listing.id,
// from_date: "",
// to_date: "",

// {(() => {
//   let rows = [];
//   for (var i = 1; i < parseInt(this.props.listing.guests); i++) {
//     rows.push(
//       <option value={i} key={`guest-option-${i}`}>
//         {i}
//       </option>
//     );
//   }
//   return rows;
// })()}
