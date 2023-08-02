import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Main from '../LayOut/Main';
import Home from '../Pages/Home/Home/Home';
import ProjectManagement from '../Pages/ProjectsManagement/ProjectManagement';
import BannerOfProjects from '../Pages/ProjectsManagement/BannerOfProjects';
import Data from '../Pages/Data/Data';
import Customar from '../Pages/Customar/Customar';
import Development from '../Pages/Devepoment/Development';
import Business from '../Pages/Business/Business';
import Affiliate from '../Pages/Affiliate/Affiliate';


  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:'/projects_management',
          element:<ProjectManagement></ProjectManagement>,
          children:[
            {
              path:'/projects_management',
              element: <BannerOfProjects
              details={"Project management software is used to assist with project planning, tracking, and execution for startups and any businesses. It is designed to help project managers and teams stay organized and track the progress of projects, so that they can be completed on time and on budget. Project management software can be used to track tasks and resources, manage budgets, and create reports. It can also be used to collaborate on projects and to assign tasks to team members. With project management software, project managers can easily keep track of the progress of their projects and ensure that all tasks are completed as expected."}
              heading={"Project Management Software"}
              ></BannerOfProjects>
            },
            {
              path:'/projects_management/productivity',
              element: <BannerOfProjects
              details={"Productivity software is designed to increase productivity of a company like a startup or any size of business. It includes tools such as word processors, spreadsheets, graphics programs, database applications, email clients, and other tools that help users to efficiently and effectively complete their tasks. Productivity tool is designed to make it easier for users to manage their time, resources, and workflow. It can also help users to organize their data, automate tasks, and share information with colleagues."}
              heading={"Productivity Software"}
              ></BannerOfProjects>
            },
            {
              path:'/projects_management/task',
              element: <BannerOfProjects
              details={"Task Management Software helps you to organize and manage tasks. It allows you to create, assign, prioritize, and track tasks in an efficient manner. Task Management Software can be used by individuals, teams, or entire organizations to improve productivity and organization. It can help to streamline processes and ensure that tasks are completed in a timely manner. It can also be used to monitor progress and provide visibility into what tasks need to be completed. Task Management Software is an invaluable tool for any business looking to stay organized and on top of their tasks."}
              heading={"Task Management Software"}
              ></BannerOfProjects>
            },
            {
              path:'/projects_management/colaboretion',
              element: <BannerOfProjects
              details={"Collaboration software enables team members to work together in a shared environment to complete a task. It can include tools for communication, document sharing, task management, and more. It is designed to help groups of people efficiently collaborate on projects and tasks, regardless of where they are located. Collaboration tool helps teams to communicate, assign tasks, share ideas, and track progress, making it an essential tool for businesses who want to stay ahead of the competition."}
              heading={"Collaboration Software"}
              ></BannerOfProjects>
            },
          ]
        },
        {
          path:"/data",
          element:<Data></Data>,
          children:[
            {
              path:'/data',
              element: <BannerOfProjects
              details={"Data software is designed to store, manage, and analyze data. It can be used to create reports and data visualizations, and can also be used to track and store large amounts of data. Common features of data software include data storage, data analysis, data visualization, and data mining. Data software are used in a variety of industries, including finance, healthcare, business, and marketing."}
              heading={"Data Software"}

              ></BannerOfProjects>
              // todo make dynamic btn
            },
          ]
        },
        {
          path:"/customer",
          element:<Customar></Customar>,
          children:[
            {
              path:'/customer',
              element: <BannerOfProjects
              details={"Customer Software is a term used to refer to any software that is used to meet the needs of customers. This type of software is designed to provide customers with a convenient and efficient way to access and use products and services. Examples of common customer software include customer relationship management (CRM) systems, leead management software, and customer experience software. Customer software is essential for any business that wants to deliver a superior customer experience."}
              heading={"Customer Software"}

              ></BannerOfProjects>
              // todo make dynamic btn
            },
          ]
        },
        {
          path:"/development",
          element:<Development></Development>,
          children:[
            {
              path:'/development',
              element: <BannerOfProjects
              details={"Development Software is used to create applications, programs, websites or any digital asset. It enables developers to design, code, test and debug software applications in a variety of programming languages. It includes compilers, debuggers, interpreters, linkers and text editors, as well as various frameworks, libraries and other development tools. Development software are used by software engineers, software developers, web designers, other professionals, or even by people with no development skills, thanks to nocode software."}
              heading={"Development Software"}

              ></BannerOfProjects>
              // todo make dynamic btn
            },
          ]
        },
        {
          path:"/data",
          element:<Data></Data>,
          children:[
            {
              path:'/data',
              element: <BannerOfProjects
              details={"Data software is designed to store, manage, and analyze data. It can be used to create reports and data visualizations, and can also be used to track and store large amounts of data. Common features of data software include data storage, data analysis, data visualization, and data mining. Data software are used in a variety of industries, including finance, healthcare, business, and marketing."}
              heading={"Data Software"}

              ></BannerOfProjects>
              // todo make dynamic btn
            },
          ]
        },
        {
          path:'/business',
          element:<Business></Business>
        },
        {
          path:'/affiliate',
          element:<Affiliate></Affiliate>
        }
      ]
    },
  ]);

export default router;