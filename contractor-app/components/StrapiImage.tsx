import Image, { ImageProps } from "next/image";
import React from "react";

function getStrapiURL() {
  return process.env.STRAPI_URL ?? "http://localhost:1337";
}

function getStrapiMedia(url: string) {
  if (url.startsWith("data:")) return url;
  if (url.startsWith("http") || url.startsWith("//")) return url;
  return `${getStrapiURL()}${url}`;
}

interface StrapiImageProps extends ImageProps {
  src: string;
}

export const StrapiImage = ({ src, ...rest }: StrapiImageProps) => {
  return <Image src={getStrapiMedia(src)} {...rest} />;
};
