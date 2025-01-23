import { Box, Stack, Skeleton } from "@mui/material";
import React, { useContext } from "react";
import SkeletonCss from "../Css/HomeSkeleton.module.css";
import { ModeContext } from "./ModeContext";

const HomeSkeleton = () => {
  const { mode } = useContext(ModeContext);
  const animationType = mode === "dark" ? "pulse" : "wave";

  const skeletonStyles = (heightSm, heightXs, widthSm, widthXs) => ({
    height: { sm: heightSm, xs: heightXs },
    width: { sm: widthSm, xs: widthXs },
  });

  return (
    <Box
      className={SkeletonCss.main}
      data-theme={mode}
      sx={{
        display: "flex",
        flexDirection: { sm: "row", xs: "column" },
      }}
    >
      <Box
        sx={{
          marginTop: { sm: "4rem", xs: "2.5rem" },
          marginLeft: { sm: "4rem", xs: "1rem" },
        }}
      >
        <Stack spacing={1} height="75vh">
          {[ 
            { heightSm: "3rem", heightXs: "4rem", widthSm: "13rem", widthXs: "12rem" },
            { heightSm: "3rem", heightXs: "4rem", widthSm: "20rem", widthXs: "18rem" },
            { heightSm: "9rem", heightXs: "18rem", widthSm: "30rem", widthXs: "20rem" },
            { heightSm: "3rem", heightXs: "4rem", widthSm: "12rem", widthXs: "15rem" },
          ].map((size, index) => (
            <Skeleton
              key={index}
              variant="rounded"
              sx={skeletonStyles(size.heightSm, size.heightXs, size.widthSm, size.widthXs)}
              animation={animationType}
              data-theme={mode}
              className={SkeletonCss.text}
            />
          ))}
        </Stack>
      </Box>
      <Box
        sx={{
          margin: "auto",
          marginTop: { sm: "4rem", xs: "0rem" },
          marginRight: { sm: "7rem", xs: "auto" },
        }}
      >
        <Skeleton
          variant="rounded"
          animation={animationType}
          sx={{
            height: { sm: "21rem", xs: "3rem" },
            width: { sm: "17rem", xs: "12rem" },
            display: { sm: "block", xs: "none" },
          }}
          className={SkeletonCss.image}
        />
      </Box>
    </Box>
  );
};

export default HomeSkeleton;
