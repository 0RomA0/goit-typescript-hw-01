// Створити змінну, яка може містити або рядок, або число(union type) ? Також, оголосити змінну,
// яка може містити лише одне з двох можливих рядкових значень: 'enable' або 'disable'(literal type).


let value: string | number;

value = "hello";
value = 10;
// value = true;



let enableOrDisable: "enable" | "disable";

enableOrDisable = "enable";
enableOrDisable = "disable";
// enableOrDisable = "hello";