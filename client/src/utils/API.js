import axios from "axios";

export default {
  // Gets all profiles
  getProfiles: function () {
    return axios.get("/api/profiles/main");
  },
  // Gets the profile with the given id
  getProfile: function (userName) {
    return axios.get("/api/main/" + userName);
  },
  // Deletes the profile with the given id
  deleteProfile: function (id) {
    return axios.delete("/api/main/" + id);
  },
  // Saves a profile to the database
  saveProfile: function (profileData) {
    return axios.post("/api/main/", profileData);
  },
  saveEvent: function (eventData) {
    return axios.post("/api/events", eventData);
  },
  getEvents: function (query) {
    console.log(query);
    return axios.get("https://app.ticketmaster.com/discovery/v2/events.json?postalCode=" + query + "&radius=100&unit=miles&apikey=NyUgIOdhF4S6fXn0BFIY7Afii13kPKnc");
  },
  checkForEvent: function (title) {
    console.log(title);
    return axios.get("/api/events", title);
  },
  addEventToUser: function (id, userName) {
    console.log(id);
    console.log(userName);
    return axios.put("/api/events", { params: { id: id, userName: userName } });
  },
  addUserToEvent: function (userName, id) {
    console.log(id);
    return axios.put("/api/main", { params: { id: id, userName: userName } });
  }
}

