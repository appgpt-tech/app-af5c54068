//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Participants')
export class ParticipantsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  artist: string;

  @Column('text', { nullable: true })
  country: string;

  @Column('text', { nullable: true })
  songTitle: string;

  @Column('integer', { nullable: true })
  contest: number;

  @Column('text', { nullable: true })
  qualificationLevel: string;

  @Column('integer', { nullable: true })
  score: number;

  @Column('integer', { nullable: true })
  rank: number;
}
