/*
The file contains
the code related to the
top section of the security
group grid
*/

import SearchButtonWrapper from "../grid_top_section/search_button_wrapper";

export default function GridWrapperSection(){

    return(
        <div style={{display: 'flex',justifyContent:'space-between'}}>
         <SearchButtonWrapper />
        </div>
    )
}
