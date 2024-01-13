const API_URL = 'http://localhost:3000';

export const getAvailableRooms = () => fetch(`${API_URL}/rooms`);

export const getPostRequestForRoomReservation = (form: { name: string; phone: string }) => {
    return fetch(`${API_URL}/orders`, {
        method: 'POST',
        body: JSON.stringify(form),
    });
}