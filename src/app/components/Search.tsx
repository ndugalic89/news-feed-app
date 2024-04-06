import { ChangeEvent, useState } from "react";

interface SearchProps {
  handleUrl: any;
}

export default function Search(props: SearchProps) {
  const [url, setUrl] = useState('');

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setUrl(value);
  };

  return (
    <div className="relative flex items-center px-3 py-2 w-1/4">
      <input 
        type="text" 
        className="peer relative h-10 w-full rounded-md bg-gray-50 pl-4 pr-20 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg" 
        placeholder='Enter RSS url'
        value={url}
        onChange={handleInput}
      />
      <button 
        className="absolute right-6 h-7 w-16 rounded-md bg-blue-200 text-xs font-semibold text-white transition-all duration-200 ease-in-out group-focus-within:bg-blue-400 group-focus-within:hover:bg-blue-600"
        onClick={() => props.handleUrl(url)}
      >
        Get RSS
      </button>
    </div>
  );
}
