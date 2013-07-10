"use strict";

// В Chromium 30.0.1553.0 (209374) футер стал отображаться поверх текста. Скрываем его:
$('div.down').parent().parent().parent().parent().hide();

// Get rid of annoying background:
document.body.style.background = '#555';