const employees = [
  {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
          {
              "taskTitle": "Project Report",
              "taskDescription": "Complete the quarterly project report.",
              "taskDate": "2025-03-21",
              "category": "Documentation",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
          },
          {
              "taskTitle": "Client Meeting",
              "taskDescription": "Attend client discussion on software development.",
              "taskDate": "2025-03-22",
              "category": "Meeting",
              "active": false,
              "newTask": true,
              "completed": false,
              "failed": false
          }
      ]
  },
  {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
          {
              "taskTitle": "Bug Fixing",
              "taskDescription": "Resolve UI bugs in the dashboard module.",
              "taskDate": "2025-03-20",
              "category": "Development",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
          },
          {
              "taskTitle": "Testing API",
              "taskDescription": "Test REST API for performance improvements.",
              "taskDate": "2025-03-23",
              "category": "Testing",
              "active": false,
              "newTask": true,
              "completed": false,
              "failed": false
          }
      ]
  },
  {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
          {
              "taskTitle": "Database Migration",
              "taskDescription": "Migrate the database to the new cloud server.",
              "taskDate": "2025-03-24",
              "category": "Database",
              "active": false,
              "newTask": true,
              "completed": false,
              "failed": false
          }
      ]
  },
  {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
          {
              "taskTitle": "Security Audit",
              "taskDescription": "Perform a security audit for the application.",
              "taskDate": "2025-03-19",
              "category": "Security",
              "active": true,
              "newTask": false,
              "completed": true,
              "failed": false
          }
      ]
  },
  {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
          {
              "taskTitle": "Team Presentation",
              "taskDescription": "Prepare and deliver a presentation on project progress.",
              "taskDate": "2025-03-25",
              "category": "Presentation",
              "active": false,
              "newTask": true,
              "completed": false,
              "failed": false
          }
      ]
  }
];

const admin = [
  {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
  }
];

export const setLocalStorage=()=>{
  localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage=()=>{
    const employees=JSON.parse(localStorage.getItem('employees'))
    const admin=JSON.parse(localStorage.getItem('admin'))

    console.log(employees,admin)
}


