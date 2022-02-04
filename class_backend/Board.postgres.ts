import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
// @ => 데코레이터 === 함수
@Entity()
export class Board {
  @PrimaryGeneratedColumn("increment")
  number!: number;

  @Column({ type: "text" })
  writer!: string;

  @Column({ type: "text" })
  title!: string;

  @Column({ type: "text" })
  age!: number;
}
