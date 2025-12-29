"use client";
import { useState } from "react";

export default function ClientComponent() {
  const [count, setCountj] = useState(0);
  console.log("Client");
  return (
    <div>
      クライアント
      <button onClick={() => setCountj(count + 1)}> Count: {count}</button>
    </div>
  );
}
