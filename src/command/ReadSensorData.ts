import {Arguments, CommandBuilder} from "yargs";
import {ReadingsRepository} from "../repository/ReadingsRepository";

type Options = {
    box: string;
    from: string;
    to: string;
    aggregate: boolean | undefined;
};

export const command: string = 'read_sensor_data';

export const builder: CommandBuilder<Options, Options> = (yargs) =>
    yargs
        .options({
            box: { type: 'string' },
            from: { type: 'string' },
            to: { type: 'string' },
            aggregate: { type: 'boolean'}
        })
        .positional('box', { type: 'string', demandOption: true })
        .positional('from', { type: 'string', demandOption: true })
        .positional('to', { type: 'string', demandOption: true });

export const handler = async (argv: Arguments<Options>): Promise<void> => {
    const {box, from, to, aggregate} = argv;
    if (aggregate) {
        await ReadingsRepository.getAggregatedReadingsForBox(box, from, to).then(readings => {
            console.log(readings);
        });
    } else {
        await ReadingsRepository.getReadingsForBox(box, from, to).then( readings => {
            console.log(readings);
        })
    }
    process.exit(0);
};