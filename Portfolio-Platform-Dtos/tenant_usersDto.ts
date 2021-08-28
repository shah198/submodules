import { DtoBase } from "./DtoBase/dtobase";

export class Tenant_UsersDto extends DtoBase {
    constructor() {
      super();
     
    }
  
    tenant_id?: number;
    user_id?: number;
    identity_provider_subscriber_id?: string;
}