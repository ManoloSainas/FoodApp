type Props = {
  imageURL: string;
  alt?: string;
  width?: number;
  height?: number;
  borderRadius?: number;
};

export const Image = ({
  imageURL,
  alt,
  width,
  height,
  borderRadius,
}: Props) => {
  return (
    <img src={imageURL} alt={alt} style={{ width, height, borderRadius }} />
  );
};
