import { useState, createContext, useContext } from 'react';
import AccordionItem from './AccordionItem.jsx';
import AccordionTitle from './AccordionTitle.jsx';
import AccordionContent from './AccordionContent.jsx';

const AccordionContext = createContext();

export function useAccordionContext() {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error("Accordion related components must be wrapped by <Accordion>");
  }

  return context;
}

export default function Accordion({ children, className }) {
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

Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;