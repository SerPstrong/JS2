const str = "Geek from 'Geekbrains' geek from Geekbrain's geek from Geekbrains geek from Geekbrains geek from Geekbrains geek from Geekbrains geek from Geekbrains geek from Geekbrains geek from Geekbrains";
const regexp = /'\b/g;
document.write(str.replace(regexp, '"'));

