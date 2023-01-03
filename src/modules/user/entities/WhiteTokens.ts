import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("white_tokens")
export class WhiteToken {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  user_id: string;

  @Column({ type: "text" })
  token: string;

  @CreateDateColumn()
  createdAt: Date;
}
