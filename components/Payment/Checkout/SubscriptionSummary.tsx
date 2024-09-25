"use client";

import {
  CancelRounded,
  ClearRounded,
  SearchRounded,
} from "@mui/icons-material";
import {
  Chip,
  Typography,
  IconButton,
  Box,
  Button,
  FormControl,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import React, { useState } from "react";

const SubscriptionSummary: React.FC = () => {
  const [showCouponInput, setShowCouponInput] = useState(false); // State to manage coupon input visibility
  const [couponCode, setCouponCode] = useState(""); // State to manage the entered coupon code
  const [appliedCoupon, setAppliedCoupon] = useState(""); // State to manage the applied coupon

  // Define constants for reused values
  const subtotal = "49,80€"; // Subtotal price
  const discountPercentage = "50%"; // Discount percentage
  const discountedPrice = "24,90€"; // Discounted price
  const originalPrice = "49,80€"; // Original price

  const handleApplyCoupon = () => {
    if (couponCode.trim() !== "") {
      setAppliedCoupon(couponCode); // Apply the entered coupon code
      setShowCouponInput(false); // Optionally hide the input after applying the coupon
    }
  };

  const handleClearCoupon = () => {
    setAppliedCoupon(""); // Clear the applied coupon
    setCouponCode(""); // Clear the input value
  };

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
        <div>
          <Box
            justifyContent="space-between"
            alignItems="center"
            className="sm:flex"
            gap={4}
          >
            <Typography
              color="textSecondary"
              variant="body-500"
              className="w-full"
              component="p"
            >
              Subtotale
            </Typography>
            <Typography color="textPrimary" variant="body-500" component="p">
              {subtotal} {/* Use the subtotal variable */}
            </Typography>
          </Box>

          {!showCouponInput &&
            !appliedCoupon && ( // Show 'Inserisci Coupon' button if no coupon is applied
              <Button
                size="small"
                variant="text"
                color="primary"
                className="px-0 flex ml-auto"
                onClick={() => setShowCouponInput(true)} // Show coupon input when clicked
              >
                <Typography variant="button-s">Inserisci Coupon</Typography>
              </Button>
            )}
        </div>

        {/* Conditionally render the coupon input box */}
        {showCouponInput && (
          <Box display="flex" columnGap={1}>
            <FormControl variant="outlined" className="w-full">
              <OutlinedInput
                className="pr-2"
                size="small"
                label="Inserisci codice sconto"
                value={couponCode} // Bind input value to couponCode state
                onChange={(e) => setCouponCode(e.target.value)} // Update couponCode on change
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="delete value"
                      sx={{ padding: "0px" }}
                      onClick={() => setCouponCode("")} // Aggiungi questo onClick per cancellare il campo
                    >
                      <CancelRounded className="text-text-secondary h-[16px]" />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <Button
              variant="outlined"
              color="primary"
              sx={{ padding: "4px 8px !important" }}
              onClick={handleApplyCoupon} // Apply coupon when clicked
              disabled={couponCode.trim() === ""} // Disable the button if input is empty
            >
              <Typography variant="button-s">Applica</Typography>
            </Button>

            <IconButton
              color="primary"
              onClick={() => setShowCouponInput(false)} // Hide coupon input when clear is clicked
            >
              <ClearRounded className="w-[16px] h-[16px]" />
            </IconButton>
          </Box>
        )}

        {/* Show the applied coupon block when a coupon is applied */}
        {appliedCoupon && (
          <Box>
            <Box
              justifyContent="space-between"
              alignItems="center"
              className="sm:flex"
              gap={4}
            >
              <Typography
                color="textSecondary"
                variant="body-500"
                className="w-full"
              >
                Codice sconto
              </Typography>
              <Typography color="textPrimary" variant="body-500" component="p">
                <span className="flex flex-nowrap text-nowrap">
                  {" "}
                  -{discountPercentage} ({discountedPrice}){" "}
                </span>
                {/* Use variables for discount */}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <Chip
                label={appliedCoupon} // Display the applied coupon code
                size="medium"
                variant="filled"
                className="bg-neutral-main"
                sx={{
                  padding: "0px !important",
                  height: "28px",
                }}
              />
              <IconButton
                aria-label="clear"
                color="primary"
                onClick={handleClearCoupon} // Clear coupon when clicked
              >
                <ClearRounded fontSize="small" />
              </IconButton>
            </Box>
          </Box>
        )}

        <Box
          justifyContent="space-between"
          alignItems="center"
          className="sm:flex"
          columnGap={2}
        >
          <Typography variant="s1" color="textSecondary">
            Totale pagamento <br className="lg:block" /> (tasse incluse)
          </Typography>
          <Typography variant="h3" component="h3" color="textPrimary">
            {appliedCoupon ? discountedPrice : originalPrice}{" "}
            {/* Update total based on coupon */}
          </Typography>
        </Box>

        <Typography variant="caption-500" color="textSecondary">
          Con questo coupon ti verrà addebitato il prezzo scontato di{" "}
          {discountedPrice} per il primo addebito. Poi pagherai {originalPrice}{" "}
          ogni 3 mesi.
        </Typography>
      </Box>
    </Box>
  );
};

export default SubscriptionSummary;
