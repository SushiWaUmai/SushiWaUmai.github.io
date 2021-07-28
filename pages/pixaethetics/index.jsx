import React, { useState, useEffect, useRef } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Head from "next/head";
import OpenCVLoaderComponent from "../../components/OpenCVLoaderComponent";
import { pixelateImage } from "../../utils/OpenCVUtils";

export default function PixelartGeneratorPage() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [previewImageUrl, setPreviewImageUrl] = useState(null);
  const [resultImageUrl, setResultImageUrl] = useState(null);
  const [inputFileName, setInputfileName] = useState(null);

  const [targetWidth, setTargetWidth] = useState(32);
  const [targetHeight, setTargetHeight] = useState(32);
  const [targetColors, setTargetColors] = useState(8);
  const targetWidthElement = useRef(null);
  const targetHeightElement = useRef(null);

  const imgUploadElement = useRef(null);
  const previewCanvasElement = useRef(null);
  const resultCanvasElement = useRef(null);

  async function loadImg(e) {
    let file = e.target.files[0];
    let url = URL.createObjectURL(file);
    setPreviewImageUrl(url);
    setInputfileName(file.name);
    showImage(url);
  }

  function showImage(url) {
    var img = new window.Image();
    img.addEventListener("load", function () {
      let canvas = previewCanvasElement.current;

      // Set image to approprite size
      const maxWidth = window.innerWidth * 0.5;
      if (img.width > maxWidth) {
        const aspectRatio = img.height / img.width;
        canvas.width = maxWidth;
        canvas.height = maxWidth * aspectRatio;
      } else {
        canvas.width = img.width;
        canvas.height = img.height;
      }

      let ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      let currentTargetWidth = Math.floor(img.width / 10);
      let currentTargetHeight = Math.floor(img.height / 10);
      setTargetWidth(currentTargetWidth);
      setTargetHeight(currentTargetHeight);
      targetWidthElement.current.value = currentTargetWidth;
      targetHeightElement.current.value = currentTargetHeight;
    });
    img.src = url;
    // img.crossOrigin = "";
  }

  function processImg() {
    if (previewImageUrl) {
      setIsProcessing(true);

      let img = cv.imread(previewCanvasElement.current);

      console.log(targetWidth, targetHeight, targetColors);
      const [result, previewImg] = pixelateImage(
        img,
        targetWidth,
        targetHeight,
        targetColors
      );
      cv.imshow(resultCanvasElement.current, result);
      setResultImageUrl(resultCanvasElement.current.toDataURL(1.0));

      cv.imshow(resultCanvasElement.current, previewImg);

      setIsProcessing(false);
    }
  }

  useEffect(() => {
    showImage("https://via.placeholder.com/250x250?text=Click+to+upload+file");
    console.log("grab");
  }, []);

  return (
    <div>
      <Head>
        <title>Pixaethetics | SushiWaUmai</title>
        <meta name="keywords" content="pixelart, art, generator, gamedev" />
        <meta name="description" content="Create pixelart from real images!" />
      </Head>
      <OpenCVLoaderComponent />
      <Container className="bg-light p-5">
        <div className="m-2">
          <Row>
            <Col>
              <h1>Pixaethetics</h1>
              <h5 className="text-muted">
                Generate pixelart from real life images!
              </h5>
              <hr />
            </Col>
          </Row>
          <Row className="m-2">
            <Form>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Choose a file you want to pixelate</Form.Label>
                <Form.Control
                  type="file"
                  accept=".png,.jpg,.jpeg"
                  ref={imgUploadElement}
                  onChange={(e) => loadImg(e)}
                />
              </Form.Group>
            </Form>
          </Row>

          <Row className="m-2">
            <Col>
              <canvas
                onClick={() => imgUploadElement.current.click()}
                ref={previewCanvasElement}
              />
            </Col>
          </Row>

          <Row className="m-2">
            <Col>
              <Form.Group>
                <Form.Label>Width</Form.Label>
                <Form.Control
                  ref={targetWidthElement}
                  defaultValue={targetWidth}
                  onChange={(e) => setTargetWidth(e.target.valueAsNumber)}
                  type="number"
                  min={1}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Height</Form.Label>
                <Form.Control
                  ref={targetHeightElement}
                  defaultValue={targetHeight}
                  onChange={(e) => setTargetHeight(e.target.valueAsNumber)}
                  type="number"
                  min={1}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="m-2">
            <Col>
              <Form.Group>
                <Form.Label>Colors</Form.Label>
                <Form.Control
                  defaultValue={targetColors}
                  onChange={(e) => setTargetColors(e.target.valueAsNumber)}
                  type="number"
                  min={1}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="m-2">
            <Col>
              <Button
                onClick={processImg}
                disabled={isProcessing || !previewImageUrl}
                className="p-3"
              >
                Convert
              </Button>
              <hr />
            </Col>
          </Row>

          <Row className="m-2">
            <Col>
              {isProcessing ? <p>Processing...</p> : null}
              <canvas ref={resultCanvasElement}></canvas>
            </Col>
          </Row>
          <Row className="m-2">
            <Col>
              {resultImageUrl ? (
                <Link href={resultImageUrl}>
                  <a
                    role="button"
                    download={`pixelart-${inputFileName}`}
                    className="btn btn-dark p-3"
                  >
                    Download
                  </a>
                </Link>
              ) : null}
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
