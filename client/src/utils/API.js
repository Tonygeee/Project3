import axios from "axios";

export default {
  // Gets all profiles
  getProfiles: function () {
    return axios.get("/api/profiles/main");
  },
  // Gets the profile with the given id
  getProfile: function (email) {
    return axios.get("/api/main/" + email);
  },
  // Deletes the profile with the given id
  deleteProfile: function (id) {
    return axios.delete("/api/main/" + id);
  },
  // Saves a profile to the database
  saveProfile: function (profileData) {
    return axios.post("/api/main/", profileData);
  },
  getEvents: function (query) {
    console.log(query);
    return axios.get("https://app.ticketmaster.com/discovery/v2/events.json?postalCode=" + query + "&apikey=NyUgIOdhF4S6fXn0BFIY7Afii13kPKnc");
  }
}

