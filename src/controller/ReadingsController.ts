import { Request, Response, NextFunction } from 'express';
import {ReadingsRepository} from "../repository/ReadingsRepository";

interface readings{
    box_id: string,
    sensor_id: string,
    name: string,
    unit: string,
    reading: string,
    reading_ts: string
}

const getSensorData = async (req: Request, res: Response, next: NextFunction) => {
    let box: string = req.params.box_id;
    let from_date: string = req.params.from_date;
    let to_date: string = req.params.to_date;

    let readings = await ReadingsRepository.getReadingsForBox(box, from_date, to_date);

    return res.status(200).json({
        readings
    });
}

export default { getSensorData };