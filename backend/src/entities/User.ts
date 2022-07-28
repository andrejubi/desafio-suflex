import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Character } from "./Character";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  password: string;

  @OneToMany(() => Character, (character) => character.user)
  characters: Character[];

  @CreateDateColumn({ type: "timestamptz" })
  created_at: Date;
}
