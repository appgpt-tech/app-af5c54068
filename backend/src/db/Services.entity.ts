//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Services')
export class ServicesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  Name: string;

  @Column('text', { nullable: true })
  Description: string;

  @Column('text', { nullable: true })
  Category: string;

  @Column('real', { nullable: true })
  StandardFee: number;
}
