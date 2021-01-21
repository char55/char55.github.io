import React, { useState } from 'react';
import './Tile.css';

function Tile({ projectName, projectLink, projectDescription, githubLink }) {
  const [size, setSize] = useState(false);
  const handleSize = () => setSize(!size);
  console.log(projectName, projectLink, projectDescription, githubLink);

  return projectName && projectDescription && githubLink ? (
    <div
      onClick={handleSize}
      className={'small-size'}
      // className={size ? "large-size" : "small-size"}
    >
      <a href={projectLink ? projectLink : githubLink}>
        <div className="tile-title">{projectName} </div>
      </a>
      <div
        className="tile-description"
        // would have to be done on Projects level
        // when click fo rlarger size, all of site gains shadow and tile expands and fills screen
      >
        {projectDescription}
        <a href={githubLink}>
          <div className="tile-github-footer">code on github</div>
        </a>
      </div>
    </div>
  ) : (
    <>Missing vital information</>
  );
}

export default Tile;
