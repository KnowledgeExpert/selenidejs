import { Assertable } from '../../entity';
export declare namespace should {
    const match: <T>(condition: import("../../wait").Query<T, void>) => (entity: Assertable<T>) => Promise<T>;
    const notMatch: <T>(condition: import("../../wait").Query<T, void>) => (entity: Assertable<T>) => Promise<T>;
}
