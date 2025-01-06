"use client";

import Image from "next/image";
import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from "react-zoom-pan-pinch";
import { Button } from "./ui/button";

const Controls = () => {
  const { zoomIn, zoomOut, resetTransform } = useControls();

  return (
    <div className="transition-all w-full flex items-center justify-around absolute bottom-2 left-3 z-50">
      <Button
        variant="ghost"
        className="text-white border"
        onClick={() => zoomIn()}
      >
        +
      </Button>
      <Button
        variant="ghost"
        className="text-white border"
        onClick={() => resetTransform()}
      >
        x
      </Button>
      <Button
        variant="ghost"
        className="text-white border"
        onClick={() => zoomOut()}
      >
        -
      </Button>
    </div>
  );
};

const ImageComponent = ({
  productUrl,
  className,
}: {
  productUrl: string;
  className?: string;
}) => {
  return (
    <TransformWrapper>
      <div
        className={`flex items-center justify-around flex-col relative rounded-lg overflow-hidden ${className}`}
      >
        <Controls />
        <TransformComponent>
          <Image
            width={600}
            height={600}
            src={productUrl}
            alt={productUrl}
            className="rounded-lg shadow-md"
          />
        </TransformComponent>
      </div>
    </TransformWrapper>
  );
};

export default ImageComponent;
