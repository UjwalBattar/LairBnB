import React from "react";
import { withRouter } from "react-router-dom";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="about-container">
        <div onClick={this.props.closeModal} className="close-x">
          &nbsp;X&nbsp;
        </div>
        <section className="about">
          This website was created purely as an exerceise and meant for
          education, training and entertainment. This website is not meant for
          any monetary gain and all copyrights to the images belong to the
          original creators.
        </section>
        <p className="about-directive">
          Feel free to reach out to the developer, Ujwal Battar, for further
          information.
        </p>
        <div className="about-links">
          <a className="about-github" href="https://github.com/UjwalBattar">
            <i class="fab fa-github" />
          </a>
          <a
            className="about-linkedin"
            href="https://www.linkedin.com/in/ujwal-battar/"
          >
            <i className="fab fa-linkedin" />
          </a>
        </div>
      </div>
    );
  }
}
