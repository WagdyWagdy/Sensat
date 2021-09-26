import { Arguments, CommandBuilder } from "yargs";
declare type Options = {
    box: string;
    from: string;
    to: string;
    aggregate: boolean | undefined;
};
export declare const command: string;
export declare const builder: CommandBuilder<Options, Options>;
export declare const handler: (argv: Arguments<Options>) => Promise<void>;
export {};
