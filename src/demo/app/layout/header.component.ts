import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
// @ts-ignore
import defaultTheme from '../../../ng-select/themes/default.theme.scss';

type langDir = 'ltr' | 'rtl';

@Component({
    selector: 'layout-header',
    template: `
        <nav class="navbar navbar-expand flex-column flex-md-row bd-navbar">
            <a class="navbar-brand" href="#">
                <img src="https://angular.io/assets/images/logos/angular/angular.svg" width="32px" height="32px"/>
                @libertymp/ng-select
            </a>
            <button class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarsExampleDefault"
                    aria-controls="navbarsExampleDefault"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse">
                <form class="form-inline my-2 my-lg-0">
                    <a class="github-button"
                       href="https://github.com/liberty-mp/ng-select"
                       data-icon="mark-github"
                       data-size="large"
                       data-show-count="true"
                       aria-label="Visit liberty-mp/ng-select on GitHub">Github</a>
                </form>
            </div>
        </nav>
    `
})
export class LayoutHeaderComponent implements AfterViewInit {
    theme = 'Default theme';
    @Input() version: string;

    private style: HTMLStyleElement;

    ngAfterViewInit() {
        setTimeout(() => {
            this.style = document.createElement('style');
            this.style.type = 'text/css';
            this.style.id = 'MyStyleTag'
            this.style.innerHTML = defaultTheme;
            document.getElementsByTagName('head')[0].appendChild(this.style);
        }, 100);
    }
}


