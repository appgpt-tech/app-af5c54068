//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Game')
export class GameEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  Title: string;

  @Column('text', { nullable: true })
  Genre: string;

  @Column('date', { nullable: true })
  ReleaseDate: Date;

  @Column('text', { nullable: true })
  Description: string;
}