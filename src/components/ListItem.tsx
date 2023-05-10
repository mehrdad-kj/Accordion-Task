import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import classNames from "classnames";

const ListItem = (props) => {
  //   console.log(props);

  const [hasChild, setHasChild] = useState(false);
  const [accordionOpened, setAccordionOpended] = useState(true);

  const handleAccordion = (child) => {
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
        onClick={() => handleAccordion(props.children)}
      >
        <div className="flex gap-5">
          <p
            className={classNames("statusTag", {
              "bg-slate-300 text-slate-600": props.status === "بدون انتظار",
              "bg-red-200 text-red-500": props.status === "نامطلوب",
              "bg-green-200 text-green-500": props.status === "مطلوب",
              "bg-yellow-200 text-yellow-500": props.status === "متوسط",
            })}
          >
            {props.status}
          </p>
          <p className="font-bold">{props.name}</p>
        </div>
        {accordionOpened ? <FaChevronDown /> : <FaChevronUp />}
      </div>
      <section className="bg-slate-200 rounded-md mb-3 font-small">
        {hasChild &&
          props.children.map((each) => (
            <div key={each.id} className="p-3">
              <div className="flex justify-between p-1">
                <p>{each.name}</p>
                <div className="flex justify-start gap-14 w-[40%]">
                  {each.status.length > 0 &&
                    each.status.map((each, idx) => (
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
