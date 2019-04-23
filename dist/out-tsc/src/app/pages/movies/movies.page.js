import * as tslib_1 from "tslib";
import { MovieService, SearchType } from './../../services/movie.service';
import { Component } from '@angular/core';
var MoviesPage = /** @class */ (function () {
    /**
     * Constructor of our first page
     * @param movieService The movie Service to get data
     */
    function MoviesPage(movieService) {
        this.movieService = movieService;
        this.searchTerm = '';
        this.type = SearchType.all;
    }
    MoviesPage.prototype.ngOnInit = function () { };
    MoviesPage.prototype.searchChanged = function () {
        // Call our service function which returns an Observable
        this.results = this.movieService.searchData(this.searchTerm, this.type);
    };
    MoviesPage = tslib_1.__decorate([
        Component({
            selector: 'app-movies',
            templateUrl: './movies.page.html',
            styleUrls: ['./movies.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [MovieService])
    ], MoviesPage);
    return MoviesPage;
}());
export { MoviesPage };
//# sourceMappingURL=movies.page.js.map