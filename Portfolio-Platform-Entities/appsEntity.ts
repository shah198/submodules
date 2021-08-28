
import { Column, Entity, OneToMany, Unique } from "typeorm";
import { EntityBase } from "./EntityBase/entitybase";
import { App_MessagesEntity } from "./app_messagesEntity";
import { App_RolesEntity } from "./app_rolesEntity";
import { FeaturesEntity } from "./featuresEntity";
import { Tenant_AppsEntity } from "./tenant_appsEntity";

@Entity()
@Unique(["Id"])
export class AppsEntity extends EntityBase {
    
  @Column ({ name: "app_name", nullable: true })
    app_name?: string;
    
  @Column({ name: "app_description", nullable: true })
    app_description?: string;


    @OneToMany(
      (type) => App_MessagesEntity,
      (app_message) => app_message.app_id,
    )
    app_message: App_MessagesEntity[];
    @OneToMany(
      (type) => FeaturesEntity,
      (features) => features.app_id,
    )
    features: FeaturesEntity[];
    @OneToMany(
      (type) => App_RolesEntity,
      (app_roles) => app_roles.app_id,
    )
    app_roles: App_RolesEntity [];
    @OneToMany(
      (type) => Tenant_AppsEntity,
      (tenant_apps) => tenant_apps.app_id,
    )
    tenant_apps: Tenant_AppsEntity[];
}