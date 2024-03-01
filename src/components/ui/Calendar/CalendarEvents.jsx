import React, { useState, useEffect } from "react";
const CLIENT_ID = import.meta.env.VITE_CAL_CLIENT_ID;
const API_KEY = import.meta.env.VITE_CAL_API_KEY;
const CAL_ID = import.meta.env.VITE_CALENDAR_ID;

const CalendarEvents = () => {
  const [events, setEvents] = useState([]);

  const undef = undefined;

  const DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ];
  const SCOPES =
    "https://www.googleapis.com/auth/calendar.events.public.readonly";

  useEffect(() => {
    const initClient = async () => {
      await window.gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
      });

      fetchEvents();
    };

    const fetchEvents = async () => {
      try {
        const response = await window.gapi.client.calendar.events.list({
          calendarId: CAL_ID,
          timeMin: new Date().toISOString(),
          showDeleted: false,
          singleEvents: false,
          maxResults: 100,
        });

        console.log("resItems: ", response.result.items);
        setEvents(response.result.items);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    window.gapi.load("client", initClient);
    // window.gapi.load("client:auth2", handleClientLoad);
  }, []);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       setIsLoading(true);
  //       try {
  //         const response = await fetch(
  //           "https://www.googleapis.com/calendar/v3/calendars/f9d8bcfa33aaa53f0e981422870dcff9688220eda266a8208eb8144ea442fdb2@group.calendar.google.com/events?maxResults=2500&key=AIzaSyBBZI2d2fdKECj6c4v-ZjY6DeuIWYL7KP8"
  //         );
  //         if (!response.ok) {
  //           throw new Error("Failed to fetch data");
  //         }
  //         const result = await response.json();
  //         console.log("items: ", result.items);
  //         setData(result);
  //       } catch (error) {
  //         setError(error);
  //       } finally {
  //         setIsLoading(false);
  //       }
  //     };

  //     fetchData();
  //   }, []);

  return (
    <div>
      <div>
        <h2>Calendar Events</h2>

        <ul>
          {events.map((event) => (
            <li key={event.id}>
              <strong>{event.summary}</strong> - {event.start.dateTime}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CalendarEvents;
