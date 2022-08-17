import { useEffect, memo, useCallback, useMemo } from "react";
import { Box, Button, Grid } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useForm, FormProvider, FormProviderProps } from "react-hook-form";
import { CoreField } from "./CoreField";
import { services } from "../../services";
import { useDefaultValues } from "./../../core";

type formProps = {
  [key: string]: any;
};


const CachedFields = memo(({ config }: { config: formProps[] }) => {
  return (
    <Grid sx={{mb: 2}} container spacing={2}>
      {
        config.map((item: formProps) => (
          <Grid  key={item.prop} item xs={item.xs || 4}>          
            <CoreField
              size="small"
              rules={item.rules}
              type={item.type}
              prop={item.prop}
              name={item.name}
              width={item.width || 'auto'}
              dict={item.dict || {}}
            />
          </Grid>          
        ))
      }
       <Grid item xs={2}>
        <Button
          type="submit"
          size="medium"
          fullWidth
          sx={{ mb: "20px" }}
          variant="contained"
        >
          Submit
        </Button>
      </Grid>
      <Grid item xs={2}>
        <Button
          type="reset"
          size="medium"
          fullWidth
          sx={{ mb: "20px" }}
          variant="outlined"
        >
          Reset
        </Button>
      </Grid>
    </Grid>
  )
})

export const CoreForm = memo(({ config }: { config: formProps[] }) => {
  const defaultValues = useDefaultValues(config);
  const methods = useForm<formProps>({ defaultValues});
  const { pathname } = useLocation();
  const url = pathname.split('/').filter(i => i)[0];
  const onSubmit = async (vals: formProps) => {
    const res = await services.createItem({
      url, params: vals
    });
  };

  const onReset = () => {
    methods.reset()
  }

  return (
    <FormProvider {...methods}>
      <Box
        sx={{ display: "flex", alignItems: "flex-start", flexWrap: "wrap" }}
        onSubmit={methods.handleSubmit(onSubmit)}
        onReset={onReset}
        component="form"
      >
        <CachedFields config={config} />
      </Box>
    </FormProvider>
  );
});
