import axios from "axios";
import { CreateGuest, DeleteGuest, Guest, Guests, UpdateGuest } from "../models/Guest";

export async function getGuests(): Promise<Guests> {
  const response = (await axios.get("/api/Guests")) as Guests;
  return response;
}

export async function GetGuest(id: string): Promise<Guest> {
  const response = (await axios.get(`/api/Guests/${id}`)) as Guest;
  return response;
}

export async function CreateGuest(guest: CreateGuest): Promise<Guest> {
  const response = (await axios.post(
    "/api/Guests",
    {
      ...guest,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  )) as Guest;
  return response;
}

export async function UpdateGuest(guest: UpdateGuest): Promise<Guest> {
  const response = (await axios.put(
    "/api/Guests",
    {
      ...guest,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  )) as Guest;

  return response;
}

export async function DeleteGuest(guest: DeleteGuest): Promise<Guest> {
  const response = (await axios.delete(`/api/Guests/${guest.GuestID}`)) as Guest;
  return response;
}
