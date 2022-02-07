import { createConnection } from "typeorm";
import { ApolloServer, gql } from "apollo-server";
import { Board } from "./Board.postgres";

const typeDefs = gql`
  type Board {
    number: Int
    writer: String
    title: String
    age: Int
  }
  type Query {
    fetchBoards: [Board]
  }
  input CreateBoardInput {
    writer: String
    title: String
    age: Int
  }
  type Mutation {
    createBoard(createBoardInput: CreateBoardInput): String
    deleteBoard(number: Int!): String
  }
`;
const resolvers = {
  Query: {
    fetchBoards: async () => {
      // DB와 연결
      // find() => 다찾아와줘
      const result = await Board.find({ where: { writer: "철수", deletedAt: null } });
      console.log(result);
      return result;
    },
  },
  Mutation: {
    createBoard: async (_: any, args: any) => {
      // DB와 연결
      await Board.insert({
        ...args.createBoardInput,
        title: args.createBoardInput.title,
        age: args.createBoardInput.age,
      });
      return "createBoard를 요청하셨습니다";
    },

    deleteBoard: async (_: any, args: any) => {
      args.boardId;
      await Board.update({ /*조건*/ number: args.number }, { /*바꿀내용*/ deletedAt: new Date() });
    },
  },
};
const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  cors: true,
  //   // 들어올 수 있는 사이트를 제한 모두 ㄱㅊ다고하면 true값 넣기
  //   origin: "https://mysite.com",
  // },
});

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

    server.listen({ port: 4000 });
    // 24시간동안 4000번 포트에서 요청 대기. 켜놔야 주고받을 수 있다.
  })
  .catch((error) => {
    console.log(error);
  });
