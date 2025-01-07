import { Collapse } from "@mui/material";
import {
  CollapseContent,
  CollapseContentItem,
  StyledListItem,
  StyledListItemText,
} from "../../components/sidebar/sidebar.styles";
import { useEffect, useState } from "react";
import useFavoriteProjects from "../../hooks/useFavoriteProjects";
import { Project } from "../../interfaces/project";
import FavoritesSkeleton from "./skeleton";

const Favorites = () => {
  const [open, setOpen] = useState(true);
  const { isLoading, favorites, fetchFavoriteProjects } = useFavoriteProjects();

  const handleCollapseClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    fetchFavoriteProjects();
  }, []);

  return (
    <div>
      <StyledListItem onClick={handleCollapseClick}>
        <StyledListItemText>Favorite Projects</StyledListItemText>
      </StyledListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <CollapseContent>
          {isLoading ? (
            <FavoritesSkeleton/>
          ) : (
            favorites &&
            favorites.map((fav: Project) => (
              <CollapseContentItem active={false} key={fav.id}>
                {fav.title}
              </CollapseContentItem>
            ))
          )}
        </CollapseContent>
      </Collapse>
    </div>
  );
};

export default Favorites;
