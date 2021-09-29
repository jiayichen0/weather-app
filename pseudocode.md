
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

    START
        VALIDATION
        CALL API                - imagine each API call costs 25 cents
        PARSE API DATA
        ON STATE CHANGE
        UPDATE VIEW
    END