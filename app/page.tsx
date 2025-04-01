"use client";
import { useContext } from "react";
import { send } from "./actions";
import { ThemeContext } from "@/providers/ThemeProvider";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const theme = useContext(ThemeContext);
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const response = await fetch(
        "https://api.github.com/repos/TanStack/query",
      );
      return await response.json();
    },
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <main>
      <form action={send}>
        <input type="text" />
        <button type="submit">Send</button>
      </form>
      <section>
        <div>
          <h1>{data.full_name}</h1>
          <p>{data.description}</p>
          <strong>👀 {data.subscribers_count}</strong>{" "}
          <strong>✨ {data.stargazers_count}</strong>{" "}
          <strong>🍴 {data.forks_count}</strong>
          <div>{isFetching ? "Updating..." : ""}</div>
        </div>
      </section>
    </main>
  );
}
