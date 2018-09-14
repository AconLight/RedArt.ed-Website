import React, { Component } from 'react';
import '../styles/page.css';

const PageContentSlideWrapper = (ContentComponent, title, prev, next) => (
    <div>
        <div className="Page-header">
            <div className="Page-header-left">
            </div>
            <div className="Page-header-center">
                {title}
            </div>
        </div>
        <div className="Page">
            <div className="Page-content">
                <ContentComponent />
            </div>
        </div>
    </div>
);

export default PageContentSlideWrapper;