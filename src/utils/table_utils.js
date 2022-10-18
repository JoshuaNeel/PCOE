/* mock data for the basic
table to display
*/
export const gridHeaders = ['Group Name','Country to Include','L1/L2',
                    'Price Threshold','Product Group to Include',
                    'Tickers to Include','Product Group to Exclude',
                    'Tickers to Exclude','Action'];
export const gridData = [
    ['test','test','test','test','test','test','test','test'],
    ['test','test','test','test','test','test','test','test'],
    ['test','test','test','test','test','test','test','test'],
    ['test','test','test','test','test','test','test','test'],
    ['test','test','test','test','test','test','test','test'],
    ['test','test','test','test','test','test','test','test'],
    ['test','test','test','test','test','test','test','test'],
    ['test','test','test','test','test','test','test','test'],
    ['test','test','test','test','test','test','test','test'],
    ['test','test','test','test','test','test','test','test'],
]


/* Sample Schema for the security group grid
   data
*/

export const SecurityGroupData={
    "data":[
        {
            "groupname":"on Hold CEF",
            "countryToInclude":["US","UK","France","UK","France"],
            "l1-l2":"L1=1",
            "priceThreshold":"5",
            "productGroupToInclude":"22",
            "tickersToInclude":["ABC","DEF"],
            "productsToExclude":"18",
            "tickersToExclude":["xyz","abd"]
        },
        {
            "groupname":"CEF2",
            "countryToInclude":["US","UK"],
            "l1-l2":"L1=1",
            "priceThreshold":"5",
            "productGroupToInclude":"22",
            "tickersToInclude":["ABC","DEF"],
            "productsToExclude":"18",
            "tickersToExclude":["xyz","abd"]
        },
        {
            "groupname":"group22",
            "countryToInclude":["US","UK","France"],
            "l1-l2":"L1=1",
            "priceThreshold":"10",
            "productGroupToInclude":"22",
            "tickersToInclude":["ABC"],
            "productsToExclude":"18",
            "tickersToExclude":["xyz"]
        }
    ]
};