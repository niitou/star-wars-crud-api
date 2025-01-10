import { ID, ObjectType, Field } from '@nestjs/graphql';
import { Planet } from 'src/planets/entities/planet.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum CharacterGender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

@Entity()
@ObjectType()
export class Character {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ nullable: false })
  name: string;

  @Field()
  @Column()
  species: string;

  @Field()
  @Column({ type: 'enum', enum: CharacterGender })
  gender;

  @Field()
  @Column({ type: 'float' })
  height;

  @Field()
  @Column()
  weight: number;

  @Field()
  @ManyToOne(() => Planet)
  homeworld: Planet;

  @Field()
  @Column({ type: 'text' })
  description;

  @CreateDateColumn()
  created_at;

  @UpdateDateColumn()
  updated_at;
}
