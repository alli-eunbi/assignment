import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Link } from "./link.entity";
import { Metadata } from "./metadata.entity";

@Entity()
export class Resource {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 255 })
  name: string;

  @Column({ type: "varchar", length: 10 })
  type: string;

  @OneToOne(() => Metadata)
  @JoinColumn()
  metadata_id: Metadata;

  @OneToMany((type) => Link, (link) => link.document_id)
  link: Link[];

  @OneToMany((type) => Link, (link) => link.content_id)
  content: Link[];
}
