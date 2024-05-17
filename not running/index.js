// Array to store projects
let projects = [];

// Function to create a new project
function createProject() {
  const projectName = document.getElementById('projectName').value;
  if (projectName.trim() !== '') {
    const newProject = { name: projectName, id: Date.now() };
    projects.push(newProject);
    renderProjects();
    document.getElementById('projectName').value = '';
  }
}

// Function to delete a project
function deleteProject(id) {
  projects = projects.filter(project => project.id !== id);
  renderProjects();
}

// Function to render all projects
function renderProjects() {
  const projectList = document.getElementById('projectList');
  projectList.innerHTML = '';

  projects.forEach(project => {
    const li = document.createElement('li');
    li.textContent = project.name;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => deleteProject(project.id);

    const viewButton = document.createElement('button');
    viewButton.textContent = 'View';
    viewButton.onclick = () => viewProject(project.id);

    li.appendChild(deleteButton);
    li.appendChild(viewButton);

    projectList.appendChild(li);
  });
}

// Function to view a single project
function viewProject(id) {
  const project = projects.find(project => project.id === id);
  if (project) {
    alert(`Project Name: ${project.name}`);
  }
}
