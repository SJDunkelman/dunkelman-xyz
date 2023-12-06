import React from "react";

import graduationIcon from "../images/icons/graduation-cap.svg"
import developmentIcon from "../images/icons/development.svg"
import designIcon from "../images/icons/design.svg"

import AboutMeData from "../data/about-me.json";


export default function AboutSection(){
    const experienceData = AboutMeData["experience"];
    const developmentData = AboutMeData["development"];
    const designData = AboutMeData["design"];
    
    developmentData.sort((a, b) => parseFloat(b.rating_1_to_3) - parseFloat(a.rating_1_to_3));
    designData.sort((a, b) => parseFloat(b.rating_1_to_3) - parseFloat(a.rating_1_to_3));
    
    function multiplyElement(n, elem){
      return [...Array(n)].map((e, i) => elem);
    }
    
    function ratingBars(n){
        if(n === 3){
                return multiplyElement(3, <div class="h-4 w-4 bg-green border-[1px] border-light-grey rounded-sm mr-0.5" ></div>)
        }
        if(n === 2){
                let elem =  multiplyElement(2, <div class="h-4 w-4 bg-light-teal border-[1px] border-light-grey rounded-sm mr-0.5" ></div>)
                return elem;
        }
        if(n === 1){
                let elem =  multiplyElement(1, <div class="h-4 w-4 bg-orange border-[1px] border-light-grey rounded-sm mr-0.5" />)
                return elem;
        }
    }

    return (
        <div class="flex flex-col md:flex-row justify-center items-center space-x-2 h-content">
        <div class="flex flex-col space-y-4 md:h-[22rem] justify-center w-96">
            <div class="border-2 border-light-grey flex space-x-4 py-0.5 px-1">
                <div>
                    <img src={graduationIcon} alt="Graduation cap" class="w-16 h-auto" />
                    <p>MSc</p>
                </div>
                <div class="text-left flex flex-col justify-center space-y-1">
                    <p>Risk Management &#38; <br/>
                        Financial Engineering</p>
                    <p>Imperial College London</p>
                </div>
            </div>
            <div class="border-2 border-light-grey flex space-x-4 py-0.5 px-1">
                <div>
                    <img src={graduationIcon} alt="Graduation cap" class="w-16 h-auto" />
                    <p>MChem</p>
                </div>
                <div class="text-left flex flex-col justify-center space-y-1">
                    <p>Chemistry with <br/>
                        study year abroad (US)</p>
                    <p>University of Leicester</p>
                </div>
            </div>
        </div>
        <p class="text-3xl">+</p>
        <div class="border-2 border-light-grey py-1 px-2 h-full md:min-h-[22rem] flex flex-col items-center w-96 lg:w-1/4">
            <p class="text-2xl pb-1">Experience</p>
            <div class="flex items-center">
                <ul class="text-left text-sm space-y-2">
                    {experienceData.map((item) =>(
                            <li>{item.company}, {item.role} <br/>
                            <span class="text-xs">{item.time}</span></li>
                        ))}
                </ul>
            </div>
        </div>
        <p class="text-3xl">=</p>
        <div class="border-2 border-light-grey py-1 px-1 h-full md:min-h-[22rem] flex flex-col items-center w-4/5 lg:w-1/4">
            <p class="text-2xl pb-1">Develop</p>
            {<div class="grid items-center grid-cols-2 pl-2">
            {developmentData.map((item) =>(<>
                <div class="text-sm text-right whitespace-nowrap">
                    {item.skill}
                </div>
                <div class="flex ml-4">
                    {ratingBars(item.rating_1_to_3)}
                </div>
            </>))}
            </div>}
        </div>
        <p class="text-3xl">+</p>
        <div class="border-2 border-light-grey py-1 px-1 h-full md:min-h-[22rem] flex flex-col items-center w-4/5 lg:w-1/4">
            <p class="text-2xl pb-1">Design</p>
            <div class="grid items-center grid-cols-2 pl-4">
            {designData.map((item) =>(<>
                <div class="text-sm text-right whitespace-nowrap">
                    {item.skill}
                </div>
                <div class="flex ml-6">
                    {ratingBars(item.rating_1_to_3)}
                </div>
            </>))}
            </div>
        </div>
    </div>
    )
}

