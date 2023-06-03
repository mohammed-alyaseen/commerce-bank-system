import {DataSource} from 'typeorm';
import {ConfigService} from '@nestjs/config';
import {config} from 'dotenv';

config();

const configService = new ConfigService();

export default new DataSource({
    type: 'mysql',
    host: configService.get<string>('DB_HOST'),
    port: configService.get<number>('DB_PORT'),
    username: configService.get<string>('DB_USERNAME'),
    password: configService.get<string>('DB_PASSWORD'),
    database: configService.get<string>('DB_NAME'),
    logging: configService.get<boolean>('DB_LOGGING'),
    entities: [
        __dirname + "entities/**/*.entity.ts"
    ],
    migrations: [],
});
