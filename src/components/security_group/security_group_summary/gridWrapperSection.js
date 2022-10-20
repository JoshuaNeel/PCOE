/*
The file contains
the code related to the
top section of the security
group grid
*/
import ImageRender from '../../../common_components/imageRender';

import Texts from "../grid_top_section/Texts";

export default function GridWrapperSection(){

    return(
        <div style={{display: 'flex',justifyContent:'space-between'}}>
         <Texts />
         {/* <ImageRender sourcePath={ExcelIcon}
          imageStyles={{height: '20px',width: '20px'}} /> */}

        </div>
    )
}
