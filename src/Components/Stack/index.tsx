import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  justifyContent?: string;
  alignItems?: string;
  height?: string;
  width?: string;
  backgroundColor?: string;
  gap?: number;
  flex?: number;
}>;

export const Stack = ({
  children,
  flexDirection = "row",
  justifyContent = "start",
  alignItems = "start",
  height = "max-content",
  width,
  backgroundColor,
  gap,
  flex,
}: Props) => {
  return (
    <div
      style={getTextStyle({
        flexDirection,
        justifyContent,
        alignItems,
        height,
        width,
        backgroundColor,
        gap,
        flex,
      })}
    >
      {children}
    </div>
  );
};

const getTextStyle = ({
  flexDirection,
  justifyContent,
  alignItems,
  height,
  width,
  backgroundColor,
  gap,
  flex,
}: Props) => ({
  display: "flex",
  flexDirection,
  justifyContent,
  alignItems,
  height,
  width,
  backgroundColor,
  gap,
  flex,
});
