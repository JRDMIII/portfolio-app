import React from "react"

export default function getSkillList() {
    return (
        [
            { 
                symbol: "Py", 
                name: "Python", 
                desc: (
                    <p className="text-left ml-2 font-light text-sm">
                        Created ML models, a CNN for tumor recognition, text games,&nbsp;
                        <a className="text-gray-400 hover:text-gray-200 transition-all duration-500" href="">C.A.R.I,&nbsp;</a>
                        a home automation and voice assistant. 
                    </p>
                ),
            },
            { 
                symbol: "JS", 
                name: "JavaScript", 
                desc: (
                    <p className="text-left ml-2 font-light text-sm">
                        Learnt Nextjs framework, allowing for the creation of clean, sleek animated websites and applications (like this one 😁)
                    </p>
                ),
            },
            { 
                symbol: "CS", 
                name: "C#", 
                desc: (
                    <p className="text-left ml-2 font-light text-sm">
                        Learnt the fundamentals of C# such as OOP, inheritance, polymorphism, generics etc. This was then used in Unity to develop small games. 
                        Currently have an RPG florist game in the works 👀
                    </p>
                ),
            },
            { 
                symbol: "J", 
                name: "Java", 
                desc: (
                    <p className="text-left ml-2 font-light text-sm">
                        Learnt the fundamentals, including OOP, interfaces, generics etc. No projects made in this one 🙈
                    </p>
                ),
            },
            { 
                symbol: "C", 
                name: "C", 
                desc: (
                    <p className="text-left ml-2 font-light text-sm">
                        Learnt the basics regarding loops, functions, selection, data-types, arrays and other features which allow for programming basic functions.
                    </p>
                ),
            },
            { 
                symbol: "NEXT", 
                name: "Next JS", 
                desc: (
                    <p className="text-left ml-2 font-light text-sm">
                        Created <b>this</b> - need anything else?
                    </p>
                ),
            },
        ]
    )
}