export const error: (...args: any[]) => void;
export const debug: (...args: any[]) => void;
export const warn: (...args: any[]) => void;
export const data: (...args: any[]) => void;
export const info: (...args: any[]) => void;
export const verbose: (...args: any[]) => void;
export const silly: (...args: any[]) => void;
export const custom: (...args: any[]) => void;

export interface Log {
    error: (...args: any[]) => void;
    debug: (...args: any[]) => void;
    warn: (...args: any[]) => void;
    data: (...args: any[]) => void;
    info: (...args: any[]) => void;
    verbose: (...args: any[]) => void;
    silly: (...args: any[]) => void;
    custom: (...args: any[]) => void;

}
export const log: Log;
