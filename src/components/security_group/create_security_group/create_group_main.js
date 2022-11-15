/*
This file contains the code realted
to the create group layout compoennt
*/

import DisplaySelectedFiltersComponent from "./display_selected_filters";
import SecurityFiltersWrapper from "./filters_wrapper";
import "../../security_group/security_group.scss";
import TickersGridView from "../security_group_details/tickers_grid_view";
import ButtonCompnent from "../../../common_components/input_elements/button";
import SearchFieldComponent from "../../../common_components/input_elements/search_field";
import ExportExcel from "../../../assets/images/exportExcel.png";
import ImageRender from "../../../common_components/image_render";

const buttonstyle = {
  fontSize: "16px",
  height: "35px",
  backgroundColor: "rgba(2,33,105,1)",
  borderRadius: "4px",
  lineHeight: "0",
  padding: "5px 35px",
  color: "white",
  border: "none",
  marginLeft: "10px",
  outline: "none",
};
const Exclude ={
    backgroundColor: "rgba(2,33,105,1)",
   
}
const CreateGroupMain = () => {
  const renderSaveCancel = () => {
    return (
      <div
        style={{ display: "flex", flexDirection: "row", justifyContent: "end" }}
      >
        <ButtonCompnent labelValue={"Save"} buttonStyles={buttonstyle} />
        <ButtonCompnent labelValue={"Cancel"} buttonStyles={buttonstyle} />
      </div>
    );
  };
  const onExcluteClick =() =>{

  }
  return (
    <section className="grid_wrapper">
      <div className="create_group_wrapper">
        <div className="row">
          <div className="col-3">
            <SecurityFiltersWrapper />
          </div>
          <div className="col-9">
            {renderSaveCancel()}
            <DisplaySelectedFiltersComponent />
            <div className="mt-3">
              <h2 style={{ marginLeft: "10px" }}>
                Results calculated based on the selections
              </h2>
              <div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: "1.2rem",
                width: "95.5%",
              }}
            >
              <SearchFieldComponent
                placeholder={"Search"}
                searchfiledstyle={{ width: "40%", flex: "-1 !important" }}
              />

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "auto",
                }}
              >
                <ImageRender
                  tittle="Export"
                  sourcePath={ExportExcel}
                  imageStyles={{
                    width: "20px",
                    height: "20px",
                    marginLeft: "0.5rem",
                  }}
                />

                <label>Export</label>
              </div>

              <ButtonCompnent
                labelValue={"Exclude"}
                buttonStyles={Exclude}
                clickEvent={(e) => onExcluteClick(e)}
              />
            </div>
                <TickersGridView isCheckbox={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CreateGroupMainComponent = CreateGroupMain;
export default CreateGroupMainComponent;
