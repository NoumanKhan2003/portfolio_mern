import { Box, Stack, Skeleton } from "@mui/material";
import React, { useContext } from "react";
import SkeletonCss from "../Css/HomeSkeleton.module.css";
import { ModeContext } from "./ModeContext";

const HomeSkeleton = () => {
  const { mode } = useContext(ModeContext);
  return (
    <Box
      className={SkeletonCss.main}
      data-theme={mode}
      sx={{
        display: "flex",
        flexDirection: {
          sm: "row",
          xs: "column",
        },
      }}
    >
      <Box
        sx={{
          marginTop: {
            sm: "4rem",
            xs: "20rem",
          },
          marginLeft: {
            sm: "4rem",
            xs: "20rem",
          },
        }}
      >
        <Stack spacing={1} height="100vh">
          <Skeleton
            variant="rounded"
            width="13rem"
            height="3rem"
            animation={mode === "dark" ? "pulse" : "wave"}
            data-theme={mode}
            className={SkeletonCss.text}
          />
          <Skeleton
            variant="rounded"
            width="20rem"
            height="3rem"
            animation={mode === "dark" ? "pulse" : "wave"}
            data-theme={mode}
            className={SkeletonCss.text}
          />
          <Skeleton
            variant="rounded"
            width="30rem"
            height="9rem"
            animation={mode === "dark" ? "pulse" : "wave"}
            data-theme={mode}
            className={SkeletonCss.text}
          />
          <Skeleton
            variant="rounded"
            width="12rem"
            height="3rem"
            animation={mode === "dark" ? "pulse" : "wave"}
            data-theme={mode}
            className={SkeletonCss.text}
          />
        </Stack>
      </Box>
      <Box
        sx={{
          margin: "auto",
          marginTop: {
            sm: "4rem",
            xs: "20rem",
          },
          marginRight: {
            sm: "7rem",
            xs: "20rem",
          },
        }}
      >
        <Skeleton
          variant="rounded"
          animation={mode === "dark" ? "pulse" : "wave"}
          width="17rem"
          height="21rem"
          className={SkeletonCss.image}
        />
      </Box>
    </Box>
  );
};

export default HomeSkeleton;
