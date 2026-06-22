import React from "react";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10 "
    >
      {/* <div className='shrink-0 h-full w-75 bg-orange-400 rounded-xl'>
            flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20 Feb 2026</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a Video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis magnam dolore porro nulla a illo?</p>
        </div>
        <div className='shrink-0 h-full w-75 bg-emerald-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20 Feb 2026</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a Video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis magnam dolore porro nulla a illo?</p>
        </div>
        <div className='shrink-0 h-full w-75 bg-pink-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20 Feb 2026</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a Video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis magnam dolore porro nulla a illo?</p>
        </div> */}
      {data.tasks.map((elem, idx) => {
        if (elem.active) {
          return <AcceptTask key={idx} data={elem}/>
        }
        if (elem.newTask) {
          return <CompleteTask key={idx} data={elem}/>
        }
        if (elem.completed) {
          return <NewTask key={idx} data={elem}/>
        }
        if (elem.failed) {
          return <FailedTask key={idx} data={elem}/>
        }
      })}
    </div>
  );
};

export default TaskList;
