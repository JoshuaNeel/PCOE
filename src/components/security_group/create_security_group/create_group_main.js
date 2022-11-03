/*
This file contains the code realted
to the create group layout compoennt
*/

import DisplaySelectedFiltersComponent from "./display_selected_filters";
import SecurityFiltersWrapper from "./filters_wrapper";
import '../../security_group/security_group.scss'
const CreateGroupMain = () => {
    return (
        <section className='grid_wrapper'>
            <div className='container create_group_wrapper'>
                <div className='row'>
                    <div className='col-3'>
                        <SecurityFiltersWrapper />
                    </div>
                    <div className='col-9'>
                                <DisplaySelectedFiltersComponent />
                            <div className='row'>
                                <h2>Results calculated based on the selections</h2>
                                <div>
                                    Grid Section
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
