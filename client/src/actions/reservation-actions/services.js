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

function setReservationStatus_Request(id,body) {
  return axiosInstance({
    method: "put",
    url: "/reservation/"+id,
    data: body
  });
}

const reservationsServices = {
  setReservation_Request,
  getAppointments_Request,
  setReservationStatus_Request
};

export default reservationsServices;

 