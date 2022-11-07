/* This file contains the code
   related to the Security Group
   Headers
*/

import ImageRender from "../../../common_components/image_render";
// import SortIcon from "../../../assets/images/sortIcon.png";
const checkBoxHeaderStyle = {
  backgroundColor: "rgba(234,239,250,1)",
};
export default function GridHeaders(props) {
  const renderSorIcon = () => {
    return (
      <ImageRender
        // sourcePath={SortIcon}
        imageStyles={{
          width: "25px",
          height: "20px",
          position: "absolute",
          paddingLeft: "10px",
        }}
      />
    );
  };
  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...props.gridData].sort((a, b) => {
        return (
          a[sortField]
            .toString()
            .localeCompare(b[sortField].toString(), "en", { numeric: true }) *
          (sortOrder === "asc" ? 1 : -1)
        );
      });
      // setTableData(sorted);
    }
  };
  // Code to render the grid headers
  return (
    <tr>
      {" "}
      {props.isCheckbox && (
        <th style={checkBoxHeaderStyle}>
          <input type="checkbox" />
        </th>
      )}
      {props.gridHeaders?.map((element, index) => {
        return (
          <th
            key={index}
            scope="col"
            rowSpan={element.rowSpan}
            colSpan={element.colSpan}
            style={element.headerStyle}
            // onClick={() => handleSorting(element.headerName, "desc")}
          >
            {element.headerName}
            {/* {element.showSortingIcon && renderSorIcon()}{" "} */}
          </th>
        );
      })}{" "}
    </tr>
  );
}
