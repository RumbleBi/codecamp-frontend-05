import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
// @ => 데코레이터 === 함수
@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  number!: number;

  @Column({ type: "text" })
  writer!: string;

  @Column({ type: "text" })
  title!: string;

  @Column({ type: "text" })
  age!: number;

  // @Column({ default: false })
  // isDeleted!: boolean;

  @Column({ type: "timestamp", default: null, nullable: true }) // 널값은 기본적으로 넣을수 없으니 가능하도록설정
  deletedAt!: Date; // 더욱 발전된 소프트 삭제 방법
}
