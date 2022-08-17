import { Box, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { ChildCare } from "@mui/icons-material";

const StyledLink = styled(Link)(({ theme }) =>({
  "&:hover": {
    },
    textDecoration: "none",
    fontSize: 20,
    paddingLeft: 6,
    color: theme.palette.text.secondary
  })
)
const Logo = ({ isSidebarActive }: { isSidebarActive: boolean }) => {
  const theme = useTheme()
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          minHeight: "64px",
          lineHeight: "64px",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          paddingLeft: "20px",
          width: '100%',
        }}
      >
      <ChildCare sx={{ fontSize: "36px", color: theme.palette.text.secondary }} />
        {isSidebarActive && <StyledLink to="/">Xiaoqing</StyledLink>}
      </Box>
    </>
  );
};

export default Logo;
