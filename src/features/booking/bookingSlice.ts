import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { BookingState, BookingRequest } from './types';

const initialState: BookingState = {
  formData: {
    checkIn: '',
    checkOut: '',
    adults: 1,
    children: 0,
  },
  isLoading: false,
  error: null,
};

export const submitBooking = createAsyncThunk(
  'booking/submit',
  async (bookingData: BookingRequest) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    return bookingData;
  }
);

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    updateFormData: (state, action: PayloadAction<Partial<BookingState['formData']>>) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    resetForm: (state) => {
      state.formData = initialState.formData;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitBooking.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(submitBooking.fulfilled, (state) => {
        state.isLoading = false;
        state.formData = initialState.formData;
      })
      .addCase(submitBooking.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Booking failed';
      });
  },
});

export const { updateFormData, resetForm } = bookingSlice.actions;
export default bookingSlice.reducer;