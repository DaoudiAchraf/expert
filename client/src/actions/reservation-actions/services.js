import axiosInstance from "../../config/axios-instance";


function setReservation_Request(body) {
    return axiosInstance({
      method: "post",
      url: "reserve",
      data: body
    });
  }


function getReservations_Request() {
  return axiosInstance({
    method: "get",
    url: "reservations"
  });
}


const reservationsServices = {
  setReservation_Request,
  getReservations_Request
  
};

export default reservationsServices;

 