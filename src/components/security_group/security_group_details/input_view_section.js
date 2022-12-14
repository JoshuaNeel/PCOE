/*
This file
contains the code
related to the input view for the
security group details top section
*/
import { useDispatch } from "react-redux";
import ReadOnlyInputComponent from "../../../common_components/input_elements/readOnlyInput";
import ButtonCompnent from "../../../common_components/input_elements/button";
import ExportExcel from "../../../assets/images/exportExcel.png";
import ImageRender from "../../../common_components/image_render";
import {
  toggle_secuirty_component,
  create_group_filter_selection,
} from "../../../actions/security_group_actions/security_actions";
const buttonstyle = {
  fontSize: "16px",
  height: "40px",
  backgroundColor: "rgba(2,33,105,1)",
  borderRadius: "4px",
  lineHeight: "0",
  padding: "6px 35px",
  color: "white",
  border: "none",
  marginLeft: "10px",
  outline: "none",
};

export default function InputViewSection(props) {
  const dispatch = useDispatch();
  const onEditClick = () => {
    const filterSelectedObject = {
      groupname: props?.details.groupname,
      lob: "",
      l1l2: props?.details.l1l2,
      countryToInclude: props?.details.countryToInclude,
      productsToExclude: props?.details.productsToExclude,
      productGroupToInclude: props?.details.productGroupToInclude,
      securityInclude: [],
      securityExclude: [],
      optionInclusion: "",
      marginability: "",
      pme: [],
    };
    dispatch(create_group_filter_selection(filterSelectedObject));
    dispatch(
      toggle_secuirty_component(
        "create_page",
        props?.details,
        props?.details?.groupname
      )
    );
  };
  return (
    <div className="row input_view_wrapper">
      <div className="col-9">
        <div className="row input_field_view_wrapper">
          <ReadOnlyInputComponent
            displayValue={props.details.groupname}
            labelValue={"Group Name"}
          />
          <ReadOnlyInputComponent
            displayValue={props.details.LOB}
            labelValue={"LOB"}
          />
        </div>
      </div>
      <div className="col-3">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "end",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <ImageRender
              tittle="Export"
              sourcePath={ExportExcel}
              imageStyles={{
                width: "20px",
                height: "20px",
                marginLeft: "0.7rem",
              }}
            />

            <label>Export</label>
          </div>

          <ButtonCompnent
            labelValue={"Edit"}
            buttonStyles={buttonstyle}
            clickEvent={() => onEditClick()}
          />
        </div>
      </div>
    </div>
  );
}
