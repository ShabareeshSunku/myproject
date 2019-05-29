import React from 'react';

const TimeContext = React.createContext({ time: new Date().toString() })

export default TimeContext