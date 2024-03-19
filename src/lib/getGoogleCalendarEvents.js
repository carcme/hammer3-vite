// Get the events from the google calendar
import { useState, useEffect } from "react";

function getGoogleCalendarEvents(updateEvents) {
  const CLIENT_ID = import.meta.env.VITE_CAL_CLIENT_ID;
  const API_KEY = import.meta.env.VITE_CAL_API_KEY;
  const CAL_ID = import.meta.env.VITE_CALENDAR_ID;

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

        updateEvents(response.result.items);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    window.gapi.load("client:auth2", initClient);
  }, []);
}
export { getGoogleCalendarEvents };
