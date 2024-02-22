import React from 'react';
import { current } from './customColors';
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



   const designTokens =
    {
        "ui": {
            "teal": {
                "100": {
                    "value": "#4cb5d2",
                    "type": "color"
                },
                "500": {
                    "value": "#0ca8ca",
                    "type": "color"
                },
                "800": {
                    "value": "#03667c",
                    "type": "color"
                }
            },
            "green": {
                "100": {
                    "value": "#8ae5d2",
                    "type": "color"
                },
                "500": {
                    "value": "#02a36d",
                    "type": "color"
                },
                "800": {
                    "value": "#0f8a61",
                    "type": "color"
                }
            },
            "blue": {
                "100": {
                    "value": "#dce3fa",
                    "type": "color"
                },
                "200": {
                    "value": "#c3caf7",
                    "type": "color"
                },
                "300": {
                    "value": "#8fa8ff",
                    "type": "color"
                },
                "400": {
                    "value": "#7883ff",
                    "type": "color"
                },
                "500": {
                    "value": "#616bff",
                    "type": "color"
                },
                "600": {
                    "value": "#2c28fc",
                    "type": "color"
                },
                "700": {
                    "value": "#201db2",
                    "type": "color"
                },
                "800": {
                    "value": "#16147d",
                    "type": "color"
                }
            },
            "magenta": {
                "100": {
                    "value": "#d690a0",
                    "type": "color"
                },
                "500": {
                    "value": "#c92057",
                    "type": "color"
                },
                "800": {
                    "value": "#961842",
                    "type": "color"
                }
            },
            "coral": {
                "100": {
                    "value": "#e6cbc5",
                    "type": "color"
                },
                "500": {
                    "value": "#db5639",
                    "type": "color"
                },
                "800": {
                    "value": "#5c2418",
                    "type": "color"
                }
            },
            "mustard": {
                "100": {
                    "value": "#dfc98f",
                    "type": "color"
                },
                "500": {
                    "value": "#d6a322",
                    "type": "color"
                },
                "800": {
                    "value": "#706c3f",
                    "type": "color"
                }
            },
            "purple": {
                "100": {
                    "value": "#d0a5d9",
                    "type": "color"
                },
                "500": {
                    "value": "#ac20c9",
                    "type": "color"
                },
                "800": {
                    "value": "#6a0a7d",
                    "type": "color"
                }
            },
            "grey": {
                "0": {
                    "value": "#ffffff",
                    "type": "color"
                },
                "25": {
                    "value": "#fafafc",
                    "type": "color"
                },
                "50": {
                    "value": "#f7f7fb",
                    "type": "color"
                },
                "100": {
                    "value": "#f0f0f7",
                    "type": "color"
                },
                "200": {
                    "value": "#e7e6f0",
                    "type": "color"
                },
                "300": {
                    "value": "#c4c3ce",
                    "type": "color"
                },
                "400": {
                    "value": "#b1b0bf",
                    "type": "color"
                },
                "500": {
                    "value": "#737285",
                    "type": "color"
                },
                "600": {
                    "value": "#5b5a6e",
                    "type": "color"
                },
                "700": {
                    "value": "#3e3d4f",
                    "type": "color"
                },
                "800": {
                    "value": "#24223d",
                    "type": "color"
                },
                "900": {
                    "value": "#100e34",
                    "type": "color"
                }
            },
            "sm": {
                "value": "8",
                "type": "spacing"
            },
            "med": {
                "value": "16",
                "type": "spacing"
            },
            "lg": {
                "value": "24",
                "type": "spacing"
            },
            "xl": {
                "value": "32",
                "type": "spacing"
            },
            "xs": {
                "value": "4",
                "type": "spacing"
            },
            "xxl": {
                "value": "48",
                "type": "spacing"
            }
        },
        "brand": {
            "teal": {
                "100": {
                    "value": "#4cb5d2",
                    "type": "color"
                },
                "500": {
                    "value": "#0ca0ca",
                    "type": "color"
                },
                "800": {
                    "value": "#004466",
                    "type": "color"
                }
            },
            "green": {
                "100": {
                    "value": "#8ae5d2",
                    "type": "color"
                },
                "500": {
                    "value": "#02a36d",
                    "type": "color"
                },
                "800": {
                    "value": "#0f8a61",
                    "type": "color"
                }
            },
            "blue": {
                "100": {
                    "value": "#7499fd",
                    "type": "color"
                },
                "500": {
                    "value": "#285ffc",
                    "type": "color"
                },
                "800": {
                    "value": "#14307d",
                    "type": "color"
                }
            },
            "magenta": {
                "100": {
                    "value": "#d690a0",
                    "type": "color"
                },
                "500": {
                    "value": "#c92057",
                    "type": "color"
                },
                "800": {
                    "value": "#961842",
                    "type": "color"
                }
            },
            "coral": {
                "100": {
                    "value": "#e6c7c5",
                    "type": "color"
                },
                "500": {
                    "value": "#db4139",
                    "type": "color"
                },
                "800": {
                    "value": "#5c1b18",
                    "type": "color"
                }
            },
            "mustard": {
                "100": {
                    "value": "#dfc98f",
                    "type": "color"
                },
                "500": {
                    "value": "#d6a322",
                    "type": "color"
                },
                "800": {
                    "value": "#706c3f",
                    "type": "color"
                }
            },
            "purple": {
                "100": {
                    "value": "#d0a5d9",
                    "type": "color"
                },
                "500": {
                    "value": "#ac20c9",
                    "type": "color"
                },
                "800": {
                    "value": "#6a0a7d",
                    "type": "color"
                }
            },
            "sm": {
                "value": "8",
                "type": "spacing"
            },
            "med": {
                "value": "16",
                "type": "spacing"
            },
            "lg": {
                "value": "24",
                "type": "spacing"
            },
            "xl": {
                "value": "32",
                "type": "spacing"
            },
            "xs": {
                "value": "4",
                "type": "spacing"
            },
            "xxl": {
                "value": "48",
                "type": "spacing"
            }
        },
        "$themes": [],
        "$metadata": {
            "tokenSetOrder": [
                "ui",
                "brand"
            ]
        }
   }
