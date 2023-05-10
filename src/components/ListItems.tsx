import ListItem from "./ListItem";

type PropsTypes = {
  data: object[];
};

const ListItems = ({ data }: PropsTypes) => {
  return (
    <section>
      {data.map((each) => (
        <ListItem
          children={[]}
          name={""}
          status={""}
          id={0}
          each={""}
          idx={0}
          key={each.id}
          {...each}
        />
      ))}
    </section>
  );
};

export default ListItems;
