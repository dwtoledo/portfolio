import { GitHubProfileContext } from '@/contexts/github-profile'
import { useContext } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'

export function Profile() {
  const { profile } = useContext(GitHubProfileContext)

  const technicalSkills = [
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
    'OOP',
    'Object Oriented Programming',
    'Git',
    '+ More',
  ]
  const agileScrumSkills = [
    'Agile',
    'Scrum',
    'Enhance Processes',
    'Continuous Learning',
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

  return (
    <div className="container py-20 px-6 md:px-20">
      <div className="flex flex-col gap-8 md:flex-row items-center">
        <div className="flex flex-col items-start gap-2 md:w-[420px]">
          <span className="text-4xl font-bold">
            Hey, I'm{' '}
            <strong className="text-primary">
              {profile.name || 'Douglas Toledo'}
            </strong>
          </span>
          <code className="bg-muted py-1 font-mono">
            {profile.bio ||
              'Software Engineer | Front End Developer | Angular and React.js Development'}
          </code>
        </div>
        <Tabs defaultValue="software" className="w-full md:flex-1">
          <TabsList>
            <TabsTrigger value="software">Software</TabsTrigger>
            <TabsTrigger value="agile-scrum">Agile/Scrum</TabsTrigger>
            <TabsTrigger value="soft-skills">Soft-skills</TabsTrigger>
          </TabsList>
          <TabsContent value="software">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Front End Developer</CardTitle>
                <CardDescription>
                  2 years of experience at{' '}
                  <a
                    href="https://www.interplayers.com.br/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <u>InterPlayers</u>
                  </a>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <span>
                    Experienced in developing, testing and implementing
                    accessible and user-friendly interfaces for responsive web
                    applications;
                  </span>
                  <br />
                  <br />
                  <div className="flex gap-2 flex-wrap">
                    {technicalSkills.map(skill => {
                      return (
                        <Badge variant="secondary" className="text-sm">
                          {skill}
                        </Badge>
                      )
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="agile-scrum">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Front End Developer</CardTitle>
                <CardDescription>
                  2 years of experience at{' '}
                  <a
                    href="https://www.interplayers.com.br/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <u>InterPlayers</u>
                  </a>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <span>
                    Skilled in Agile/Scrum methodologies, collaborating with
                    cross-functional teams, and efficiently managing the
                    development life cycle.
                  </span>
                  <br />
                  <br />
                  <div className="flex gap-2 flex-wrap">
                    {agileScrumSkills.map(skill => {
                      return (
                        <Badge variant="secondary" className="text-sm">
                          {skill}
                        </Badge>
                      )
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="soft-skills">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">
                  Manufacturing Enginner / Startup Entrepreneur
                </CardTitle>
                <CardDescription>
                  7 years of experience at{' '}
                  <a href="https://flex.com/" target="_blank" rel="noreferrer">
                    <u>Flex</u>
                  </a>
                  <br />4 years of experience at{' '}
                  <a
                    href="https://viisolutions.com.br/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <u>ViiSolutions</u>
                  </a>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <span>
                    Enhanced soft-skills and teamwork through seven years as a
                    Manufacturing Engineer and four as an Entrepreneur,
                    resulting in high-quality work and analytical,
                    process-driven thinking.
                  </span>
                  <br />
                  <br />
                  <div className="flex gap-2 flex-wrap">
                    {softSkills.map(skill => {
                      return (
                        <Badge variant="secondary" className="text-sm">
                          {skill}
                        </Badge>
                      )
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
