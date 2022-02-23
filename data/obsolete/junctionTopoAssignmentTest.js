require("../../common/setup");

const {JunctionGrid} = require("../FeatureEngineering/JunctionGrid");
const junctionGrid = new JunctionGrid();

const {point, score} = junctionGrid.computeBestMatchScore({roadTopoVec: ["IN-OUT", "IN-OUT", "IN-OUT"]});

console.log(point);
console.log(score);