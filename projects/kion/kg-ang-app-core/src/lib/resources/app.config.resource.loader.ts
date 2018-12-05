import { Resource, ResourceLoadingManager } from './app.resource.loader';
import { ObjectUtils } from '../utils/objectUtils';
import { RemoteConfigResource } from './remote.config.resource.loader';

export namespace ConfigResourceBuilderPattern{
    
    export class ConfigResourceBuilder<T> {
        private configUri: string = "";
        private combineTenant: boolean = false;
        private remoteConfig: RemoteConfigResource = null;
        
        public ConfigResourceBuilder(){}
        
        public setConfigUri(configUri: string){
            this.configUri = configUri;
            return this;
        }
        public getConfigUri(){
            return this.configUri;
        }
        public setCombineTenant(combineTenant: boolean){
            this.combineTenant = combineTenant;
            return this;
        }
        public getCombineTenant(){
            return this.combineTenant;
        }
        public setRemoteConfigResource(remoteConfig: RemoteConfigResource){
            this.remoteConfig = remoteConfig;
            return this;
        }
        public getRemoteConfigResource(){
            return this.remoteConfig;
        }
        public build(){
            if (this.remoteConfig == null){
                return new ConfigResource<T>().createFromFlat(this);
            }else{
                return new ConfigResource<T>().createFromRemote(this);
            }
        }
    }
    
    
    export class ConfigResource<T> extends Resource {
        
        private dematicResource: Resource;
        private tenantResource: Resource | null = null;
        
        private combineTenant: Boolean;
        
        public resourceData: T | null; 
        
        public constructor(){
            super('');
        }
        
        public createFromFlat(builder: ConfigResourceBuilder<T>){
            this.combineTenant = builder.getCombineTenant();
            let configUri = builder.getConfigUri();
            this.dematicResource = new Resource('/assets/config/dematic' + configUri);
            const authProvider = ResourceLoadingManager.theCoreAuthProvider();
            if ( authProvider && authProvider.getTenantId() ) {
                this.tenantResource = new Resource('/assets/config/' + authProvider.getTenantId() + configUri);
            }
            return this;
        }
        public createFromRemote(builder: ConfigResourceBuilder<T>){
            this.dematicResource = new Resource(builder.getRemoteConfigResource().getDematicResourcePath());
            this.tenantResource  = new Resource(builder.getRemoteConfigResource().getTenantResourcePath());
            return this;
        }
        
        public loadData(): Promise<String> {
            return Promise.all([this.dematicResource.loadData(),
                (this.tenantResource == null ? new Promise<string>((resolve) => {
                    resolve();
                }) : this.tenantResource.loadData())])
                .catch((err) => {
                    console.log('Error getting configuration resource. ' + err);
                })
                .then((returnData) => {
                    if (this.tenantResource == null || this.tenantResource.resourceData == null) {
                        this.resourceData = this.dematicResource.resourceData;
                    } else {
                        if (this.combineTenant) {
                            this.resourceData = this.dematicResource.resourceData;
                        } else {
                            this.resourceData = null;
                        }
                        
                        ObjectUtils.extend(this.resourceData, this.tenantResource.resourceData);
                    }
                    
                    return '';
                });
            }
        }
    }
    
    
    