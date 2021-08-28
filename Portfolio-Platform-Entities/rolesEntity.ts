import { Column, Entity, OneToMany, Unique } from "typeorm";
import { EntityBase } from "./EntityBase/entitybase";
import { App_RolesEntity } from "./app_rolesEntity";
import { Feature_PermissionsEntity } from "./feature_permissionsEntity";
import { Tenant_User_App_RolesEntity } from "./tenant_user_app_rolesEntity";

@Entity()
@Unique(["Id"])
export class RolesEntity extends EntityBase {
    
    @Column ({ name: "role_name", nullable: true })
    role_name?: string;
 
    @Column ({ name: "role_priviledge", nullable: true , type: "json"})
    role_priviledge?: JSON;
    @OneToMany(
      (type) => Feature_PermissionsEntity,
      (feature_permissions) => feature_permissions.role_id,
    )
    feature_permissions: Feature_PermissionsEntity [];
    @OneToMany(
      (type) => App_RolesEntity,
      (app_roles) => app_roles.app_id,
    )
    app_roles: App_RolesEntity[];
    @OneToMany(
      (type) => Tenant_User_App_RolesEntity,
      (tenant_user_app_roles) => tenant_user_app_roles.role_id,
    )
    tenant_user_app_roles: Tenant_User_App_RolesEntity[];
}