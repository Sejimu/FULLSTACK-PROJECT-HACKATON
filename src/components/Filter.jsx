import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { styled } from "@mui/material/styles";
import { useSearchParams } from "react-router-dom";
import { useCourseContext } from "../contexts/CourseContext";

export default function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { getCourses, courses } = useCourseContext();
  const [title, settitle] = React.useState(
    searchParams.get("subject__title") || "All"
  );

  React.useEffect(() => {
    getCourses();
  }, [searchParams]);

  const handleChange = (_, value) => {
    value && settitle(value);
  };

  const CustomToggleButtonGroup = styled(ToggleButtonGroup)((theme) => ({
    backgroundColor: "#e0a3df",
  }));

  const CustomToggleButton = styled(ToggleButton)((theme) => ({
    fontSize: "10px",

    color: "white",
    "&:hover": {
      backgroundColor: "#f36cf1",
    },
    "&.Mui-selected": {
      color: "white",
    },
  }));

  React.useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);

    if (title === "All") {
      setSearchParams({
        subject__title: "",
      });
    } else {
      setSearchParams({
        ...currentParams,
        subject__title: title,
      });
    }
  }, [title]);

  return (
    <CustomToggleButtonGroup
      value={title}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <CustomToggleButton value={"All"}>All</CustomToggleButton>

      <CustomToggleButton value={"backend"}>Backend</CustomToggleButton>
      <CustomToggleButton value={"frontend"}>Frontend</CustomToggleButton>
      <CustomToggleButton value={"design"}>Design</CustomToggleButton>
    </CustomToggleButtonGroup>
  );
}
