function rot13(str) {
  let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";

  function recorrer(pal) {
    let posicion = abc.indexOf(pal);
    posicion = (posicion + 13) % 26;

    return abc[posicion];
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/\s/) || str[i].match(/\W/)) {
      result = result.concat(str[i]);
    } else {
      result = result.concat(recorrer(str[i]));
    }
  }

  return result;
}
