import React from "react";
import { Box } from "@mui/material";

interface ContentProps {
  children: React.ReactNode
}

const Content = ({ children }: ContentProps) => {
  return (
    <Box sx={{ 
      width: '100%', 
      flexGrow: 1,
      px: 2,
      pt: 10.5,
      pb: 2.5,
      minHeight: '100vh'
    }}>
      {children}
    </Box>
  )
}

export default Content;