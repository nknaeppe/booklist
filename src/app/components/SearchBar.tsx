"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const SearchBar = () => {
  const router = useRouter();
  const [click, setClicked] = useState(false);
  const [searchText, setSearchText] = useState("");

  const pathname = usePathname()
  const searchParams = useSearchParams()
  const submitSearch = (e: Event) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    params.set("query", searchText)
    router.push(`/search?${params}`)
  };

  

  return (
    <div className="flex flex-row gap-2">
      <Image
        className="dark:invert"
        width={24}
        height={24}
        src="magnifying-glass.svg"
        alt="search icon"
        onClick={ () => setClicked(!click)}
      />
      {
        click ? 
       <form className="flex" onSubmit={(e) => submitSearch(e)}>
         <input value={searchText} onChange={ e => setSearchText(e.target.value)} placeholder="search title..." autoFocus></input> 
       </form>
       : null
      }
      
    </div>
  );
};

export default SearchBar;
