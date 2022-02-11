// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const configs = {
  development: {
    type: 'mysql',
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT),
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB_NAME,
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
    migrations: ['dist/**/migrations/*{.ts,.js}'],
    cli: {
      migrationsDir: 'dist/**/migrations',
    },
  },
};

const environment = process.env.NODE_ENV;

const config = configs[environment || 'development'];

module.exports = config;
