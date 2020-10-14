import {
AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Injector,
  ViewChild
} from "@angular/core";
import { EvsExpandableComponent } from "./evs-expandable/evs-expandable.component";
import { EvsLabelComponent } from "./evs-label/evs-label.component";
import { EvsLabelComponent } from "./evs-label/evs-label.component";

@Component({
  selector: "expansion-overview",
  templateUrl: "./expansion-overview-example.html",
  styleUrls: ["./expansion-overview-example.css"]
})
export class ExpansionOverviewExample implements AfterViewInit {
  @ViewChild("exp")
  expandable: EvsExpandableComponent;

  constructor(private cfResolver: ComponentFactoryResolver) {
    // 
  }

  addComp() {
    const cf = this.cfResolver.resolveComponentFactory<EvsLabelComponent>(EvsLabelComponent); 
    const inj = Injector.create([], )//this.expandable.injector);
    const cref = cf.create(inj);
    cref.instance.text = "Hoshi"
    this.expandable.addContent(cref);
  }

  onExpand() {
    console.log("Expand");
  }

  onCollapse() {
    console.log("Collapse");
  }

  ngAfterViewInit():void {
    console.log("exp: ",this.expandable);
  }
}
