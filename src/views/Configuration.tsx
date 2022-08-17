import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import { useForm, Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { PaletteMode, Paper } from "@mui/material"
import { CoreBreadcrumbs, useTheme } from "./../core";
import themeConfig from './../core/theme/configs';

type formValsProps = {
  lang: string;
  theme: PaletteMode;
};

const Configuration = () => {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useTheme();
  const defaultValues: formValsProps = {
    lang: i18n.resolvedLanguage,
    theme,
  };

  const onSubmit = (formVals: formValsProps) => {
    setTheme({ name: formVals.theme, theme: themeConfig(formVals.theme) });
    i18n.changeLanguage(formVals.lang);
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<formValsProps>({ defaultValues });

  return (
    <>
      <CoreBreadcrumbs />
      <Box
        sx={{ 
          p: 3, 
          borderRadius: 2 
        }}
        elevation={0}
        component={Paper}
      >
        <Box onSubmit={handleSubmit(onSubmit)} component="form">
          <Box>
            <FormControl>
              <FormLabel id="demo-theme">Theme:</FormLabel>
              <Controller
                name="theme"
                control={control}
                render={({ field }) => (
                  <RadioGroup row aria-labelledby="demo-theme" {...field}>
                    <FormControlLabel
                      value="light"
                      control={<Radio />}
                      label="Light"
                    />
                    <FormControlLabel
                      value="dark"
                      control={<Radio />}
                      label="Dark"
                    />
                  </RadioGroup>
                )}
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel id="demo-lang">lang:</FormLabel>
              <Controller
                name="lang"
                control={control}
                render={({ field }) => (
                  <RadioGroup row aria-labelledby="demo-lang" {...field}>
                    <FormControlLabel
                      value="en"
                      control={<Radio />}
                      label="English"
                    />
                    <FormControlLabel
                      value="zh"
                      control={<Radio />}
                      label="中文"
                    />
                  </RadioGroup>
                )}
              />
            </FormControl>
          </Box>
          <Box sx={{pt: 2}}>
            <Button type="submit" size="large" variant="contained">
              Confirm
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Configuration;
