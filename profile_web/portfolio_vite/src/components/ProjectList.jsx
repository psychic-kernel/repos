import '../stylesheets/ProjectList.css';
import { useEffect, useState } from 'react';

const ProjectList = () => {

    const projectImageLinks = [
        { id: 0, src: "https://picsum.photos/200/300/?blur=2", alt: "Project image preview link"},
        { id: 1, src: "https://picsum.photos/200/300?grayscale", alt: "Project image preview link"},
        { id: 2, src: "https://picsum.photos/seed/picsum/200/300", alt: "Project image preview link"},
        { id: 3, src: "https://picsum.photos/id/237/200/300", alt: "Project image preview link"},
        { id: 4, src: "https://picsum.photos/200/300.webp", alt: "Project image preview link"}
    ];
    const [className, setClassName] = useState('')

    //
    const handleAnimate = () => {
        try {
            if (className == ''){
                setClassName('active')
            }
            if (className == 'active'){
                setClassName('');
            }
        }
        catch(err){
            console.error("Error in handleAnimate / useEffect: ", err )
        }
    }
    useEffect(() => {
        
        handleAnimate();

    },[])
    
    return(
        <main>
            <h2></h2>
            <ul className="project-list" >
            { projectImageLinks.map((i) => (
                <li key={i.id}>
                    <a href="#"><img className={className} onMouseOver={handleAnimate} src={i.src} alt={i.alt}/></a>
                </li>
            ))}
            </ul>    
        </main>
    )
};
export default ProjectList;