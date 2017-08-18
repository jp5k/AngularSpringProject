import {Component} from 'angular2/core';

@Component({
    selector: 'eccdeployer',
    templateUrl: 'src/app/components/eccdeployer/eccdeployer.template.html'
})
export class EccdeployerComponent {
    constructor() {
        var self = this;
        self.displayName = '';
    }
    setDisplayName(value){
        var self = this;
        self.displayName = value;
    }
}