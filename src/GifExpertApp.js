import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import 'animate.css';

export const GifExpertApp = ( { defaultCategories = [] }) => {
    const [categories, setCategories] = useState(defaultCategories);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            <ol>
                {
                    categories.map(category => {
                        return <GifGrid category = {category} key = {category}/>
                    })
                }
            </ol>
        </>
    );

}
