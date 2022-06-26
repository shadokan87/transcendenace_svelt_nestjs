import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
	host: "localhost",
	port: 5432,
	username: "${PG_USER}",
	password: "${PG_PASS}",
	database: "${PG_DB}",
    synchronize: true,
    logging: true,
    entities: [User],
    migrations: [],
    subscribers: [],
})
