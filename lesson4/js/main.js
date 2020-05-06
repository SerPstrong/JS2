const str = "Geek from 'Geekbrains' geek from Geekbrain's geek from Geekbrains geek from Geekbrains geek from Geekbrains geek from Geekbrains geek from Geekbrains geek from Geekbrains geek from Geekbrains";
const regexp = /\s'\b|\b'\s/g;
document.write(str.replace(regexp, '"'));

