import { Column, Entity, ManyToOne, OneToMany, Unique } from "typeorm";
import { EntityBase } from "./EntityBase/entitybase";
import { AppsEntity } from "./appsEntity";
import { Feature_PermissionsEntity } from "./feature_permissionsEntity";
import { Tenant_App_FeaturesEntity } from "./tenant_app_featuresEntity";
@Entity()
@Unique(["Id"])
export class FeaturesEntity extends EntityBase {
    
    @Column ({ name: "feature_id", nullable: true })
    feature_id?: number;
 
    @Column ({ name: "feature_name", nullable: true })
    feature_name?: string;
 
    @Column ({ name: "app_id", nullable: true })
    app_id?: number;
 
    @Column ({ name: "base_feature_id", nullable: true })
    base_feature_id?: number;
 
    @Column ({ name: "feature_description", nullable: true })
    feature_description? : string;
 
    @Column ({ name: "feature_key", nullable: true })
    feature_key? : string;
 
    @Column ({ name: "operations", nullable: true })
    operations? :string;
 
    @Column ({ name: "feature_type", nullable: true })
    feature_type? : number;
    
    @ManyToOne(
      (type) => AppsEntity,
      (apps) => apps.features,
    )
    apps: AppsEntity[];
    @OneToMany(
      (type) => Feature_PermissionsEntity,
      (feature_permissions) => feature_permissions.feature_id,
    )
    feature_permissions: Feature_PermissionsEntity[]
    @OneToMany(
      (type) => Feature_PermissionsEntity,
      (tenant_app_feature) => tenant_app_feature.feature_id,
    )
    tenant_app_features: Tenant_App_FeaturesEntity[]

}