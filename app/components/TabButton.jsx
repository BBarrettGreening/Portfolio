import React from 'react'

const TabButton = ({ active, selectTab, children }) => {
    const borderColor = active ? "white" : "transparent";
    const borderWidth = active ? "4px" : "0px"; 

    return (
        <button onClick={selectTab}>
            <p
                className={`mr-3 font-semibold hover:text-white`}
                style={{
                    borderBottom: `solid ${borderWidth} ${borderColor}`,
                    color: active ? 'white' : '#adb7be',
                }}
            >
                {children}
            </p>
        </button>
    );
}

export default TabButton