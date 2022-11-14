export const TickerDropDown = ({item, onSearch}) => {

    return (
    <table style={{width: '100%', marginTop: '3px'}}>
        <tr>
            <th style={{backgroundColor: 'rgb(234, 239, 250)', fontWeight: 'bold', fontSize: '14px'}}>{item.group}</th>
        </tr>
        <tr >
            <td style={{fontSize: '12px'}} onClick={() => onSearch(item.full_name, item.group)}>{item.full_name}</td>
        </tr>
    </table>
    )
}

export const SelectedTickers = ({values}) => {

    return (
    <table style={{width: '100%', marginTop: '3px', marginLeft: '-15px'}}>
        <tr>
            <th style={{backgroundColor: 'rgb(234, 239, 250)', fontWeight: 'bold', fontSize: '14px'}}>
                Ticker
            </th>
            <th style={{backgroundColor: 'rgb(234, 239, 250)', fontWeight: 'bold', fontSize: '14px'}}>
                Value
            </th>
        </tr>
        {values.map((item, index) => (
            <tr>
                <td style={{fontSize: '12px'}}>
                    {item.group}
                </td>
                <td style={{fontSize: '12px'}}>
                    {item.searchTerm}
                </td>
            </tr>
        ))}
                      
    </table>
    )
}