import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@Entity()
export class Character {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_api: number;

  @Column()
  name: string;

  @Column()
  status: string;

  @Column()
  species: string;

  @Column()
  type: string;

  @Column()
  gender: string;

  @Column()
  image: string;

  @Column()
  url: string;

  @Column()
  origin: string;

  @Column()
  location: string;

  @Column("text")
  episode: string;

  @Column()
  created: Date;

  @Column()
  user_id: number;

  @ManyToOne(() => User, (user) => user.characters, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "user_id" })
  user: User;
}
