import { PrismaClient } from '@prisma/client'
import { Prisma } from '@prisma/client'

const prisma = new PrismaClient()
export class ReadingsRepository {
     public static async getReadingsForBox(boxId: string, from: string, to: string) {
         const readings = await prisma.readings.findMany({
             where: {
                 box_id: boxId,
                 reading_ts: {
                     gte: new Date(from),
                     lte: new Date(to),
                 }
             },
             include: {
                 sensors: true,
             },
         });

         let result: any[] = [];
         readings.forEach(function (reading) {
             let resultItem = {
                 box_id: reading!.box_id,
                 sensor_id: reading!.sensor_id,
                 name: reading!.sensors!.name,
                 unit: reading!.sensors!.unit,
                 reading: reading!.reading,
                 reading_ts: reading!.reading_ts
             };
             result.push(resultItem);
         });

         return result;
     }

    public static async getAggregatedReadingsForBox(boxId: string, from: string, to: string) {
        const aggregatedData : any[] = await prisma.$queryRaw(Prisma.sql`SELECT readings.box_id as box_id,
           readings.sensor_id as sensor_id,
           sensors.name as name,
           sensors.unit as unit,
           MAX(readings.reading) as max,
           MIN(readings.reading) as min,
           AVG(readings.reading) as avg
        FROM readings
        JOIN sensors ON readings.sensor_id = sensors.id
        WHERE readings.box_id = ${boxId} AND 
              readings.reading_ts >= ${from} AND 
              readings.reading_ts <= ${to}
        GROUP BY readings.box_id, sensors.name
        `);

        let result: any[] = [];
        aggregatedData.forEach(function (reading) {
            let resultItem = {
                box_id: reading!.box_id,
                sensor_id: reading!.sensor_id,
                name: reading!.name,
                unit: reading!.unit,
                max: reading!.max,
                min: reading!.min,
                avg: reading!.avg,
            };
            result.push(resultItem);
        });

        return result;
    }
}