import { createConnection } from "typeorm";

console.log("Hello TS!");

createConnection({
  type: "postgres",
  database: "postgres",
  username: "postgres",
  password: "postgres2021",
  port: 5025, // 개인포트
  host: "34.64.187.209",
  entities: ["./*.postgres.ts"],
  logging: true,
  synchronize: true,
})
  .then(() => {
    console.log("접속완료..");
  })
  .catch((error) => {
    console.log(error);
  });
