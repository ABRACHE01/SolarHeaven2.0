export default () => ({
  port: Number(process.env.PORT) || 8080,
  jwtSecret: process.env.JWT_SECRET,
  postgresDB: {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: false,
    autoLoadEntities: true,
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
  },
});
