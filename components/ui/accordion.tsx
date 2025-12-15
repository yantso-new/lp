'use client';

import * as React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionContextValue {
  openItems: Set<string>;
  toggleItem: (value: string) => void;
  type?: 'single' | 'multiple';
}

const AccordionContext = React.createContext<AccordionContextValue | undefined>(
  undefined
);

function useAccordion() {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error('Accordion components must be used within an Accordion');
  }
  return context;
}

interface AccordionProps {
  children: React.ReactNode;
  type?: 'single' | 'multiple';
  defaultValue?: string | string[];
  className?: string;
}

export function Accordion({
  children,
  type = 'single',
  defaultValue,
  className,
}: AccordionProps) {
  const [openItems, setOpenItems] = React.useState<Set<string>>(() => {
    if (!defaultValue) return new Set();
    return new Set(
      Array.isArray(defaultValue) ? defaultValue : [defaultValue]
    );
  });

  const toggleItem = React.useCallback(
    (value: string) => {
      setOpenItems((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(value)) {
          newSet.delete(value);
        } else {
          if (type === 'single') {
            newSet.clear();
          }
          newSet.add(value);
        }
        return newSet;
      });
    },
    [type]
  );

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, type }}>
      <div className={cn('space-y-2', className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps {
  children: React.ReactNode;
  value: string;
  className?: string;
}

export function AccordionItem({
  children,
  value,
  className,
}: AccordionItemProps) {
  return (
    <div
      className={cn(
        'rounded-lg border border-border bg-background/40 backdrop-blur-sm transition-all',
        className
      )}
      data-value={value}
    >
      {children}
    </div>
  );
}

interface AccordionTriggerProps {
  children: React.ReactNode;
  value: string;
  className?: string;
}

export function AccordionTrigger({
  children,
  value,
  className,
}: AccordionTriggerProps) {
  const { openItems, toggleItem } = useAccordion();
  const isOpen = openItems.has(value);

  return (
    <button
      type="button"
      onClick={() => toggleItem(value)}
      className={cn(
        'flex w-full items-center justify-between px-6 py-5 text-left font-medium transition-all hover:bg-background/60',
        'rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        className
      )}
      aria-expanded={isOpen}
    >
      <span className="text-base sm:text-lg">{children}</span>
      <ChevronDown
        className={cn(
          'h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200',
          isOpen && 'rotate-180'
        )}
      />
    </button>
  );
}

interface AccordionContentProps {
  children: React.ReactNode;
  value: string;
  className?: string;
}

export function AccordionContent({
  children,
  value,
  className,
}: AccordionContentProps) {
  const { openItems } = useAccordion();
  const isOpen = openItems.has(value);

  return (
    <div
      className={cn(
        'overflow-hidden transition-all duration-300',
        isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
      )}
    >
      <div className={cn('px-6 pb-5 pt-0 text-muted-foreground', className)}>
        {children}
      </div>
    </div>
  );
}
