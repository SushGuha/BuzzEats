import React, { Component } from "react";
import "./CardMembersStyles.css";

class CardsMembers extends Component {
  render() {
    return (
      <section class="team-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 col-md-10">
              <div class="single-team text-center team-style-one">
                <div class="team-image">
                  <img src={this.props.imagee} alt="Team" />
                </div>
                <div class="team-content">
                  <h4 class="name">{this.props.name}</h4>
                  <span class="sub-title">{this.props.description}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CardsMembers;
