export declare class ReadingsRepository {
    static getReadingsForBox(boxId: string, from: string, to: string): Promise<any[]>;
    static getAggregatedReadingsForBox(boxId: string, from: string, to: string): Promise<any[]>;
}
