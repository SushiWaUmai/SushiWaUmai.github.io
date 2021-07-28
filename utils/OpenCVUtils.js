export function colorQuantization(img, clusterCount) {
  let data = new cv.Mat(img.rows * img.cols, 3, cv.CV_32F);
  for (var y = 0; y < img.rows; y++)
    for (var x = 0; x < img.cols; x++)
      for (var z = 0; z < 4; z++)
        data.floatPtr(y + x * img.rows)[z] = img.ucharPtr(y, x)[z];

  var crite = new cv.TermCriteria(
    cv.TermCriteria_EPS + cv.TermCriteria_MAX_ITER,
    10000,
    0.0001
  );

  var labels = new cv.Mat();
  var attempts = 5;
  var centers = new cv.Mat();

  cv.kmeans(
    data,
    clusterCount,
    labels,
    crite,
    attempts,
    cv.KMEANS_RANDOM_CENTERS,
    centers
  );

  var newImage = new cv.Mat(img.size(), img.type());
  for (var y = 0; y < img.rows; y++) {
    for (var x = 0; x < img.cols; x++) {
      var cluster_idx = labels.intAt(y + x * img.rows, 0);
      var redChan = new Uint8Array(1);
      var greenChan = new Uint8Array(1);
      var blueChan = new Uint8Array(1);
      var alphaChan = new Uint8Array(1);
      redChan[0] = centers.floatAt(cluster_idx, 0);
      greenChan[0] = centers.floatAt(cluster_idx, 1);
      blueChan[0] = centers.floatAt(cluster_idx, 2);
      alphaChan[0] = 255;
      newImage.ucharPtr(y, x)[0] = redChan;
      newImage.ucharPtr(y, x)[1] = greenChan;
      newImage.ucharPtr(y, x)[2] = blueChan;
      newImage.ucharPtr(y, x)[3] = alphaChan;
    }
  }

  return newImage;
}

export function pixelateImage(
  img,
  width = 32,
  height = 32,
  colors = 12,
  blurIntensity = 3
) {
  let origWidth = img.cols;
  let origHeight = img.rows;

  let dsize = new cv.Size(width, height);
  let resize = new cv.Mat();
  cv.resize(img, resize, dsize, 0, 0, cv.INTER_NEAREST);

  let blur = new cv.Mat();
  cv.medianBlur(resize, blur, blurIntensity);

  let result = colorQuantization(blur, colors);

  let previewImg = new cv.Mat();
  let origDsize = new cv.Size(origWidth, origHeight);
  cv.resize(result, previewImg, origDsize, 0, 0, cv.INTER_NEAREST);

  return [result, previewImg];
}
