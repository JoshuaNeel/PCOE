export const TickerDropDown = ({item, onSearch}) => {

    return (
    <table>
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
    <table>
        <tr>
            <th>
                Ticker
            </th>
            <th>
                Value
            </th>
        </tr>
        {values.map((item, index) => (
            <tr>
                <td>
                    {item.group}
                </td>
                <td>
                    {item.searchTerm}
                </td>
            </tr>
        ))}
                      
    </table>
    )
}