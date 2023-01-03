import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("users")
export class User {
  @PrimaryColumn({ type: "text" })
  id: string;

  @Column({ type: "text" })
  name: string;

  @Column({ type: "text", unique: true })
  email: string;

  @Column({ type: "text", unique: true })
  cpf: string;

  @Column({ type: "text" })
  password: string;

  @CreateDateColumn()
  createAt: Date;

  @CreateDateColumn()
  updatedeAt: Date;
}
