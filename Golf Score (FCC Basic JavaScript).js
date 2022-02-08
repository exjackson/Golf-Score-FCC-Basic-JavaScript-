function golfScore(par, strokes) {
    let x = "";
    switch(true){
      case (strokes === 1):
      x="Hole-in-one!";
      break;
      case (strokes <= par - 2):
      x="Eagle";
      break;
      case (strokes === par - 1):
      x="Birdie";
      break;
      case (strokes === par):
      x="Par"
      break;
      case (strokes === par + 1):
      x="Bogey";
      break;
      case (strokes === par + 2):
      x="Double Bogey";
      break;
      case (strokes >= par + 3):
      x="Go Home!"
      break;
    }
  return x;
}