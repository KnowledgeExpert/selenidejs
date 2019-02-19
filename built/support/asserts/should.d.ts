import { Assertable } from '../../entity';
export declare namespace should {
    const match: <T extends Assertable>(condition: import("../../wait").Query<T, void>) => (entity: T) => Promise<T>;
    const notMatch: <T extends Assertable>(condition: import("../../wait").Query<T, void>) => (entity: T) => Promise<T>;
}
