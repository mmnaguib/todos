// app/global-error.tsx
"use client";

interface GlobalErrorProps {
  error: Error;
  reset: () => void;
}

export default function GlobalError({ reset }: GlobalErrorProps) {
  return (
    <html>
      <body className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="text-center max-w-md p-6">
          <div className="flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#E53935"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-semibold mt-4">Something Went Wrong</h1>
          <p className="mt-2 text-gray-400">
            Oops, something went wrong. Try to refresh this page or feel free to
            contact us if the problem persists.
          </p>
          <button
            onClick={() => reset()}
            className="mt-6 px-4 py-2 bg-white text-gray-900 rounded-md hover:bg-gray-200 transition"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
