import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MoviesPage } from './movies.page';
var routes = [
    {
        path: '',
        component: MoviesPage
    }
];
var MoviesPageModule = /** @class */ (function () {
    function MoviesPageModule() {
    }
    MoviesPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [MoviesPage]
        })
    ], MoviesPageModule);
    return MoviesPageModule;
}());
export { MoviesPageModule };
//# sourceMappingURL=movies.module.js.map