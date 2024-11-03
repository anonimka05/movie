import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

2;
Entity();
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  releaseDate_date: Date;

  @Column()
  jeneres: string;

  @Column()
  rating: number;

  @Column()
  review: string;

  @Column()
  actor: string;

  @Column()
  language: string;
}