/*
    function separateColorsAndSpacing(tokens) {
        const colors = { ui: {}, brand: {} };
        const spacing = { ui: {}, brand: {} };

        for (const theme in tokens) {
            if (tokens.hasOwnProperty(theme)) {
                const tokensObj = tokens[theme];
                for (const key in tokensObj) {
                    if (tokensObj.hasOwnProperty(key)) {
                        const token = tokensObj[key];
                        if (token.type === 'color') {
                            colors[theme][key] = token.value;
                            console.log(token)
                        } else if (token.type === 'spacing') {
                            spacing[theme][key] = token.value;
                        }
                    }
                }
            }
        }

        return { colors, spacing };
    }

    const { colors, spacing } = separateColorsAndSpacing(designTokens);

    console.log('Colors:', colors);
    console.log('Spacing:', spacing);
    console.log('space ' + colors.brand)*/

    function printObject(obj, path = '') {
        let currentPath;
        for (const key in obj) { 
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                 //console.log(path);
                let prefix = path + "-" + key;
                if (path === '') prefix = key;
                printObject(obj[key], prefix);
            } else if (key === 'value') {
                console.log(path + " : " + obj[key]);
                //colors[path] = obj[key]; 

                currentPath = obj[key];
            } else if (key === 'type') {
                console.log("type for " + path + " is " + obj[key]);
                if (obj[key] === 'color') colors[path] = currentPath;
                else if (obj[key] === 'spacing') spacing[path] = currentPath; 
            }
        }
    }

    const colors = {};
    let spacing = {};
    printObject(designTokens);
    console.log("end " + colors['ui-teal-100'] + " and " + spacing['brand-xl']);
    console.log(spacing);
    console.log(colors);

    //const customColors = {};
  /*  console.log(designTokens.ui.teal[100].value);
    for (let category in designTokens.ui) {
        console.log(category);
      
        *//*for (const colorName in designTokens[category]) {
            for (const shade in designTokens[category][colorName]) {
                const key = `${category}-${colorName}-${shade}`;
                const value = designTokens[category][colorName][shade].value;
                customColors[key] = value;
            }
        }*//*
    }
*/
   /* console.log(Object.keys(designTokens));

    function printObject(obj, indent = '') {
        for (const key in obj) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
               // console.log(indent + key + ':');
                printObject(obj[key], indent + '  ');
            } else if (key === 'value') {
                console.log(obj[key]);
            } else if (key === 'type') {
                console.log(obj[key]);
            }

        }
    }

    printObject(designTokens);*/

/*    function getParentObject(obj, targetKey, parent = null, path = []) {
        for (const key in obj) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                const parentObj = getParentObject(obj[key], targetKey, obj, [...path, key]);
                if (parentObj) {
                    return parentObj;
                }
            } else if (key === targetKey) {
                return { parent, path };
            }
        }
        return null;
    }

    const targetKey = 'value';
    const parentObj = getParentObject(designTokens, targetKey);
    console.log(parentObj);*/

 
    /*const customColors = {};

    for (const category in designTokens) {
        console.log("category " + category);
        for (const colorName in designTokens[category]) {
            //console.log("hm " + colorName);
            for (const shade in designTokens[category][colorName]) {
                //console.log("shade " + shade);
                const key = `${category}-${colorName}-${shade}`;
                const value = designTokens[category][colorName][shade].value;
                console.log(key + ": " + value);
                customColors[key] = value;
            }
        }
    }*/

    /*const mergeTokens = (target, source) => {
        for (const key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                if (typeof source[key] === 'object') {
                    target[key] = target[key] || {};
                    mergeTokens(target[key], source[key]);
                } else {
                    target[key] = source[key];
                }
            }
        }
    };


    const tailwindConfig = {
        theme: {
            extend: {},
        },
        variants: {},
        plugins: [],
    };

    // Merge each token type into the corresponding section of the Tailwind configuration
    for (const key in designTokens) {
        if (Object.prototype.hasOwnProperty.call(designTokens, key)) {
            mergeTokens(tailwindConfig.theme.extend, { [key]: designTokens[key] });
        }
    }
    console.log(tailwindConfig);
    console.log("end design tokens");*/

    return (

        <div className="flex">
            <div className="flex flex-col border-slate-50">
                <h2 className="bg-ui-magenta-800 h-20"> STAGEHAND </h2>
                <Sidebar />
            </div>
            <h1 className='flex justify-center w-full bg-teal-500 font-bold text-5xl h-[brand-sm]'> {label} </h1>
         
            </div>

    );
};
