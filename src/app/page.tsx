"use client";

import Sibebar from "@/components/sidebar";
// import { patterns } from "@/logic/constants/pattern";

import MyCanvas from "@/components/scene/canvas";
import { store } from "@/store/store";
import { Provider } from "react-redux";

// Example usage:

export default function Home() {
  return (
    // Main container
    <Provider store={store}>
      <main className="flex min-h-screen flex-col items-center justify-center p-24 relative">
        {/* Sidebar as an overlay */}
        <section className="absolute left-0 top-0 md:flex-col z-50">
          <Sibebar />
        </section>

        {/* Canvas taking the full screen */}
        <main className="absolute inset-0 hover:cursor-grab">
          <MyCanvas />
        </main>
      </main>
    </Provider>
  );
}
