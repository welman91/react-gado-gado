import { useCallback } from "react";

export const MyButton = () => {
  const onClick = useCallback(() => {
    alert("Vite + React + Typescript + TailwindCSS = 👍👍👍");
  }, []);
  return (
    <button
      onClick={onClick}
      className="font-bold py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-700"
    >
      <p>Vite is better than webpack</p>
    </button>
  );
};
