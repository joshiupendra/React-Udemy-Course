import { useState, createContext, useContext } from 'react';

const AccordionContext = createContext();

export function useAccordionContext() {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error("Accordion related components must be wrapped by <Accordion>");
  }

  return context;
}

export default function Accrodion({ children, className }) {
  const [openItemId, setOpenItemId] = useState();

  const contextValue = {
    openItemId,
    toggleItem
  }

  function toggleItem(id) {
    setOpenItemId(prevId => prevId === id ? null : id);
  }

  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>
        {children}
      </ul>
    </AccordionContext.Provider>
  );
} 