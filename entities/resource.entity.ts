import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Link } from "./Link.entity";
import { Metadata } from "./Metadata.entity";

@Entity()
export class Resource {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 255 })
  name: string;

  @Column({ type: "varchar", length: 255 })
  type: string;

  // @OneToOne(() => Metadata)
  // @JoinColumn()
  // metadata_id: Metadata;

  // @OneToMany((type) => Link, (link) => link.document_id)
  // link: Link[];

  // @OneToMany((type) => Link, (link) => link.content_id)
  // content: Link[];
}
