import http from "../http-common";

const sendMail = () => {
	return http.post("/sendMail");
};

const SendMailService = {
  sendMail,
}; export default SendMailService;