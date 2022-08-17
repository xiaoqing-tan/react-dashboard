import { useEffect, memo, useCallback, useMemo } from 'react';
import { Box, Button, Grid } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import { useQueryParam } from "./../utils";
import { queryProps, defaultQueryProps, useDefaultValues } from "./../../core";
import { CoreField } from "./CoreField";

interface configProps {
  [key: string]: any;
}

const CachedFields = memo(({ config }: { config: configProps[] }) => {
  return (
    <Grid sx={{mb: 2}} container spacing={2}>
      {
        config.map((item: configProps) => (
          <Grid item key={item.prop} xs={item.xs = 3}>          
            <CoreField
              size="small"
              rules={item.rules}
              type={item.type}
              prop={item.prop}
              name={item.name}
              width={item.width}
              dict={item.dict || {}}
            />
          </Grid>
        ))
      }
      <Grid item xs={3}>
        <Button type="submit" size="medium" sx={{ mb: '20px'}} variant="contained">
          Search
        </Button>
      </Grid>
    </Grid>
  )
})

export const CoreSearch = memo(({ config 
}: {
  config: configProps[];
}) => {
  const [query, setQuery] = useQueryParam<queryProps>('query', defaultQueryProps);
  const defaultValues = useDefaultValues(config);
  const methods = useForm<configProps>({ defaultValues });
  const { reset } = methods;

  const onSubmit = useCallback((vals: configProps) => {
    setQuery({ ...query, ...vals });
  }, [query, setQuery])

  useEffect(() => {
    const { page, per_page, ...rest } = query;
    const hasKeys = Object.keys(rest).length;
    if (!hasKeys) reset()
  }, [reset, query]);

  return (
    <FormProvider {...methods}>
      <Box
        sx={{ display: "flex", alignItems: "flex-start", flexWrap: 'wrap' }}
        onSubmit={methods.handleSubmit(onSubmit)}
        component="form"
      >
        <CachedFields config={config} />
      </Box>
    </FormProvider>
  );
});
