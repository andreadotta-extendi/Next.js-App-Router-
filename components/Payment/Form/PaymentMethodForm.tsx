"use client";
import React from "react";
import { Box, Button, TextField, Typography } from "@/app/mui-components";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { CreditCardRounded } from "@mui/icons-material";
import PaymentsRoundedIcon from "@mui/icons-material/PaymentsRounded";

const PaymentMethodForm: React.FC = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <section className="flex gap-4 items-start mt-2 w-full max-md:max-w-full">
        <div className="flex flex-col p-6 w-full rounded-2xl bg-paper max-md:px-5">
          <Typography variant="h3" component="h3" className="text-text-primary">
            Metodo di pagamento
          </Typography>
          <div className="flex flex-col mt-6 w-full max-md:max-w-full">
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab
                    label={<Typography variant="s1">Credit Card</Typography>}
                    icon={<CreditCardRounded />}
                    value="1"
                    iconPosition="start"
                    className="capitalize"
                  />
                  <Tab
                    label={<Typography variant="s1">Paypal</Typography>}
                    icon={<PaymentsRoundedIcon />}
                    value="2"
                    iconPosition="start"
                    className="capitalize"
                  />
                </TabList>
              </Box>

              <TabPanel value="3">Item Three</TabPanel>

              <form className="flex flex-col mt-6 w-full max-md:max-w-full">
                <TabPanel value="1" sx={{ padding: "0px" }}>
                  <TextField
                    placeholder="Numero della tua carta"
                    variant="outlined"
                    size="medium"
                    className="w-full"
                    InputProps={{}}
                    label="Numero carta"
                    id="cardNumber"
                  />
                  <div className="flex gap-6 items-start mt-6 w-full whitespace-nowrap max-md:max-w-full">
                    <TextField
                      placeholder="MM/AA"
                      variant="outlined"
                      size="medium"
                      className="w-full"
                      InputProps={{}}
                      label="Scadenza"
                      id="expiryDate"
                    />
                    <TextField
                      placeholder="***"
                      type="password"
                      variant="outlined"
                      size="medium"
                      className="w-full"
                      InputProps={{}}
                      label="CVC"
                      id="cvc"
                    />
                  </div>
                </TabPanel>
                <TabPanel value="2" sx={{ padding: "0px" }}>
                  <Button
                    size="large"
                    variant="contained"
                    color="primary"
                    className="w-full max-md:max-w-full"
                  >
                    <Typography variant="button-l">Paga con Paypal</Typography>
                  </Button>
                </TabPanel>
              </form>
            </TabContext>
          </div>
        </div>
      </section>
      {value === "1" && (
        <Button
          size="large"
          variant="contained"
          color="primary"
          className="mt-2 w-full max-md:max-w-full"
          disabled
        >
          <Typography variant="button-l">Paga in modo sicuro</Typography>
        </Button>
      )}
    </>
  );
};

export default PaymentMethodForm;
