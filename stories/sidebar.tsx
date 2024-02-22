import React from 'react';
import { SidebarItem } from './SidebarItem';

interface SidebarProps {
    /**
     * Is the sidebar open?
     */
    open?: boolean;
}

export const Sidebar = ({
    open = true,
    ...props
}: SidebarProps) => {

    function Click(buttonName:string) {
        console.log('You clicked ' + buttonName);
    }

    return (
        open && <nav>
            <SidebarItem hasToggle={false} label='Upload' isSelected={false} openToggle={false} isSubItem={false} onClick={(buttonName) => Click(buttonName)}/>
            <SidebarItem hasToggle={true} label='Library' isSelected={false} openToggle={true} isSubItem={false} onClick={(buttonName) => Click(buttonName)}
                subItems={[
                    { hasToggle: false, label: 'Properties', isSelected: false, openToggle: false, isSubItem: true, onClick:Click },
                    { hasToggle: false, label: 'Tours', isSelected: true, openToggle: false, isSubItem: true, onClick: Click},
                    { hasToggle: false, label: 'Elements', isSelected: false, openToggle: false, isSubItem: true, onClick: Click },
                    { hasToggle: false, label: 'Artifacts', isSelected: false, openToggle: false, isSubItem: true, onClick: Click },
                ]} />
            <SidebarItem hasToggle={false} label='Manage' isSelected={false} openToggle={false} isSubItem={false} onClick={(buttonName) => Click(buttonName)}/>
            <SidebarItem hasToggle={false} label='Support' isSelected={false} openToggle={false} isSubItem={false} onClick={(buttonName) => Click(buttonName)}/>
        </nav> 
    );
};
