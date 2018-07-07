import axios from "axios";

export default {
  // Gets all profiles
  getProfiles: function () {
    return axios.get("/api/main");
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
      return axios.post("/api/main", profileData);
    },
    getEvents: function (query) {
      return axios.get("api/search", { params: { q: query } });
    }
  }

