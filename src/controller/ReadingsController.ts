import { Request, Response, NextFunction } from 'express';
import {ReadingsRepository} from "../repository/ReadingsRepository";

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