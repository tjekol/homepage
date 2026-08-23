import file from '@/lib/text.json';
import NavigationBar from '@/components/nav-bar';
import { Accordion, Button } from '@heroui/react';

export default function ProjectsPage() {
  const projects = file.projects;

  return (
    <div className='bg-background flex flex-1 flex-col items-center p-10 font-sans'>
      <NavigationBar />
      <main className='m-auto flex w-full flex-col justify-center gap-4 md:w-1/2'>
        <h1>Projects🔧</h1>
        <Accordion className='w-full'>
          {projects.map((project, k) => (
            <Accordion.Item key={k}>
              <Accordion.Heading>
                <Accordion.Trigger>
                  {project.title}{' '}
                  <div className='ml-2 font-light'>/{project.tags}</div>
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
