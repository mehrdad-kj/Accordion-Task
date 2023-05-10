// import { useState } from "react";
import ListItem from "./ListItem";



// type ParentTypes = {
//   data: ChildTypes[];
// };

// interface Child {
//   id: number;
//   name: string;
//   status: string;
// }

// type ChildTypes = {
//   children: Child[];
//   id: number;
//   name: string;
//   status: string;
// };

interface ParentTypes {
  data: {
    id: number,
  }[]
}

const ListItems : React.FC <ParentTypes> = ({ data }) => (
  <section>
    {data.map((each) => (
      <ListItem key={each.id} {...each} />
    ))}
  </section>
);

export default ListItems;
