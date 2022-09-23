import http from "../http-common";

const getGridTutorial = () => { 
  return http.get("/tutorial");
}

const GridService = {
  getGridTutorial,
};
export default GridService;