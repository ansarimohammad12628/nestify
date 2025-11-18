import React from 'react';
import "../CSS/BannerPage.css"

const BannerPage = ({children}) => {
  return (
    <>
     <div className="main-wrapper-container">
          <div className="main-wrapper-bg">
           {children}
          </div>
        </div>
    </>
  )
}

export default BannerPage