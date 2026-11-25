// import styles from "./page.module.css";

import { Suspense } from "react";
import Post from "./post";

export default function Home() {
  return (
    <div>
      <p>Hello world</p>
      <Suspense fallback={<div>Loading...</div>}>
        <Post />
      </Suspense>
    </div>
  );
}
