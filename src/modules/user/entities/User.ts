import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("users")
export class User {
  @PrimaryColumn()
  id?: string;
  @Column({ type: "text" })
  name: string;
  @Column({ type: "text", unique: true })
  email: string;
  @Column({ type: "text", unique: true })
  cpf: string;
  @Column({ type: "text" })
  password: string;
  @CreateDateColumn()
  createdAt: Date;
  @CreateDateColumn()
  updateAt: Date;
}
