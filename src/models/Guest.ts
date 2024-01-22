interface Guests {
  guests: Array<{
    GuestID: string;
    Name: string;
    Email: string;
    Password: string;
  }>;
}

interface Guest {
  GuestID: string;
  Name: string;
  Email: string;
  Password: string;

  Parties: object;
}

interface CreateGuest {
  Name: string;
  Email: string;
  Password: string;
}

interface UpdateGuest {
  GuestID: string;
  Name: string;
  Password: string;
}

interface DeleteGuest {
  GuestID: string;
}

export type { Guests, Guest, CreateGuest, UpdateGuest, DeleteGuest };
