import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HxCloudWebRegionMySuffixModule } from './region/region-my-suffix.module';
import { HxCloudWebCountryMySuffixModule } from './country/country-my-suffix.module';
import { HxCloudWebLocationMySuffixModule } from './location/location-my-suffix.module';
import { HxCloudWebDepartmentMySuffixModule } from './department/department-my-suffix.module';
import { HxCloudWebTaskMySuffixModule } from './task/task-my-suffix.module';
import { HxCloudWebEmployeeMySuffixModule } from './employee/employee-my-suffix.module';
import { HxCloudWebJobMySuffixModule } from './job/job-my-suffix.module';
import { HxCloudWebJobHistoryMySuffixModule } from './job-history/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        HxCloudWebRegionMySuffixModule,
        HxCloudWebCountryMySuffixModule,
        HxCloudWebLocationMySuffixModule,
        HxCloudWebDepartmentMySuffixModule,
        HxCloudWebTaskMySuffixModule,
        HxCloudWebEmployeeMySuffixModule,
        HxCloudWebJobMySuffixModule,
        HxCloudWebJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HxCloudWebEntityModule {}
