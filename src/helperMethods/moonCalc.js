const moonCalc = ((moonphase) => {
    if (moonphase >= 0 && moonphase < 0.125) {
        return "New Moon"
    } else if (moonphase >= 0.125 && moonphase < 0.25) {
        return "Waxing Crescent Half Moon"
    } else if (moonphase >= 0.25 && moonphase < 0.375) {
        return "First Quarter Half Moon"
    } else if (moonphase >= 0.375 && moonphase < 0.5) {
        return "Waxing Gibbos Moon"
    } else if (moonphase >= 0.5 && moonphase < 0.625) {
        return "Full Moon"
    } else if (moonphase >= 0.625 && moonphase < 0.75) {
        return "Waning Giboos Moon"
    } else if (moonphase >= 0.75 && moonphase < 0.875) {
        return "Last Quarter Half Moon"
    } else if (moonphase >= 0.875 && moonphase < 1) {
        return "Waning Crescent Moon"
    }
})

export default moonCalc