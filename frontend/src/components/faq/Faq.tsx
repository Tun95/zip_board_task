import { useState } from "react";
import { PlusIcon, MinusIcon } from "lucide-react";
import type { FaqItem } from "../../types/faq/faq";

const faqData: FaqItem[] = [
  {
    title: "Q1. Lorem ipsum dolor sit amet consectetur?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga temporibus officiis quo aut voluptates eveniet mollitia laborum esse voluptate ea beatae fugit, omnis dolore culpa deleniti ullam expedita vel! Alias architecto eum at dolore dicta optio asperiores, quae esse, quidem fugiat iusto aut, saepe possimus id nemo. At, in quia?",
  },
  {
    title: "Q2. Lorem ipsum dolor sit amet consectetur?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga temporibus officiis quo aut voluptates eveniet mollitia laborum esse voluptate ea beatae fugit, omnis dolore culpa deleniti ullam expedita vel! Alias architecto eum at dolore dicta optio asperiores, quae esse, quidem fugiat iusto aut, saepe possimus id nemo. At, in quia?",
  },
  {
    title: "Q3. Lorem ipsum dolor sit amet consectetur?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga temporibus officiis quo aut voluptates eveniet mollitia laborum esse voluptate ea beatae fugit, omnis dolore culpa deleniti ullam expedita vel! Alias architecto eum at dolore dicta optio asperiores, quae esse, quidem fugiat iusto aut, saepe possimus id nemo. At, in quia?",
  },
  {
    title: "Q4. Lorem ipsum dolor sit amet consectetur?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga temporibus officiis quo aut voluptates eveniet mollitia laborum esse voluptate ea beatae fugit, omnis dolore culpa deleniti ullam expedita vel! Alias architecto eum at dolore dicta optio asperiores, quae esse, quidem fugiat iusto aut, saepe possimus id nemo. At, in quia?",
  },
  {
    title: "Q5. Lorem ipsum dolor sit amet consectetur?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga temporibus officiis quo aut voluptates eveniet mollitia laborum esse voluptate ea beatae fugit, omnis dolore culpa deleniti ullam expedita vel! Alias architecto eum at dolore dicta optio asperiores, quae esse, quidem fugiat iusto aut, saepe possimus id nemo. At, in quia?",
  },
];

function FaqItem({
  item,
  isOpen,
  onClick,
}: {
  item: FaqItem;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 first:border-t">
      <button
        className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-dark-50 dark:text-white">
          {item.title}
        </h3>
        <span className="ml-4 text-dark-50 dark:text-white">
          {isOpen ? (
            <MinusIcon size={20} className="flex-shrink-0" />
          ) : (
            <PlusIcon size={20} className="flex-shrink-0" />
          )}
        </span>
      </button>
      {isOpen && (
        <div className="pb-4">
          <p className="text-gray-900 text-sm dark:text-gray-200">{item.content}</p>
        </div>
      )}
    </div>
  );
}

function FaqComponent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="py-12 bg-white dark:bg-gray-900 transition-colors"
      id="faq"
    >
      <div className="mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-accent-500 dark:text-accent-600 mb-4 font-display">
            Frequently asked questions
          </h1>
        </div>

        <div className="bg-white dark:bg-gray-900 p-6 max-420px:p-0 max-w-4xl mx-auto">
          <div className="">
            {faqData.map((item, index) => (
              <FaqItem
                key={index}
                item={item}
                isOpen={openIndex === index}
                onClick={() => toggleItem(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqComponent;
