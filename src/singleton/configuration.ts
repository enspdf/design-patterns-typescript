import config from './config.json';

export default class Configuration {
    private static instance: Configuration;

    private static _connectionString: string;
    private static _environment: string;
    private static _apiUrl: string;

    private constructor() { };

    private static initialize(): void {
        this._connectionString = config.connectionString;
        this._environment = config.environment;
        this._apiUrl = config.apiUrl;
    };

    public static getInstance(): Configuration {
        if (!this.instance) {
            this.instance = new Configuration();
        }

        return this.instance;
    };

    get connectionString(): string {
        return Configuration._connectionString;
    };

    get environment(): string {
        return Configuration._environment;
    };

    get apiUrl(): string {
        return Configuration._apiUrl;
    };
};