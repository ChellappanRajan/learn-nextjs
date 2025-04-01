"use client";
import { useContext } from "react";
import { send } from "./actions";
import { ThemeContext } from "@/providers/ThemeProvider";

export default function Home() {
  const theme = useContext(ThemeContext);
  // let data = await fetch("http://localhost:3000/api");
  // let json = await data.json();
  console.log(theme);
  return (
    <form action={send}>
      <input type="text" />
      <button type="submit">Send</button>
    </form>
  );
}
