"use client";
import { redirect } from "next/navigation";

export default function LoginPage() {
  return (
    <main className="flex-1 flex w-full">
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-2xl font-bold">Login Page</h1>
          <form
            className="flex flex-col gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              redirect("/");
            }}
          >
            <input
              type="text"
              placeholder="Usuario"
              className="p-2 border rounded"
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="p-2 border rounded"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
