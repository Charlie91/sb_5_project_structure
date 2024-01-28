import { useState, useEffect } from 'react';
import { getAvailableRooms } from '../api/reservation';
import { useQuery } from 'react-query';
import { Room } from '../pages/Reservation/types';

type Response = {
  data: Room[];
  isError: boolean;
  isLoading: boolean;
}

export const useRoomList = (): Response => {
  const { data, isError, isLoading } = useQuery('rooms', getAvailableRooms);

  return { data, isError, isLoading };
}
