import {Directive, ViewContainerRef, Input, ComponentFactory, Injector} from "@angular/core";

@Directive({
    selector: "[component-compiler]",
    inputs: [
        "factory:dynamicallyCompiled",
        "model:model",
        "injector:injector"
    ]

})
export class DynamicallyCompiledComponentDirective {

    private model;
    private factory: ComponentFactory<any>;
    private injector: Injector = null;

    constructor(private viewContainer: ViewContainerRef) {

    }

    @Input() set dynamicallyCompiled(comp: ComponentFactory<any>) {
        this.viewContainer.clear();

        //noinspection TypeScriptUnresolvedVariable
        this.viewContainer.createComponent(comp, null, this.injector).instance.model = this.model;

    }
}