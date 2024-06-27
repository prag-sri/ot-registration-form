import React, { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { Grid, TextField, Button, Typography, Paper, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

interface FormData {
  date: string;
  consultant: string;
  referredBy: string;
  services: Service[];
}

interface Service {
  name: string;
  rate: number;
  qty: number;
  remark: string;
}

const Form: React.FC = () => {
  const [grandTotal, setGrandTotal] = useState<number>(0);
  const { control, handleSubmit, formState: { errors }, watch, register } = useForm<FormData>({
    defaultValues: {
      date: '',
      consultant: '',
      referredBy: '',
      services: [{ name: '', rate: 0, qty: 0, remark: '' }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "services"
  });

  // TOTAL
  const calculateTotal = (index: number) => {
    const rate = watch(`services.${index}.rate`) || 0;
    const qty = watch(`services.${index}.qty`) || 0;
    return rate * qty;
  };

  // GRAND TOTAL
  const updateGrandTotal = () => {
    let total = 0;
    fields.forEach((_, index) => {
      total += calculateTotal(index);
    });
    setGrandTotal(total);
  };

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const handleAddService = () => {
    append({ name: '', rate: 0, qty: 0, remark: '' });
  };

  const handleRemoveService = (index: number) => {
    remove(index);
    updateGrandTotal(); // Update grand total after removing a service
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
        <Typography variant="h4" gutterBottom>OT Registration Details</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={3}>
                <Typography variant="subtitle1">Date:</Typography>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  type="date"
                  {...register('date', { required: true })}
                  error={errors.date ? true : false}
                  helperText={errors.date && 'Date is required'}
                  fullWidth
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={3}>
                <Typography variant="subtitle1">Consultant:</Typography>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Consultant"
                  {...register('consultant', { required: true })}
                  error={errors.consultant ? true : false}
                  helperText={errors.consultant && 'Consultant is required'}
                  fullWidth
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={3}>
                <Typography variant="subtitle1">Referred By:</Typography>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Referred By"
                  {...register('referredBy')}
                  fullWidth
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom style={{ fontWeight: 'bold', marginTop: '20px' }}>Services</Typography>
          </Grid>
          {fields.map((service, index) => (
            <Grid item xs={12} key={service.id}>
              <Paper elevation={3} style={{ padding: '10px' }}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={3}>
                    <TextField
                      label="Service Name"
                      {...register(`services.${index}.name`, { required: true })}
                      error={!!errors.services?.[index]?.name}
                      helperText={errors.services?.[index]?.name && 'Service name is required'}
                      fullWidth
                      onChange={updateGrandTotal} // Trigger update on change
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <TextField
                      label="Rate (Rs.)"
                      type="number"
                      {...register(`services.${index}.rate`, { required: true })}
                      error={!!errors.services?.[index]?.rate}
                      helperText={errors.services?.[index]?.rate && 'Rate is required'}
                      fullWidth
                      onChange={() => {
                        updateGrandTotal(); // Trigger update on change
                      }}
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <TextField
                      label="Qty"
                      type="number"
                      {...register(`services.${index}.qty`, { required: true })}
                      error={!!errors.services?.[index]?.qty}
                      helperText={errors.services?.[index]?.qty && 'Quantity is required'}
                      fullWidth
                      onChange={() => {
                        updateGrandTotal(); // Trigger update on change
                      }}
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <TextField
                      label="Total (Rs.)"
                      type="number"
                      value={calculateTotal(index)}
                      InputProps={{
                        readOnly: true,
                      }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <TextField
                      label="Remark"
                      {...register(`services.${index}.remark`)}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={1}>
                    <IconButton onClick={() => handleRemoveService(index)} style={{ color: 'red' }}>
                      <DeleteIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Paper>
              {/* Error messages for Rate and Qty */}
              {(errors.services?.[index]?.rate || errors.services?.[index]?.qty) && (
                <Typography variant="body2" color="error">
                  Please fill out Rate and Quantity.
                </Typography>
              )}
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button variant="contained" color="secondary" onClick={handleAddService}>Add Service</Button>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" size="large">Submit</Button>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Grand Total: Rs. {grandTotal.toFixed(2)}</Typography>
          </Grid>
        </Grid>
      </div>
    </form>
  );
};

export default Form;
