/*!
* qsHelper: Helper to read search and hash values from URL
*
* Version: 0.2
*
* Author: Wulf Weich
* Web: https://github.com/wweich/qsHelper
*
* Licensed under
*   MIT License http://www.opensource.org/licenses/mit-license
*   GPL v3 http://opensource.org/licenses/GPL-3.0
*
*/
qsHelper = {
    qsObject: null,
    parseQS: function () {
        this.qsObject = {};
        if (window.location.search && window.location.search.indexOf('=') > -1) {
            this.qsObject['search'] = {};
            if (window.location.search.indexOf('&') == -1) {
                var tmpSearch = window.location.search.substr(1);
                var searchItem = tmpSearch.split('=');
                if (searchItem.length == 2) {
                    this.qsObject['search'][searchItem[0].toUpperCase()] = searchItem[1];
                }
            }
            else {
                var tmpSearch = window.location.search.substr(1).split('&');
                for (var i = 0; i < tmpSearch.length; i++) {
                    var searchItem = tmpSearch[i].split('=');
                    if (searchItem.length == 2) {
                        this.qsObject['search'][searchItem[0].toUpperCase()] = searchItem[1];
                    }
                }
            }
        }
        if (window.location.hash && window.location.hash.indexOf('=') > -1) {
            this.qsObject['hash'] = {};
            if (window.location.hash.indexOf('&') == -1) {
                var tmpHash = window.location.hash.substr(1);
                var hashItem = tmpHash.split('=');
                if (hashItem.length == 2) {
                    this.qsObject['hash'][hashItem[0].toUpperCase()] = hashItem[1];
                }
            }
            else {
                var tmpHash = window.location.hash.substr(1).split('&');
                for (var i = 0; i < tmpHash.length; i++) {
                    var hashItem = tmpHash[i].split('=');
                    if (hashItem.length == 2) {
                        this.qsObject['hash'][hashItem[0].toUpperCase()] = hashItem[1];
                    }
                }
            }
        }
    },
    search: function (name) {
        if (!this.qsObject) this.parseQS();
        if (this.qsObject['search'] && this.qsObject['search'][name.toUpperCase()]) return this.qsObject['search'][name.toUpperCase()];
        return null;
    },
    hash: function (name) {
        if (!this.qsObject) this.parseQS();
        if (this.qsObject['hash'] && this.qsObject['hash'][name.toUpperCase()]) return this.qsObject['hash'][name.toUpperCase()];
        return null;
    },
    hasSearch: function (name) {
        if (!this.qsObject) { this.parseQS(); }
        if (this.qsObject['search'] && this.qsObject['search'][name.toUpperCase()]) { return true; }
        return false;
    },
    hasSearchValue: function (name) {
        if (!this.qsObject) { this.parseQS(); }
        if (this.qsObject['search'] && this.qsObject['search'][name.toUpperCase()] && this.qsObject['search'][name.toUpperCase()] != '') { return true; }
        return false;
    },
    hasHash: function (name) {
        if (!this.qsObject) { this.parseQS(); }
        if (this.qsObject['hash'] && this.qsObject['hash'][name.toUpperCase()]) { return true; }
        return false;
    },
    hasHashValue: function (name) {
        if (!this.qsObject) { this.parseQS(); }
        if (this.qsObject['hash'] && this.qsObject['hash'][name.toUpperCase()] && this.qsObject['hash'][name.toUpperCase()] != '') { return true; }
        return false;
    },
    getSearchValue: function (name, altValue) {
        if (!this.qsObject) { this.parseQS(); }
        if (this.qsObject['search'] && this.qsObject['search'][name.toUpperCase()] && this.qsObject['search'][name.toUpperCase()] != '') { return this.qsObject['search'][name.toUpperCase()]; }
        if (typeof altValue != 'undefined') { return altValue; }
        return '';
    },
    getHashValue: function (name, altValue) {
        if (!this.qsObject) this.parseQS();
        if (this.qsObject['hash'] && this.qsObject['hash'][name.toUpperCase()] && this.qsObject['hash'][name.toUpperCase()] != '') { return this.qsObject['hash'][name.toUpperCase()]; }
        if (typeof altValue != 'undefined') { return altValue; }
        return '';
    }
}
