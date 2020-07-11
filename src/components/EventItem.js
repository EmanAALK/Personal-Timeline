import React from "react";

//Styles
import { EventWrapper } from "../styles";

const EventItem = (props) => {
  return (
    <div className="container">
      <div className="col-12">
        <EventWrapper>
          <p>{props.event.event}</p>
          <p>{props.event.date}</p>
          <p>{props.event.detail}</p>
        </EventWrapper>
      </div>
    </div>
  );
};

export default EventItem;
