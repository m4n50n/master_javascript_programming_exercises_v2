const search = (array, number) => {
  /**
   * Se compara el valor que estamos buscando con el valor central de un array ordenado
   * Si el valor es igual al punto medio, se ha encontrado; de lo contrario, se repite la búsqueda en la mitad inferior y superior (según el caso)
   */
  first_item = 0;
  last_item = array.length - 1;
  found = false;
  position = -1;

  while (!found && first_item <= last_item) {
      half = Math.floor((first_item + last_item) / 2);

      if (array[half] === number) {
          found = true;
          position = half;
      }
      else {
          if (number > array[half]) {
              first_item = half + 1;
          }   
          else {
              last_item = half - 1;
          }
      }        
  }

  if (found) { console.log("Encontrado en el index " + position); return position; } else { console.log("No encontrado!"); return null; }
}  

var arr = [1, 3, 16, 22, 31, 33, 34]
console.log(search(arr, 31)); // => 4