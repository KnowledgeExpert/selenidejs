export namespace Utils {
    export function getValueFromPath(obj: any, objPath: string): any {
        if (obj === undefined) return undefined;
        if (obj === null) return null;
        const parts = objPath.split('.');
        return parts.length === 1 ? obj[parts[0]] : getValueFromPath(obj[parts[0]], parts.slice(1).join('.'));
    }
}