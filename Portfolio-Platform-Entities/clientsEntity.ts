import { Column, Entity, OneToMany, Unique } from "typeorm";
import { EntityBase } from "./EntityBase/entitybase";
import { TenantsEntity } from "./tenantsEntity";

@Entity()
@Unique(["Id"])
export class ClientsEntity extends EntityBase {
 
    @Column ({ name: "address_id", nullable: true })
    address_id?: number;
 
    @Column ({ name: "start_date", nullable: true })
    start_date?: Date;
 
    @Column ({ name: "Expiry_date", nullable: true })
    expiry_date?: Date ;
 
    @Column ({ name: "client_key", nullable: true })
    client_key?: string;
 
    @Column ({ name: "client_name", nullable: true })
    client_name?: string;
 
    @Column ({ name: "decsription", nullable: true })
    description?: string;
 
    @Column ({ name: "contact_id", nullable: true })
    contact_id?: number;
    @OneToMany(
      (type) => TenantsEntity,
      TenantsEntity => TenantsEntity.clients,
    )
    tenants: TenantsEntity[]

}