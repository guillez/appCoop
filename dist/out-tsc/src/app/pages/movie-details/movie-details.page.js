import * as tslib_1 from "tslib";
import { MovieService } from './../../services/movie.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
var MovieDetailsPage = /** @class */ (function () {
    /**
     * Constructor of our details page
     * @param activatedRoute Information about the route we are on
     * @param movieService The movie Service to get data
     */
    function MovieDetailsPage(activatedRoute, movieService) {
        this.activatedRoute = activatedRoute;
        this.movieService = movieService;
        this.information = null;
    }
    MovieDetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        // Get the ID that was passed with the URL
        var id = this.activatedRoute.snapshot.paramMap.get('id');
        // Get the information from the API
        this.movieService.getDetails(id).subscribe(function (result) {
            _this.information = result;
        });
    };
    MovieDetailsPage.prototype.openWebsite = function () {
        window.open(this.information.Website, '_blank');
    };
    MovieDetailsPage = tslib_1.__decorate([
        Component({
            selector: 'app-movie-details',
            templateUrl: './movie-details.page.html',
            styleUrls: ['./movie-details.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, MovieService])
    ], MovieDetailsPage);
    return MovieDetailsPage;
}());
export { MovieDetailsPage };
//# sourceMappingURL=movie-details.page.js.map