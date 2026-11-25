// import styles from "./page.module.css";

import { Suspense } from "react";
import Post from "./post";
import HomeC from "./home";

export default function Home() {
  return (
    <div>
      <HomeC />
      <Suspense fallback={<div>Loading...</div>}>
        <Post />
      </Suspense>
    </div>
  );
}
