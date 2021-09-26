"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express_1 = __importDefault(require("express"));
var ReadingsController_1 = __importDefault(require("../controller/ReadingsController"));
var router = express_1.default.Router();
router.get('/readings/:box_id/:from_date/:to_date', ReadingsController_1.default.getSensorData);
module.exports = router;
