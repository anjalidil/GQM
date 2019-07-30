import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TopLevelManualsComponent} from "./top-level-manuals/top-level-manuals.component";
import {DocumetControlLayoutComponent} from "./documet-control-layout/documet-control-layout.component";
import {Mgts1LayoutComponent} from "../scope/mgts1-layout/mgts1-layout.component";
import {Mgts1Component} from "../scope/mgts1/mgts1.component";
import {PdfViewerComponent} from "./pdf-viewer/pdf-viewer.component";
import {ProceduresComponent} from "./procedures/procedures.component";
import {ProductionRecordComponent} from "./production-record/production-record.component";


const routes: Routes = [
  {path: 'TopLevelManuals', component: DocumetControlLayoutComponent ,
    children: [
  {path: '', component: TopLevelManualsComponent, outlet: 'outlet1'},
]
},
  {path: 'Procedures', component: DocumetControlLayoutComponent ,
    children: [
      {path: '', component: ProceduresComponent, outlet: 'outlet1'},
    ]
  },
  {path: 'ProductionRecords', component: DocumetControlLayoutComponent ,
    children: [
      {path: '', component: ProductionRecordComponent, outlet: 'outlet1'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentControllRoutingModule { }