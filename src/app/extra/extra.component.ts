import { Component, AfterContentInit, ComponentRef, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { TestCompComponent } from '../test-comp/test-comp.component';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.styl']
})
export class ExtraComponent implements AfterContentInit {
  @ViewChild('insertComp', { read: ViewContainerRef }) targetComp: ViewContainerRef;
  private componentRef: ComponentRef<any>;

  constructor(private compiler: ComponentFactoryResolver) { }

  ngAfterContentInit() {
    // Resolve child component
    if (typeof this.targetComp !== 'undefined') {
      const componentFactory = this.compiler.resolveComponentFactory(TestCompComponent);
      this.componentRef = this.targetComp.createComponent(componentFactory);
      console.log(this.componentRef);
    }
    // this.renderComponent();
  }

}
