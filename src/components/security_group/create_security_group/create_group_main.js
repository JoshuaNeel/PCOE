/*
This file contains the code realted
to the create group layout compoennt
*/

import DisplaySelectedFiltersComponent from "./display_selected_filters";
import SecurityFiltersWrapper from "./filters_wrapper";
import '../../security_group/security_group.scss'
import TickersGridView from "../security_group_details/tickers_grid_view";
import ButtonCompnent from "../../../common_components/input_elements/button";
const buttonstyle = {
    fontSize: '16px',
    height:'35px',
    backgroundColor: "rgba(2,33,105,1)",
    borderRadius: "4px",
    lineHeight: "0",
    padding: "5px 35px",
    color: "white",
    border: "none",
    marginLeft:'10px',
    outline: "none"
};

const CreateGroupMain = () => {
    const renderSaveCancel = () => {
        return (
            <div style={{   display: 'flex',
            flexDirection: 'row',
            justifyContent: 'end'}}>
                <ButtonCompnent labelValue={'Save'}
                    buttonStyles={buttonstyle}/>
                <ButtonCompnent labelValue={'Cancel'}
                    buttonStyles={buttonstyle}/>
                        
            </div>
        )
    }
    return (
        <section className='grid_wrapper'>
            <div className='create_group_wrapper'>
                <div className='row'>
                    <div className='col-3'>
                        <SecurityFiltersWrapper/>
                    </div>
                    <div className='col-9'>
                        {
                        renderSaveCancel()
                    }
                        <DisplaySelectedFiltersComponent/>
                        <div className='mt-3'>
                            <h2 style={{marginLeft:'10px'}}>Results calculated based on the selections</h2>
                            <div>
                                <TickersGridView isCheckbox={true}/>
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
