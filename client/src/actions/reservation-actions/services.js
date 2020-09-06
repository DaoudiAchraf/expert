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


const reservationsServices = {
  setReservation_Request,
  getAppointments_Request
  
};

export default reservationsServices;

 