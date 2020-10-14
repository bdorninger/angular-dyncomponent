import {
  AfterViewInit,
  Component,
ComponentFactoryResolver,
ComponentRef,
    EventEmitter,
  Input,
  Output,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'evs-expandable',
  templateUrl: './evs-expandable.component.html',
  styleUrls: ['./evs-expandable.component.css']
})
export class EvsExpandableComponent implements AfterViewInit {
  @ViewChild('content', { read: ViewContainerRef })
  public content?: ViewContainerRef;

  @Input()
  public description = 'Description';
  @Input()
  public title = 'Title';

  @Output()
  public readonly expanded = new EventEmitter<void>();

  @Output()
  public readonly collapsed = new EventEmitter<void>();

  constructor(private compFactoryResolver: ComponentFactoryResolver) {
    //
  }

  public onExpand() {
    this.expanded.emit();
  }

  public afterCollapse() {
    this.collapsed.emit();
    // this.content?.clear();
  }

  public addContent(comp: ComponentRef<any>) {
    console.log("Adding",comp)
    this.content?.insert(comp.hostView);
  }

  public ngAfterViewInit(): void {
    //
  }
}