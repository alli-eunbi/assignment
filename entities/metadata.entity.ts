import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Metadata {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 2000 })
  path: string;

  @Column({ type: "varchar", length: 20 })
  mimetype: string;

  @Column({ type: "varchar", length: 100 })
  size: string;

  @Column({ type: "varchar", length: 20 })
  doctype: string;

  @Column({ type: "varchar", length: 100 })
  creator: string;

  @Column({ type: "varchar", length: 100 })
  origin: string;
}
