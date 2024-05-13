import { StyledImage } from "./styled";

type Props = {
  imageURL: string;
  alt?: string;
  width?: number;
  height?: number;
};

export const Image = ({ imageURL, alt, width, height }: Props) => {
  return <StyledImage src={imageURL} alt={alt} style={{ width, height }} />;
};
