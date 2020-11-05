import axiosInstance from "../../config/axios-instance";


function setReservation_Request(body) {
  return axiosInstance({
    method: "post",
    url: "reserve",
    data: body
  });
}


function getAppointments_Request() {
  return axiosInstance({
    method: "get",
    url: "appointments"
  });
}

function setReservationStatus_Request(id, body) {
  return axiosInstance({
    method: "put",
    url: "/reservation/" + id,
    data: body
  });
}

function getMissions_Request() {
  return axiosInstance({
    method: "get",
    url: "reservation/myMissions"
  });
}
function getMission_Request(missionID) {
  console.log('skaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', missionID)
  return axiosInstance({
    method: "get",
    url: "getMission/" + missionID
  });
}


function getClientHistory_Request() {
  return axiosInstance({
    method: "get",
    url: "reservation/history"
  });
}

function create_rapport(data) {
  return axiosInstance({
    method: "post",
    url: "addRaport",
    data: data
  });
}


const reservationsServices = {
  setReservation_Request,
  getAppointments_Request,
  setReservationStatus_Request,
  getMissions_Request,
  getClientHistory_Request,
  create_rapport,
  getMission_Request
};

export default reservationsServices;

