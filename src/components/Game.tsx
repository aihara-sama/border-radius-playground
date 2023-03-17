import { Box, Button, Container, Slider, Typography } from "@mui/material";
import { useState } from "react";
import { getRandomRadius } from "utils/getRandomRadius";
import CustomBox from "./CustomBox";

const Game = () => {
  const [radius, setRadius] = useState(getRandomRadius());

  const handleChangeRadius = (radiusName: string, radiusValue: number) => {
    setRadius((prev) => ({ ...prev, [radiusName]: radiusValue }));
  };

  const handleSetRandomRadius = () => {
    setRadius(getRandomRadius());
  };
  const handleResetRadius = () => {
    setRadius({
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    });
  };

  return (
    <Container>
      <Box sx={{ mt: 10 }}>
        <Typography
          variant="h1"
          color="text.secondary"
          textAlign={"center"}
          mb={5}
        >
          Border radius playground
        </Typography>
        <Box sx={{ width: "300px", margin: "0 auto" }}>
          <Slider
            min={0}
            max={300}
            defaultValue={0}
            aria-label="Border top left radius"
            valueLabelDisplay="auto"
            value={radius.borderTopLeftRadius}
            onChange={(_, value) => {
              handleChangeRadius("borderTopLeftRadius", value as number);
            }}
          />
          <Slider
            min={0}
            max={300}
            defaultValue={0}
            aria-label="Border bottom left radius"
            valueLabelDisplay="auto"
            value={radius.borderBottomLeftRadius}
            onChange={(_, value) => {
              handleChangeRadius("borderBottomLeftRadius", value as number);
            }}
          />
          <Slider
            min={0}
            max={300}
            defaultValue={0}
            aria-label="Border top right radius"
            valueLabelDisplay="auto"
            value={radius.borderTopRightRadius}
            onChange={(_, value) => {
              handleChangeRadius("borderTopRightRadius", value as number);
            }}
          />
          <Slider
            min={0}
            max={300}
            defaultValue={0}
            aria-label="Border bottom right radius"
            valueLabelDisplay="auto"
            value={radius.borderBottomRightRadius}
            onChange={(_, value) => {
              handleChangeRadius("borderBottomRightRadius", value as number);
            }}
          />
          <Box mt={1}>
            <Button
              sx={{ mb: 1 }}
              variant="contained"
              onClick={() => handleSetRandomRadius()}
              fullWidth
            >
              Random
            </Button>
            <Button
              variant="contained"
              onClick={() => handleResetRadius()}
              fullWidth
              color="error"
            >
              Reset
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 10,
          }}
        >
          <CustomBox
            borderTopLeftRadius={radius.borderTopLeftRadius}
            borderBottomLeftRadius={radius.borderBottomLeftRadius}
            borderTopRightRadius={radius.borderTopRightRadius}
            borderBottomRightRadius={radius.borderBottomRightRadius}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Game;
