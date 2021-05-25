module.exports = {
    port: 4000,
    /**
     * Database
     */
    database: {
        type: 'mysql',
        host: 'localhost',
        username: 'root',
        password: 'test1234',
        database: 'api',
        synchronize: false,
        port: 3306,
        logging: false,
        entities: [`${__dirname}/../src/services/**/*.entity{.ts,.js}`],
        migrationsTableName: 'app_migrations',
        migrations: ['dist/data/migrations/*{.ts,.js}'],
        cli: {
            migrationsDir: 'data/migrations',
            entitiesDir: `${__dirname}/../src/services/**/*.entity{.ts,.js}`,
        },
    },
};
