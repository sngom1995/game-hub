import React, { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
}

const CardGameContainer = ({ children }) => {
  return (
    <Box width="300px" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default CardGameContainer;
