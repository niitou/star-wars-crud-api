import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Planet {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ nullable: false })
  name: string;

  @Field()
  @Column()
  diameter: number;

  @Field()
  @Column()
  climate: string;

  @Field()
  @Column('varchar', { array: true })
  terrain: string[];

  @CreateDateColumn()
  created_at;

  @UpdateDateColumn()
  updated_at;
}
