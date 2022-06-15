import React from 'react';

const Tag = ({ backgroundColor, color, borderRadius, label }) => {
  return (
    <div
      style={{
        backgroundColor,
        color,
        borderRadius: `${borderRadius}px`,
        height: "40px",
        display: "inline-flex",
        alignItems: "center",
        padding: "0 1rem",
        margin: "0.5rem"
      }}
    >
      <svg style={{ height: "20px", width: "auto" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
      {label}
    </div>
  )
}

export default Tag;