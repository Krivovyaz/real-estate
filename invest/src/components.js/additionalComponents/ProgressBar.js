import React from 'react'

function ProgressBar({progress}) {

  const containerStyles = {
    height: 15,
    backgroundColor: "#ebedf3",
    borderRadius: 50,
    marginTop: 15,
    marginBottom: 15
  }

  const fillerStyles = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: "#00aae1",
    borderRadius: 'inherit',
    textAlign: 'right'
  }


  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
      </div>
    </div>
  );
};

export default ProgressBar
