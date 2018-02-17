import { Component, AfterContentInit, ComponentRef, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { TestCompComponent } from '../../test-comp/test-comp.component';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.styl']
})
export class OtherComponent implements AfterContentInit {
  @ViewChild('insertComp', { read: ViewContainerRef }) targetComp: ViewContainerRef;
  private componentRef: ComponentRef<any>;

  constructor(private compiler: ComponentFactoryResolver) { }

  ngAfterContentInit() {
    // Resolve child component
    const componentFactory = this.compiler.resolveComponentFactory(TestCompComponent);
    this.componentRef = this.targetComp.createComponent(componentFactory);
    console.log(this.componentRef);
    // this.renderComponent();
  }

}
