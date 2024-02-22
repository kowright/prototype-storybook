import React from 'react';
import { Sidebar } from './sidebar'

interface TestPageProps { 
    /**
  * Item contents
  */
    label: string;
}

export const TestPage= ({
    label,
    ...props
}: TestPageProps) => {


    return (

        <div className="flex">
            <div className="flex flex-col border-slate-50">
                <h2 className="bg-ui-magenta-800 h-20"> WEBSITE </h2>
                <Sidebar />
            </div>
            <div className='h-brand-xxl flex justify-center w-full bg-ui-purple-500 font-bold text-5xl'> {label} </div>
         
            </div>

    );
};
