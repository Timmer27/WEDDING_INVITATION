import React from "react";

const OptimizedPicture = ({
  avifSrc,
  webpSrc,
  fallbackSrc,
  alt,
  className,
  imgClassName,
  ...imgProps
}) => {
  return (
    <picture className={className}>
      {avifSrc ? <source srcSet={avifSrc} type="image/avif" /> : null}
      {webpSrc ? <source srcSet={webpSrc} type="image/webp" /> : null}
      <img
        className={imgClassName}
        src={fallbackSrc}
        alt={alt}
        {...imgProps}
      />
    </picture>
  );
};

export default OptimizedPicture;
