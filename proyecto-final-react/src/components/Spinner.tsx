// import styles from './Spinner.module.css'

export default function Spinner() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="loader">
        <svg
          className="animate-spin h-24 w-24 text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 0115.878-2.4A4.012 4.012 0 0116 12a4 4 0 01-4 4 4.012 4.012 0 01-4-4z"
          />
        </svg>
      </div>
    </div>
  );
}
