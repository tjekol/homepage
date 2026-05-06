import file from '@/lib/text.json';
import NavigationBar from '@/components/nav-bar';
import { Accordion, Button } from '@heroui/react';

export default function ProjectsPage() {
  const projects = file.projects;

  return (
    <div className='flex flex-col flex-1 items-center bg-background font-sans p-10'>
      <NavigationBar />
      <main className='flex flex-col gap-4 m-auto justify-center w-full md:w-1/2'>
        <h1>Projects🔧</h1>
        <Accordion allowsMultipleExpanded className='w-full'>
          {projects.map((project, k) => (
            <Accordion.Item key={k}>
              <Accordion.Heading>
                <Accordion.Trigger>
                  {project.title}{' '}
                  <div className='font-light ml-2'>/{project.tags}</div>
                  <Accordion.Indicator />
                </Accordion.Trigger>
              </Accordion.Heading>
              <Accordion.Panel>
                <Accordion.Body>
                  {project.description}
                  <br />
                  <br />
                  <Button variant='outline'>
                    <a href={project.link}>{project.link}</a>
                  </Button>
                </Accordion.Body>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </main>
    </div>
  );
}
