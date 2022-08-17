import { memo, useEffect } from 'react';
import { Controller,useFormContext, RegisterOptions } from "react-hook-form";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput"
import { InputProps } from '@mui/material';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";

interface CoreFieldProps extends InputProps {
  type: 'text' | 'select' | 'checkbox' | 'radio';
  name: string;
  prop: string;
  rules?: Exclude<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' >;
  width?: string | number;
  dict?: {
    [key: string]: any
  }
} 

export const CoreField = memo((props: CoreFieldProps) => {
  const { type = 'text', dict, prop, size, rules, name, } = props;
  const { control, formState: { errors } } = useFormContext(); // retrieve all hook methods

  return (
      <Box>
        {
          type === 'text' && (
                              <Controller
                                name={prop}
                                control={control}
                                rules={rules}
                                render={({ field }) => {
                                  return (
                                    <FormControl size={size} fullWidth>
                                      <InputLabel  id="select-label">{name}</InputLabel>
                                      <OutlinedInput
                                        fullWidth
                                        size={size}
                                        label={name}
                                        error={errors[prop] !== undefined}
                                        // helperText={errors[prop] && errors[prop].message}
                                        {...field} 
                                      />
                                      <FormHelperText>{errors[prop] && errors[prop].message}</FormHelperText>
                                    </FormControl>
                                  )
                                }}
                              />
                              )
        }
        {
          type === 'select' && (
            <Controller
              name={prop}
              control={control}
              rules={rules}
              render={({ field }) => {
                return (
                  <FormControl size={size} fullWidth>
                    <InputLabel id="select-label">{name}</InputLabel>
                    <Select
                      labelId="select-label"
                      id="select"
                      label={name}
                      fullWidth
                      {...field} 
                      error={errors[prop] !== undefined}
                    >
                      {
                        Object.entries(dict || {}).map(([key, val]) => (
                          <MenuItem key={key} value={key}>{val}</MenuItem>
                        ))
                      }
                    </Select>
                    <FormHelperText>{errors[prop] && errors[prop].message}</FormHelperText>
                  </FormControl>
              )
              }}
            />
          )
        }
      </Box>
  )
})