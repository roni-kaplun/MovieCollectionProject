import { createContext, useContext, useState, type ReactNode } from "react";

type FavouritesContextValue = {
  favouriteIds: string[];
  addFavourite: (id: string) => void;
  removeFavourite: (id: string) => void;
  isFavourite: (id: string) => boolean;
};

const FavouritesContext = createContext<FavouritesContextValue | undefined>(
  undefined
);

export function FavouritesProvider({ children }: { children: ReactNode }) {
  const [favouriteIds, setFavouriteIds] = useState<string[]>([]);

  function addFavourite(id: string) {
    setFavouriteIds((prev) => (prev.includes(id) ? prev : [id, ...prev]));
  }

  function removeFavourite(id: string) {
    setFavouriteIds((prev) => prev.filter((x) => x !== id));
  }

  function isFavourite(id: string) {
    return favouriteIds.includes(id);
  }

  return (
    <FavouritesContext.Provider
      value={{ favouriteIds, addFavourite, removeFavourite, isFavourite }}
    >
      {children}
    </FavouritesContext.Provider>
  );
}

export function useFavourites() {
  const ctx = useContext(FavouritesContext);
  if (!ctx) {
    throw new Error("useFavourites must be used inside FavouritesProvider");
  }
  return ctx;
}