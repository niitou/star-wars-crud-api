import { ID, ObjectType, Field } from '@nestjs/graphql';
import { Planet } from 'src/planets/entities/planet.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum CharacterGender {
  MALE = 'Male',
  FEMALE = 'Female',
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
  @OneToOne(() => Planet)
  @JoinColumn()
  planet: Planet;

  @Field()
  @Column({ type: 'text' })
  description;

  @CreateDateColumn()
  created_at;

  @UpdateDateColumn()
  updated_at;
}
