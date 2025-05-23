import { Poppins, Roboto } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "800"],
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "600"],
});
