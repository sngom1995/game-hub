import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
  const { data: platforms, isLoading } = usePlatforms();
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const onSelectPlatform = useGameQueryStore((s) => s.setPlatformId);
  const selectedPlatform = platforms?.results.find(
    (platform) => platform.id === selectedPlatformId
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? selectedPlatform.name : "Platforms"}
      </MenuButton>
      <MenuList>
        {platforms?.results.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
