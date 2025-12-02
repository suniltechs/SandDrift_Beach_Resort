export interface BookingState {
  formData: {
    checkIn: string;
    checkOut: string;
    adults: number;
    children: number;
  };
  isLoading: boolean;
  error: string | null;
}

export interface BookingRequest {
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  roomId?: string;
}