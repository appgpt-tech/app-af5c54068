//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('GameSession')
export class GameSessionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('integer', { nullable: true })
  Game: number;

  @Column('integer', { nullable: true })
  Players: number;

  @Column('date', { nullable: true })
  Date: Date;

  @Column('integer', { nullable: true })
  Duration: number;
}
