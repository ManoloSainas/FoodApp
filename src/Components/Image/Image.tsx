// import { StyledImage } from "./styled";

import { StyledImage } from "./styled";

type Props = {
  imageURL: string;
  alt?: string;
  width?: number;
  height?: number;
};

export const Image = ({ imageURL, alt, width, height }: Props) => {
  return (
    <StyledImage src={imageURL} alt={alt} $width={width} $height={height} />
  );
};
