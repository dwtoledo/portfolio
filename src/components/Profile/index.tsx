import { GitHubProfileContext } from '@/contexts/github-profile'
import { useContext, useState } from 'react'
import { ExternalLink } from 'lucide-react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function Profile() {
  const { profile } = useContext(GitHubProfileContext)

  const developmentSkills = [
    'HTML',
    'CSS',
    'SCSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'AngularJS',
    'RxJS',
    'Material Design',
    'Figma',
    'Microsoft Azure DevOps',
    'REST Client',
    'Bootstrap',
    'Object Oriented Programming',
    'Git',
    'Agile',
    'Scrum',
    'Enhance Processes',
    'Continuous Improvement',
    'Iterative Development',
    'Rapid Adaptation',
    '+ More',
  ]

  const softSkills = [
    'Adaptability',
    'Communication',
    'Resilience',
    'Teamwork',
    'Analytical Thinking',
    'Process Optimization',
    'Quality Assurance',
    'Project Management',
    '+ More',
  ]

  const [tab, setTab] = useState('development')

  const onTabChange = (value: string) => {
    setTab(value)
  }

  return (
    <div className="container py-20 px-6 md:px-20">
      <div className="flex flex-col gap-8 md:flex-row items-center">
        <div className="flex flex-col items-start gap-2 md:w-[420px]">
          <h2 className="text-2xl font-semibold text-primary">About me:</h2>
          <span className="text-4xl font-bold">
            {profile.name || 'Douglas Toledo'}
          </span>
          <code className="bg-muted py-1 font-mono">
            {profile.bio ||
              'Front End Developer | Web Developer | Angular & React with TypeScript'}
          </code>
        </div>
        <Tabs
          className="w-full md:flex-1"
          value={tab}
          onValueChange={onTabChange}
        >
          <TabsList>
            <TabsTrigger value="development" className="text-foreground">
              Software Development:
            </TabsTrigger>
            <TabsTrigger value="soft-skills" className="text-foreground">
              Past Experiences:
            </TabsTrigger>
          </TabsList>
          <TabsContent value="development">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Front End Developer</CardTitle>
                <CardDescription>
                  <a
                    href="https://www.interplayers.com.br/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Worked 2 years at InterPlayers, go to company website"
                    className="underline text-primary flex gap-1"
                  >
                    <span>Worked 2 years at InterPlayers</span>
                    <ExternalLink className="h-[1rem] w-[1rem]" />
                  </a>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-inside list-disc">
                  <li>
                    2 years of experience developing accessible, user-friendly
                    interfaces for responsive web applications using Angular,
                    JavaScript, TypeScript. Utilized Agile methodologies such as
                    Scrum and managed the development cycle using Azure DevOps.
                  </li>
                  <li>
                    My{' '}
                    <em
                      onClick={() => onTabChange('soft-skills')}
                      className="hover:cursor-pointer"
                    >
                      past experiences
                    </em>{' '}
                    as an engineer and entrepreneur have honed my ability to
                    integrate technical and business perspectives for
                    innovative, robust solutions.
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col gap-2 items-start">
                <Badge variant="outline" className="text-sm">
                  Improved skills:
                </Badge>
                <ul className="flex gap-2 flex-wrap items-center">
                  {developmentSkills.map(skill => {
                    return (
                      <li key={skill} className="inline">
                        <Badge variant="secondary" className="text-sm">
                          {skill}
                        </Badge>
                      </li>
                    )
                  })}
                </ul>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="soft-skills">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">
                  Manufacturing Enginner / Startup Entrepreneur
                </CardTitle>
                <CardDescription>
                  <a
                    href="https://flex.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Worked 7 years at Flex, go to company website"
                    className="underline text-primary flex gap-1"
                  >
                    <span>Worked 7 years at Flex</span>
                    <ExternalLink className="h-[1rem] w-[1rem] inline" />
                  </a>

                  <a
                    href="https://viisolutions.com.br/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="4 years of experience at ViiSolutions, go to startup website"
                    className="underline text-primary flex gap-1"
                  >
                    <span>Worked 4 years at ViiSolutions</span>
                    <ExternalLink className="h-[1rem] w-[1rem]" />
                  </a>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-inside list-disc">
                  <li>
                    My soft-skills and teamwork have been improved after working
                    many years in the manufacturing industry and a startup,
                    resulting in high-quality work and analytical,
                    process-driven thinking.
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col gap-2 items-start">
                <Badge variant="outline" className="text-sm">
                  Improved skills:
                </Badge>
                <ul className="flex gap-2 flex-wrap">
                  {softSkills.map(skill => {
                    return (
                      <li key={skill}>
                        <Badge variant="secondary" className="text-sm">
                          {skill}
                        </Badge>
                      </li>
                    )
                  })}
                </ul>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
