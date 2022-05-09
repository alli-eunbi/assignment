import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Resource } from "./resource.entity";

@Entity()
export class Link {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne((type) => Resource, (resource) => resource.id)
  document_id: Resource;

  @ManyToOne((type) => Resource, (resource) => resource.id)
  content_id: Resource;
}
