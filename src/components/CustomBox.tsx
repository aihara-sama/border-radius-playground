import type { SxProps } from "@mui/material";
import { Box } from "@mui/material";
import type { Theme } from "@mui/material/styles";
import type { FunctionComponent } from "react";

interface IProps {
  borderTopLeftRadius: number;
  borderBottomLeftRadius: number;
  borderTopRightRadius: number;
  borderBottomRightRadius: number;
}

const CustomBox: FunctionComponent<IProps> = ({
  borderTopLeftRadius,
  borderBottomLeftRadius,
  borderTopRightRadius,
  borderBottomRightRadius,
}) => {
  const containerStyles: SxProps<Theme> = {
    borderTopLeftRadius: `${borderTopLeftRadius}px`,
    borderBottomLeftRadius: `${borderBottomLeftRadius}px`,
    borderTopRightRadius: `${borderTopRightRadius}px`,
    borderBottomRightRadius: `${borderBottomRightRadius}px`,
    width: "300px",
    height: "300px",
    border: "3px solid",
    borderColor: (theme) => theme.palette.primary.main,
  };

  return <Box sx={containerStyles}></Box>;
};

export default CustomBox;
