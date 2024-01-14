import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

const SortSelector = () => {
  const sortOrders = [
    { label: "Relevance", value: "" },
    { label: "Date added", value: "-added" },
    { label: "Name", value: "name" },
    { label: "Release date", value: "-released" },
    { label: "Popularity", value: "-metacritic" },
    { label: "Average rating", value: "-rating" },
  ];
  const sortKey = useGameQueryStore((s) => s.gameQuery.searchText);
  const onSort = useGameQueryStore((s) => s.setSearchText);
  const currentSort = sortOrders.find((sort) => sort.value === sortKey);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by : {currentSort?.label ? currentSort.label : "Relevance"}{" "}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sort) => (
          <MenuItem onClick={() => onSort(sort.value)} key={sort.value}>
            {sort.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
