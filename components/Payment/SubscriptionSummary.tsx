import { ClearRounded, Padding } from "@mui/icons-material";
import { Chip, Typography, IconButton, Box, Divider } from "@mui/material";
import React from "react";

const SubscriptionSummary: React.FC = () => {
  return (
    <Box
      className="bg-paper rounded-2xl border border-action-divider lg:w-[400px] max-w-[600px]"
      component="aside"
      gap={2}
      alignItems="flex-start"
      sx={{
        padding: 3,
      }}
    >
      <Typography
        variant="h5"
        component="h5"
        color="textPrimary"
        marginBottom={3}
      >
        Abbonamento trimestrale
      </Typography>

      <Box gap={2} display="flex" flexDirection="column">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography color="textSecondary" variant="body-500">
            Subtotale
          </Typography>
          <Typography color="textPrimary" variant="body-500">
            49,80€
          </Typography>
        </Box>

        <Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography color="textSecondary" variant="body-500">
              Codice sconto
            </Typography>
            <Typography color="textPrimary" variant="body-500">
              -50% (24,90€)
            </Typography>
          </Box>
          <Chip
            label="SPRING24TRIM"
            size="medium"
            variant="filled"
            className="bg-neutral-main"
            sx={{
              padding: "0px !important",
            }}
          />
          <IconButton aria-label="clear" color="primary">
            <ClearRounded fontSize="small" />
          </IconButton>
        </Box>

        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="s1" color="textSecondary">
            Totale pagamento <br /> (tasse incluse)
          </Typography>
          <Typography variant="h3" component="h3" color="textPrimary">
            24,90€
          </Typography>
        </Box>

        <Typography variant="caption-500" color="textSecondary">
          Con questo coupon ti verrà addebitato il prezzo scontato di €24,90 per
          il primo addebito. Poi pagherai €49,80 ogni 3 mesi.
        </Typography>
      </Box>
    </Box>
  );
};

export default SubscriptionSummary;
