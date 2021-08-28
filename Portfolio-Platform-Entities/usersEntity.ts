import { Column, Entity, OneToMany, Unique } from "typeorm";
import { EntityBase } from "./EntityBase/entitybase";
import { Feature_PermissionsEntity } from "./feature_permissionsEntity";
import { TenantsEntity } from "./tenantsEntity";
import { Tenant_UsersEntity } from "./tenant_usersEntity";

@Entity()
@Unique(["Id"])
export class UsersEntity extends EntityBase {
    
  @Column ({ name: "login_name", nullable: true })
  login_name?: string;
  
  @Column ({ name: "birth_date", nullable: true })
  birth_date?: Date;
  
  @Column ({ name: "date_of_joining", nullable: true })
  date_of_joining?: Date;
    
    @Column ({ name: "first_name", nullable: true })
    first_name?: string;
  
    @Column ({ name: "last_name", nullable: true })
    last_name?: string;
  
    @Column ({ name: "email", nullable: true })
    email?: string;
  
    @Column ({ name: "phone", nullable: true })
    phone?: number;
  
    @Column ({ name: "marital_status", nullable: true })
    marital_status?: string;

    @OneToMany(
      (type) => Tenant_UsersEntity,
      (tenant_users) => tenant_users.user_id,
    )
    tenant_users: Tenant_UsersEntity[];
    @OneToMany(
      (type) => Feature_PermissionsEntity,
      (feature_permissions) => feature_permissions.user_id,
    )
    feature_permissions: Feature_PermissionsEntity[];
   

}