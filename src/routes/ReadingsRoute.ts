import express from 'express';
import controller from '../controller/ReadingsController';
const router = express.Router();

router.get('/readings/:box_id/:from_date/:to_date', controller.getSensorData);

export = router;
