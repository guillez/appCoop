import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MovieDetailsPage } from './movie-details.page';
var routes = [
    {
        path: '',
        component: MovieDetailsPage
    }
];
var MovieDetailsPageModule = /** @class */ (function () {
    function MovieDetailsPageModule() {
    }
    MovieDetailsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [MovieDetailsPage]
        })
    ], MovieDetailsPageModule);
    return MovieDetailsPageModule;
}());
export { MovieDetailsPageModule };
//# sourceMappingURL=movie-details.module.js.map