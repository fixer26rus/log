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
