What is a callback function?
A callback function is just a function that you give to another function so it can use it later. The main function decides when to run the callback.

Where are callback functions used in this code?
They are used in forEach(), map(), filter(), and reduce(). These functions use the callback to run code on each item in the expenses array.

Why do map, filter, and reduce need callback functions?
They need callback functions because they don’t know what you want to do with the data. The callback tells them exactly what action to perform on each item in the array.