import './projects.css';

function Projects() {
    return(
        <div id='projects'>
            <h2>Projects</h2>
            <div className='project'>
                <h4>Project #1 </h4>
                <p>Project #1 Description</p>
                <a target='_blank' href="https://github.com/augustinmuyl/Outreach-Outlet/"><button className='github'></button></a>
                <h4>Project #2 </h4>
                <p>Project #2 Description</p>
                <a target='_blank' href="https://github.com/augustinmuyl/"><button className='github'></button></a>
            </div>
        </div>
    )
}

export default Projects;