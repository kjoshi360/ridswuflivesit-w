import HomePage from "@/Components/HomePage";
import Navbar from "@/Components/Navbar";
export const metadata = {
  title: "GreenRide - EV Cab Booking - Central India's Largest",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function Page() {
  return (
    <>
      <Navbar />
      <HomePage />
    </>
  );
}
