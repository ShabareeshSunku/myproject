import React from 'react';

function WithLoader(WrappedComponent, propToCheck) {
    return (props) => {
        const isEmpty = props[propToCheck] && props[propToCheck].length > 0 ? false : true
        return isEmpty ? <div className="container" style={{ textAlign: 'center', marginTop: '50px' }}><div className="loader" /> </div> : <WrappedComponent {...props} />
    }
}

export default WithLoader