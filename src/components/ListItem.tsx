import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import classNames from "classnames";

type PropsTypes = {
  children: [];
  name: string;
  status: string | string[];
  id: number;
  each: string;
  idx: number;
};

const ListItem = ({ children, name, status }: PropsTypes) => {
  const [hasChild, setHasChild] = useState(false);
  const [accordionOpened, setAccordionOpended] = useState(true);

  const handleAccordion = (child: []) => {
    if (child.length > 0) {
      // console.log(child);
      setHasChild(!hasChild);
      setAccordionOpended(!accordionOpened);
    } else {
      window.alert("There's nothing to show!");
    }
  };

  return (
    <section>
      <div
        className="border p-3 rounded-md mb-5 flex gap-5 cursor-pointer items-center transition ease-in-out hover:bg-slate-400 justify-between"
        onClick={() => handleAccordion(children)}
      >
        <div className="flex gap-5">
          <p
            className={classNames("statusTag", {
              "bg-slate-300 text-slate-600": status === "بدون انتظار",
              "bg-red-200 text-red-500": status === "نامطلوب",
              "bg-green-200 text-green-500": status === "مطلوب",
              "bg-yellow-200 text-yellow-500": status === "متوسط",
            })}
          >
            {status}
          </p>
          <p className="font-bold">{name}</p>
        </div>
        {accordionOpened ? <FaChevronDown /> : <FaChevronUp />}
      </div>
      <section className="bg-slate-200 rounded-md mb-3 font-small">
        {hasChild &&
          children.map(({ id, name, status }: PropsTypes) => (
            <div key={id} className="p-3">
              <div className="flex justify-between p-1">
                <p>{name}</p>
                <div className="flex justify-start gap-14 w-[40%]">
                  {status.length > 0 &&
                    status.map(({ each, idx }: PropsTypes) => (
                      <p
                        key={idx}
                        className={classNames("statusTag", {
                          "bg-slate-300 text-slate-600": each === "بدون انتظار",
                          "bg-red-200 text-red-500": each === "نامطلوب",
                          "bg-green-200 text-green-500": each === "مطلوب",
                          "bg-yellow-200 text-yellow-500": each === "متوسط",
                        })}
                      >
                        {each}
                      </p>
                    ))}
                </div>
              </div>
            </div>
          ))}
      </section>
    </section>
  );
};

export default ListItem;
