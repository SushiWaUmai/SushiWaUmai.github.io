import React from "react";
import Script from "next/script";

export default function OpenCVLoaderComponent() {
  function onOpenCvReady() {
    console.log("OpenCV Ready");
  }
  
  return (
    <div>
      <Script
        src="https://docs.opencv.org/4.5.3/opencv.js"
        strategy="lazyOnload"
        onLoad={onOpenCvReady()}
        type="application/javascript"
      ></Script>
    </div>
  );
}
