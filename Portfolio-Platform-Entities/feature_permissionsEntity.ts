import { Column, Entity, ManyToOne, Unique } from "typeorm";
import { EntityBase } from "./EntityBase/entitybase";
import { FeaturesEntity } from "./featuresEntity";
import { RolesEntity } from "./rolesEntity";
import { UsersEntity } from "./usersEntity";

@Entity()

export class Feature_PermissionsEntity extends EntityBase {
    
    @Column ({ name: "feature_id", nullable: true })
    feature_id?: number;
 
    @Column ({ name: "operation_permitted", nullable: true, type: "json" })
    operation_permitted?: JSON;
 
    @Column ({ name: "role_id", nullable: true })
    role_id?: number;
 
    @Column ({ name: "user_id", nullable: true })
    user_id?: number;
 
    @Column ({ name: "role_feature_security", nullable: true, type: "json" })
    role_feature_security? : JSON;
    @ManyToOne(
      (type) => FeaturesEntity,
      (features) => features.feature_permissions,
    )
    features: FeaturesEntity[];
    @ManyToOne(
      (type) => RolesEntity,
      (roles) => roles.feature_permissions,
    )
    roles: RolesEntity[];
    @ManyToOne(
      (type) => UsersEntity,
      (users) => users.feature_permissions,
    )
    users: UsersEntity[];
}