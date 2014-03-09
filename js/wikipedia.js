"use strict";

// Link to Google maps
$("a:contains('(G)')").each(function () {
    this.target = '_blank';
    this.href = this.href.replace('hl=ru', 'hl=en');
});

// "Красивые" имена файлов при сохранении страниц
document.title = document.title.replace(' — Википедия', '').replace(' - Wikipedia, the free encyclopedia', '');

// Различия между версиями — переход на предыдущую/следующую правку с помощью C+Left / C+Right
if (window.location.toString().indexOf('oldid')) {
    window.onkeydown = function (e) {

        e = e || window.event;
        var keyCode = e.keyCode || e.which;

        if (e.ctrlKey) {
            try {
                if (keyCode == 37) {
                    document.getElementById('differences-prevlink').click();
                } else if (keyCode == 39) {
                    document.getElementById('differences-nextlink').click();
                }
            } catch (e) {
                alert('Looks like you have reached the first or the most recent edit');
            }
        }
    }
}
