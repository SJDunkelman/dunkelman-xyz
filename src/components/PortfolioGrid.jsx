import React, {useState} from "react";
import PortfolioCard from "./PortfolioCard.jsx";
import PortfolioJson from "../data/portfolio.json";


export default function PortfolioGrid(){
    const [webThree, setWebThree] = useState(true);
    const [web, setWeb] = useState(true);
    const [saas, setSaaS] = useState(true);
    const [other, setOther] = useState(true);
    

    function handleWebThree(){
        setWebThree(!webThree);
    }

    function handleWeb(){
        setWeb(!web);
    }

    function handleSaaS(){
        setSaaS(!saas);
    }

    function handleOther(){
        setOther(!other);
    }


    let searchCategoryArray = [];
    if (webThree){
        searchCategoryArray.push('Web3');
    }
    if (web){
        searchCategoryArray.push('Web');
    }
    if (saas){
        searchCategoryArray.push('SaaS');
    }
    if (other){
        searchCategoryArray.push('Other');
    }
    
    
    let filteredData = [];

    PortfolioJson["data"].forEach(function(item){
        if(searchCategoryArray.includes(item.category)){
            filteredData.push(item);
        }
    });

    const unselectedBoxClasses = "";

    return (
    <div className="w-full h-full flex flex-col space-y-6">
        <div className="flex justify-center space-x-4 py-4">
            <div className={`cursor-pointer ${webThree === true ? "base-shadow" : ""}`} onClick={handleWebThree}>
                <div className="offset-box py-0.5 px-2">
                    Web3
                </div>
            </div>
            <div className={`cursor-pointer ${web === true ? "base-shadow" : ""}`} onClick={handleWeb}>
                <div className="offset-box py-0.5 px-2">
                    Web
                </div>
            </div>
            <div className={`cursor-pointer ${saas === true ? "base-shadow" : ""}`} onClick={handleSaaS}>
                <div className="offset-box py-0.5 px-2">
                    SaaS
                </div>
            </div>
            <div className={`cursor-pointer ${other === true ? "base-shadow" : ""}`} onClick={handleOther}>
                <div className="offset-box py-0.5 px-2">
                    Other
                </div>
            </div>
        </div>
        {filteredData.map((item, i) => (
            <PortfolioCard title={item.title} imageSrc={item.imageSrc} description={item.description} postURL={item.postURL} category={item.category} key={i} />
        ))}
    </div>
    )
}