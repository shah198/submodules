import { DtoBase } from "./DtoBase/dtobase";

export class Tenant_App_FeaturesDto extends DtoBase {
    constructor() {
      super();
     
    }
  
    tenant_app_id?: number;
    feature_id?: number;
}