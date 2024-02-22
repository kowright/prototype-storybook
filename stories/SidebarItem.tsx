import React from 'react';

interface SidebarItemProps { //TODO need to add icon slot. subitems dont get icons. 
    /**
     * Does the item have sub-items?
     */
    hasToggle: boolean;
    /**
  * Item contents
  */
    label: string;
    /** something for the image, something for how many sub items should be in toggle TODO */
    /**
    * Is the item picked?
    */
    isSelected: boolean;
    /**
   * Sub-items
   */
    subItems?: Array<SidebarItemProps>;
    /**
  * Is toggle open?
  */
    openToggle: boolean;
    /**
* Is a sub-item? To differentiate between item with no dropdown but not a sub item and a sub item 
*/
    isSubItem: boolean; 
    /**
  * Optional click handler
  */
    onClick?: (buttonName: string) => void;
}

export const SidebarItem = ({
    hasToggle = false,
    label,
    isSelected = false,
    subItems,
    openToggle = false,
    isSubItem = false,
    ...props
}: SidebarItemProps) => {

    const textStyle = 'font-gabarito text-[color:var(--UI-Grey-Grey-900,#100E34)] text-base not-italic leading-[normal]';
    let backgroundColor = isSubItem ? 'bg-[rgba(220,227,250,0.4)]' : "bg-transparent";
    backgroundColor = isSelected ? 'bg-[rgba(220,227,250,1.0)]' : backgroundColor; //combine with below text style?
    const textSelectedStyle = isSelected ? 'font-bold' : "font-semibold";
    const itemStyle = 'flex w-[271px] h-12 justify-between items-start pl-12 pr-8 py-3';
    let showIcon = isSubItem ? 'bg-transparent' : 'bg-teal-300';
    
    let subItemComponents: any;
    if (openToggle) {
        subItemComponents = subItems?.map(data => {
            return <SidebarItem {...data} />
        });
    }

    return (
        <>
          {isSelected && <div className='bg-[rgba(120,131,255,1.0)] w-1 h-12 absolute'> </div>}
            <button type="button" className={[itemStyle, backgroundColor].join(' ')} onClick={() => props.onClick && props.onClick(label)}>
                <div className='justify-start flex items-center'>
                    <div className={["w-6 h-6 mr-[8px]", showIcon].join(' ')}> </div>
                    <p className={[textStyle, textSelectedStyle].join(' ')}>{label}</p>
                 </div>
                {hasToggle && <div className='top-6 left-[180px] '>&#8595; </div>}
          </button>
          {openToggle && subItemComponents}
        </>
    );
};
