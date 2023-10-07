// const { styled } = require("@mui/system");
import { styled } from '@mui/system';
// const { Box } = require("@mui/material");
import { Box } from '@mui/material';

const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default FlexBetween;
