import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
// Typescript custom enum for search types (optional)
export var SearchType;
(function (SearchType) {
    SearchType["all"] = "";
    SearchType["movie"] = "movie";
    SearchType["series"] = "series";
    SearchType["episode"] = "episode";
})(SearchType || (SearchType = {}));
var MovieService = /** @class */ (function () {
    /**
     * Constructor of the Service with Dependency Injection
     * @param http The standard Angular HttpClient to make requests
     */
    function MovieService(http) {
        this.http = http;
        //url = 'http://www.omdbapi.com/';
        //url = 'http://localhost/api/book/';
        this.url = 'http://coop.ecoservicios.com.ar/api/stock/index.php';
        //url = 'http://localhost/api/stock/index.php';
        this.apiKey = '72b5e916'; // <-- Enter your own key here!
    }
    /**
    * Get data from the OmdbApi
    * map the result to return only the results that we need
    *
    * @param {string} title Search Term
    * @param {SearchType} type movie, series, episode or empty
    * @returns Observable with the search results
    */
    MovieService.prototype.searchData = function (title, type) {
        //return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`).pipe(
        //   map(results => results['Search'])
        // );
        return this.http.get(this.url + "?s=" + encodeURI(title)).pipe(map(function (results) { return results['Search']; }));
    };
    /**
    * Get the detailed information for an ID using the "i" parameter
    *
    * @param {string} id imdbID to retrieve information
    * @returns Observable with detailed information
    */
    MovieService.prototype.getDetails = function (id) {
        return this.http.get(this.url + "?i=" + id + "&plot=full&apikey=" + this.apiKey);
    };
    MovieService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        })
        // http://www.omdbapi.com/?s=casa&type=movie&apikey=72b5e916
        //OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=72b5e916
        ,
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], MovieService);
    return MovieService;
}());
export { MovieService };
//# sourceMappingURL=movie.service.js.map