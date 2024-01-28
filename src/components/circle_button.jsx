import React, { useState } from 'react';
import './circle_button.css';
import { Tooltip as ReactTooltip } from 'react-tooltip';

export default function CircleButton({ src, srcHover, alt, onClick, tooltip }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div data-tooltip-id={alt}>
            <img
                className="circle_button"
                src={hovered ? srcHover : src}
                alt={alt}
                onClick={onClick}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            />
            {tooltip &&
                <ReactTooltip
                    id={alt}
                    place="bottom"
                    content={tooltip}
                    style={{ backgroundColor: "var(--primaryColor)", zIndex: "900" }}
                />
            }
        </div>
    );
}
