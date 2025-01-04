"use client";

import Image from "next/image";

import React from "react";

import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from "react-zoom-pan-pinch";
import { Button } from "./ui/button";
interface ImageComponentProps {
  productUrl: string;
}
const Controls = () => {
  const { zoomIn, zoomOut, resetTransform } = useControls();

  return (
    <div className="transition-all  w-full flex items-center justify-around absolute bottom-2 left-3 z-50 ">
      <Button
        variant="ghost"
        className="text-white border "
        onClick={() => zoomIn()}
      >
        +
      </Button>
      <Button
        variant="ghost"
        className="text-white border "
        onClick={() => resetTransform()}
      >
        x
      </Button>
      <Button
        variant="ghost"
        className="text-white border "
        onClick={() => zoomOut()}
      >
        -
      </Button>
    </div>
  );
};
const ImageComponent: React.FC<ImageComponentProps> = ({ productUrl }) => {
  return (
    <TransformWrapper>
      <div className="flex items-center justify-around flex-col relative">
        <Controls />
        <TransformComponent>
          <Image
            width={600}
            height={600}
            src={productUrl}
            alt="test"
            className="rounded-lg"
          />
        </TransformComponent>
      </div>
    </TransformWrapper>
  );
};

export default ImageComponent;
