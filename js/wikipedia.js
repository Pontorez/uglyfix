"use strict";

$("a:contains('(G)')").each(function () {
    this.target = '_blank';
    this.href = this.href.replace('hl=ru', 'hl=en');
});
