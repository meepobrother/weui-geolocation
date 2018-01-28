import {
    Component, KeyValueDiffers,
    ElementRef, Renderer2, HostListener,
    OnInit
} from '@angular/core';
import { ReactComponent } from 'ng-react-component';
export interface WeuiGeolocationProps {
    loc: any[];
    children: any[];
}
@Component({
    selector: 'weui-geolocation-preview',
    templateUrl: './weui-geolocation-preview.html',
    styleUrls: ['./weui-geolocation-preview.scss']
})
export class WeuiGeolocationPreviewComponent extends ReactComponent<WeuiGeolocationProps, any> implements OnInit {
    constructor(
        _differs: KeyValueDiffers,
        _ele: ElementRef,
        _render: Renderer2
    ) {
        super(_differs, _ele, _render);
    }

    ngOnInit() {
        window.addEventListener('message', (event) => {
            // 接收位置信息
            const loc = event.data;
            this.props.loc = loc;
        }, false);
    }

    onPropsChange() { }

    onStateChange() {
        console.log(this.state);
    }
}
