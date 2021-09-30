
1. URL ~/weather (html; e.g. weather.html?zip=40508)
2. onLoad (init)
    INIT()
        1. set vars state?
        2. binding of events
        3. give input focus
3. STATE
    let weather = {} - stored state
    .currentZip = '' - current zip code to be submitted
    .previousZip = [] - previous zip code data stored
    .isBusy = false - check for whether to show loading icon?
    .errorMsg = '' - if information is not loaded or can't be loaded
4. SUBMIT (API)

    INIT()
        SET element bindings
        currentZip
        previousZips = []
        errorMsg?

    FUNCTIONS
        getWeather() - HTML output
            Call API
            Parse for city, temperature, conditions, other
            OUTPUT to html
        checkZip()  - boolean
            check if zip exists in previousZips
        noWeather() - HTML output
            OUTPUT error msg
    
    START
        GET zip input
        VALIDATE zip input
            IF valid
                IF zip exists in previousZips
                    OUTPUT zip object from previousZips (does data need to be updated to current time?)
                ELSE
                    CALL API function - imagine each API call costs 25 cents
                    PARSE api data
                    Store new object with API call data in previousZips
            ELSE (not valid)
                OUTPUT error msg
    END