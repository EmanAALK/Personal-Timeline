import React from "react";

//Components
import EventItem from "./EventItem";

//Data
import events from "../events";

//Styles
import { ListWrapper } from "../styles";

const EventList = () => {
  const eventList = events.map((event) => (
    <EventItem event={event} key={event.id} />
  ));
  return (
    <div className="container">
      <div className="row">
        {/* <div className="col-12"> */}
          <ListWrapper>{eventList}</ListWrapper>
        </div>
      </div>
    // </div>
  );
};
export default EventList;
