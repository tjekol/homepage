'use client';

import textFile from '@/assets/text.json';
import line from '@/assets/horizontalLine.png';
import Image from 'next/image';
import { ChevronRightIcon, ChevronDownIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

/* eslint-disable react/no-unescaped-entities */
export default function ProjectPage() {
  const projects = textFile.projects;
  const [openProjects, setOpenProjects] = useState<number[]>([]);

  const toggleProject = (index: number) => {
    setOpenProjects(
      (prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index) // already open, remove it
          : [...prev, index], // if closed, add it (open it)
    );
  };

  return (
    <div className='flex w-full flex-col gap-10'>
      <h1 className='text-center uppercase'>Projects🔧</h1>
      <div className='flex flex-row justify-around'>
        <div>
          <div className='flex flex-col space-y-4'>
            {projects.map((project, k) => (
              <div key={k}>
                <div className='flex cursor-pointer flex-col items-center gap-y-2'>
                  <div
                    className='flex flex-row items-center'
                    onClick={() => {
                      toggleProject(k);
                    }}
                  >
                    {openProjects.includes(k) ? (
                      <ChevronDownIcon className='mr-2 scale-150' />
                    ) : (
                      <ChevronRightIcon className='mr-2 scale-150' />
                    )}
                    <p className='font-medium' key={k}>
                      {project.title}
                    </p>
                    <p className='ml-5'>{project.tags}</p>
                  </div>
                  {openProjects.includes(k) && (
                    <>
                      <p className='w-1/2'>{project.description}</p>
                      <a target='_' href={project.link}>
                        {project.link}
                      </a>
                    </>
                  )}
                  <Image className='pt-4' src={line} alt='Seperator' />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
