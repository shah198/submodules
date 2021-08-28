import { Column, Entity, ManyToOne, OneToMany, Unique } from "typeorm";
import { EntityBase } from "./EntityBase/entitybase";
import { TenantsEntity } from "./tenantsEntity";
import { Tenant_User_AppsEntity } from "./tenant_user_appsEntity";
import { UsersEntity } from "./usersEntity";
@Entity()
@Unique(["Id"])
export class Tenant_UsersEntity extends EntityBase {
    
  @Column ({ name: "tenant_id", nullable: true })
  tenant_id?: number;
  
  @Column ({ name: "user_id", nullable: true })
  user_id?: number;
  
  @Column ({ name: "identity_provider_subscriber_id", nullable: true })
  identity_provider_subscriber_id?: string;
  @ManyToOne(
    (type) => UsersEntity,
    (users) => users.tenant_users,
  )
  users: UsersEntity[];
  @ManyToOne(
    (type) => TenantsEntity,
    (tenants) => tenants.tenant_users,
  )
  tenants: TenantsEntity[];
  @OneToMany(
    (type) => Tenant_User_AppsEntity,
    (tenant_user_apps) => tenant_user_apps.tenant_user_id,
  )
  tenant_user_apps: Tenant_User_AppsEntity[];
}