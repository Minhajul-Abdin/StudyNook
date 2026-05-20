export const fetchRooms = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms`);
  const data = res.json();
  return data || [];
};

export const fetchLatestRooms = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/latest`);
  const data = res.json();
  return data || [];
};
