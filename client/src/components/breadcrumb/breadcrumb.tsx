import { useLocation, Link } from "react-router-dom";
import { routes } from "../../routes/routes";
import { Breadcrumbs, Link as MuiLink } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";


function matchRoute(pathSegments: any, routes: any) {
  let matchedRoutes: any[] = [];
  let currentRoutes = routes;

  pathSegments.forEach((segment: string | undefined) => {
    const match = currentRoutes.find((route: { path: string }) => {
      const routeSegment = route.path.split("/").pop();
      return routeSegment === segment || routeSegment?.startsWith(":");
    });

    if (match) {
      matchedRoutes.push(match);
      currentRoutes = match.children || [];
    }
  });

  return matchedRoutes;
}

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  // Match routes based on path segments
  const matchedRoutes = matchRoute(pathSegments, routes);

  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
      sx={{ color: "white" }}
    >
      {matchedRoutes.map((route, index) => (
        <MuiLink
          key={route.path}
          component={Link}
          to={`/${pathSegments.slice(0, index + 1).join("/")}`}
          underline="hover"
          color="inherit"
          sx={{
            fontWeight: index === matchedRoutes.length - 1 ? "bold" : "normal",
          }}
        >
          {route.label}
        </MuiLink>
      ))}
    </Breadcrumbs>
  );
};

export default Breadcrumb;
