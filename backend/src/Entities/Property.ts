import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BaseEntity,
} from 'typeorm';
import { Image } from './Image';

@Entity()
export class Property extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  type: string;

  @Column()
  address: string;

  @OneToMany(() => Image, (image) => image.property, { cascade: true })
  images: Image[];
}
