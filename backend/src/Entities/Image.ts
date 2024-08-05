import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BaseEntity,
} from 'typeorm';
import { Property } from './Property';

@Entity()
export class Image extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  url: string;

  @ManyToOne(() => Property, (property) => property.images, { cascade: true })
  property: Property;
}
