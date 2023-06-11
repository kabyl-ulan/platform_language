import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

import DropDownMenu from "./DropDownMenu";
import { ICategory } from "../../redux/api";

const SubDropDown = ({ elem }: { elem: ICategory }) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <div
      style={{ position: "relative" }}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <Link to={`/courses/${elem.id}`}>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          _hover={{ background: "#31457c", color: "white" }}
        >
          <p
            style={{
              padding: "3px",
              margin: "3px 0",
              whiteSpace: "nowrap",
            }}
          >
            {elem.categoryName}
          </p>
          {elem.subCategoryResponses.length === 0 ? (
            ""
          ) : isShown ? (
            <IoIosArrowDown />
          ) : (
            <IoIosArrowForward />
          )}
        </Box>
      </Link>
      {isShown && elem.subCategoryResponses.length > 0 && (
        <div
          style={{
            position: "absolute",
            top: "0",
            right: "-150px",
            zIndex: "45",
            background: "white",
            color: "black",
            width: "150px",
          }}
        >
          {elem.subCategoryResponses.length > 0 && (
            <DropDownMenu categories={elem.subCategoryResponses} />
          )}
        </div>
      )}
    </div>
  );
};

export default SubDropDown;
