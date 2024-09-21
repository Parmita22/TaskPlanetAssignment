import React from 'react';
import './TaskList.css';
import telegram from '../assets/images/telegram.png';

const task = [
  { title: 'Instagram', points: '129', imgSrc: telegram },
  { title: 'Instagram', points: '129', imgSrc: telegram },
  { title: 'Instagram', points: '129', imgSrc: telegram },
  { title: 'Instagram', points: '129', imgSrc: telegram },
  { title: 'Instagram', points: '129', imgSrc: telegram },
  { title: 'Instagram', points: '129', imgSrc: telegram },
  { title: 'Instagram', points: '129', imgSrc: telegram },
  { title: 'Instagram', points: '129', imgSrc: telegram },
]
const TaskList = () => {
  return (
    <div className="c-container">
      <h2 className="task-list-heading">Task List</h2> {/* Heading added */}
      {task.map((task, index) => (
        <div className={`cardt  mt-4`} key={index}> {/* Keep the same color for all cards */}
          <img src={task.imgSrc} className="card-img-top" alt={task.title} />
          <div className="card-body">
            <div className="text-section">
              <h5 className="card-title">{task.title}</h5>
              <p className="card-text">Some quick example text to build on the card's content.</p>
            </div>
            <div className="cta-section">
              <a href="#" className="btn btn-light">{task.points} Points</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
