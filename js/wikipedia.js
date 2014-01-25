"use strict";

// Link to Google maps
$("a:contains('(G)')").each(function () {
    this.target = '_blank';
    this.href = this.href.replace('hl=ru', 'hl=en');
});

document.title = document.title.replace(' — Википедия', '');
