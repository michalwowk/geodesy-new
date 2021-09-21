import { createContext, useState, useContext } from "react";
import { boardColumnsData as boardColumnsDataInitial } from "utils/initialData";

const BoardColumnsContext =
  createContext<BoardColumnsContextProviderType | null>(null);

export const BoardColumnsProvider: React.FC = (props) => {
  const value = useBoardColumnsProvider();

  return (
    <BoardColumnsContext.Provider
      {...props}
      value={value}
    ></BoardColumnsContext.Provider>
  );
};

const useBoardColumnsProvider = () => {
  const [boardColumnsData, setBoardColumnsData] = useState(
    boardColumnsDataInitial
  );

  return { boardColumnsData, setBoardColumnsData };
};

type BoardColumnsContextProviderType = ReturnType<
  typeof useBoardColumnsProvider
>;

export const useBoardColumnsContext = () => {
  const context = useContext(BoardColumnsContext);

  if (!context) {
    throw new Error(
      "useBoardColumnsContext must be used inside BoardColumnsContext"
    );
  }

  return context;
};
