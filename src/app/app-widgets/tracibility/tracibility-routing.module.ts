import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProcessComponent } from "./process/process.component";
import { StoreComponent } from "./store/store.component";
import { WorksheetComponent } from "./worksheet/worksheet.component";
import { SuppliersComponent } from "./suppliers/suppliers.component";
import { SupplierRegistrationComponent } from "./supplier-registration/supplier-registration.component";
import { AddProcessComponent } from "./add-process/add-process.component";
import { ProcessDetailComponent } from "./process-detail/process-detail.component";
import { AddProcessStepsComponent } from "./add-process-steps/add-process-steps.component";
import { FinalWorkSheetComponent } from "./final-work-sheet/final-work-sheet.component";
import { FinalStoreComponent } from "./final-store/final-store.component";
import { WorkSheetDetailComponent } from "./work-sheet-detail/work-sheet-detail.component";
import { ProcessStepDetailComponent } from "./process-step-detail/process-step-detail.component";

const routes: Routes = [
  { path: "process", component: ProcessComponent },
  { path: "store", component: StoreComponent },
  { path: "worksheet", component: WorksheetComponent },
  { path: "supplier", component: SuppliersComponent },
  { path: "supplier/add", component: SuppliersComponent },
  { path: "supplier/regstration", component: SupplierRegistrationComponent },
  { path: "process/add", component: AddProcessComponent },
  { path: "process/detail/:id", component: ProcessDetailComponent },
  { path: "process/steps", component: AddProcessStepsComponent },
  { path: "final", component: FinalWorkSheetComponent },
  { path: "final-store", component: FinalStoreComponent },
  { path: "work-sheet/detail/:id", component: WorkSheetDetailComponent },
  { path: "process/step/detail/:id", component: ProcessStepDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TracibilityRoutingModule {}
