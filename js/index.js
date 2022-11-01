const ascii =
  "Ñ@#W$9876543210?!abc;:+=-,._                                               ";

let video, asciiDiv, i, j;

function setup() {
  noCanvas();
  video = createCapture(VIDEO);
  video.size(74, 48);
  asciiDiv = createDiv();
}

function draw() {
  video.loadPixels();
  let screenAscii = "";
  for (j = 0; j < video.height; j++) {
    for (i = 0; i < video.width; i++) {
      const indexPixel = (i + j * video.width) * 4;
      const r = video.pixels[indexPixel + 0];
      const g = video.pixels[indexPixel + 1];
      const b = video.pixels[indexPixel + 2];
      const avg = (r + g + b) / 3;
      const lenAscii = ascii.length;
      const characterIndex = floor(map(avg, 0, 255, lenAscii, 0));
      const text = ascii.charAt(characterIndex);
      if (text == " ") screenAscii += "&nbsp;";
      else screenAscii += text;
    }
    screenAscii += "<br/>";
  }
  asciiDiv.html(screenAscii);
}
