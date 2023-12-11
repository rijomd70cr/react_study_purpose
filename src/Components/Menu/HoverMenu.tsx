import React from 'react';
import "./Style.css";

export type menuOptionsProps = {
    name?: string,
    label?: string,
    icon?: React.ReactNode,
    style?: any,
    menuComponent?: React.ReactElement,
    action?: () => void,
    isDisabled?: boolean
};

export type HoverMenuProps = {
    menuOptions: menuOptionsProps[],
    menuTitleComponent: React.ReactNode,
}


export const HoverMenu = ({ menuOptions, menuTitleComponent }: HoverMenuProps) => {
    return (
        <div className="dropdown">
            <div className="drop-btn">{menuTitleComponent}</div>
            <div className="dropdown-content">
                {menuOptions?.length > 0 && menuOptions.map((item, key) => {
                    return item.menuComponent ? item.menuComponent : <div key={key}
                        style={item.style}
                        className="dropdown-sub-content"
                        onClick={item.action}
                    >
                        <span>{item.icon}</span><span>{item.label}</span>
                    </div>
                })}

            </div>
        </div>
    )
}