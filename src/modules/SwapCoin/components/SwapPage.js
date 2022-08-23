import { Grid } from "@mui/material";
import HistogramBox from "./HistogramBox";
import TradeBox from "./TradeBox";

const SwapPage = () => {
  return (
    <Grid container>
      <Grid item xs={8}>
        <HistogramBox />
      </Grid>
      <Grid item xs={4}>
        <TradeBox />
      </Grid>
    </Grid>
  )
};

export default SwapPage;
