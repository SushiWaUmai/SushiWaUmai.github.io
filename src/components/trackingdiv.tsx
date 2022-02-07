import React, { MouseEvent, useRef } from "react";
import { motion, TargetAndTransition, VariantLabels } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";

const mapValue = (
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number,
) => {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

interface TrackingDivProps {
  hoverVariant?: VariantLabels | TargetAndTransition | undefined;
}

const TrackingDiv: React.FC<TrackingDivProps> = ({
  children,
  hoverVariant,
}) => {
  const [isHovered, setHovered] = useState(false);

  const [x, setX] = useState(100);
  const [y, setY] = useState(100);

  const sizeObject = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sizeObject.current) {
      setX(sizeObject.current.clientWidth / 2);
      setY(sizeObject.current.clientHeight / 2);
    }
  }, [sizeObject]);

  const handleMouse = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    setX(x);
    setY(y);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);

    if (sizeObject.current) {
      setX(sizeObject.current.clientWidth / 2);
      setY(sizeObject.current.clientHeight / 2);
    }
  };

  return (
    <motion.div
      className="place-content-center place-items-center"
      style={{ perspective: 400 }}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      ref={sizeObject}
      whileHover={hoverVariant ?? { scale: 1.1 }}
    >
      {sizeObject.current && (
        <motion.div
          animate={
            isHovered
              ? {
                  rotateX: -mapValue(
                    y,
                    0,
                    sizeObject.current.clientWidth,
                    -45,
                    45,
                  ),
                  rotateY: mapValue(
                    x,
                    0,
                    sizeObject.current.clientHeight,
                    -45,
                    45,
                  ),
                }
              : { rotateX: 0, rotateY: 0 }
          }
          transition={{
            type: "spring",
            damping: 10,
            mass: 0.75,
            stiffness: 100,
          }}
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
};

export default TrackingDiv;
