import React, { useState, useEffect  } from 'react';
import axios from 'axios';
import Projects from './Projects'

function Myprojects() {
  const [add, setAdd] = useState(false);
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  // submit process starts
  const saveData = () => {
    const projectData = {
      Title: title,
      Details: details
    };
    axios.post('http://localhost:5000/projects/', projectData)
      .then(() => {
        alert('Project saved successfully');
      })
      .catch((error) => {
        alert('We are facing some problem, please try again later: ' + error.message);
      });
  };

  const allFields = () => {
    return title.trim() !== '' && details.trim() !== '';
  };

  const handleAddButtonClick = () => {
    if (!allFields()) {
      alert('Please enter all fields');
    } else {
      saveData();
      setAdd(false);
      setTitle('');
      setDetails('');
    }
  };

  // getting datas process starts
  const [projects, setProjects] = useState([]);

    const fetchProjects = () => {
        axios.get(`http://localhost:5000/projects/`)
          .then((res) => {
            setProjects(res.data);
          })
          .catch((err) => {
            console.error(err.message);
          });
      };

      useEffect(() => {
        fetchProjects();
      },[]);

      useEffect(() => {
        const intervalId = setInterval(() => {
          fetchProjects();
        }, 100);
    
        return () => clearInterval(intervalId); 
      }, [fetchProjects]);

  return (
    <div id='myprojects' className='myprojects'>
      <div>
        {add && (
          <div className='add'>
            <label>Project name</label>
            <br />
            <br />
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type='text'
              placeholder='Write project title ... '
            />
            <br /><br />
            <label>Project Details</label>
            <br />
            <br />
            <textarea
              onChange={(e) => setDetails(e.target.value)}
              value={details}
              placeholder='Write your project details here ...'
            ></textarea>
            <br /><br />
            <button onClick={handleAddButtonClick}>Submit</button>
            <br/><br/>
            <button onClick={()=>setAdd(false)}>Cancel</button>
          </div>
        )}
      </div>

      <img
        onClick={() => {
          setAdd(true);
        }}
        className='addprojectscomp'
        src='./addprojectscomp.png'
        alt='Add project'
      />

      {projects.map((project, index) => (
                    <Projects key={index} title={project.Title} details={project.Details} Id={project._id}/>
                ))}
    </div>
  );
}

export default Myprojects;
