import { Typography } from "@mui/material";
import { useEffect, useState } from "react"
import './searchDisplay.css'

export default function Sdisplay(props) {
    const [results, setResults] = useState([]);

    useEffect(() => {
        setResults(props.data);
    }, [props.data]);

    return (
        <section id="searchResultsDisplayWrapper">
            {results.map((recipe, index) => (
                <div key={index}>
                    <Typography variant='h4'>{recipe.name}</Typography>
                    <Typography variant='subtitle1'>{recipe.desc}</Typography>

                </div>
            ))}
        </section>
    );
}
