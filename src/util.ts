const input = document.querySelector<HTMLInputElement>("#taskInput")!;
const lists = document.querySelector<HTMLUListElement>("#lists")!;

type Task = {
  id: string;
  description: string;
};

const renderTask = (task: Task) => {
  const li = document.createElement("li");
  const button = document.createElement("button");
  const span = document.createElement("span");

  span.textContent = task.description;
  button.textContent = "X";

  button.addEventListener("click", () => {
    removeTask(task.id);
    li.remove();
  });

  li.append(span, button);
  lists.append(li);
};

const intialData = localStorage.getItem("tasks");
const data: Task[] = intialData ? JSON.parse(intialData) : [];
intialData && data.forEach(renderTask);

const saveTaskInLocalStorage = () => {
  localStorage.setItem("tasks", JSON.stringify(data));
};

const removeTask = (taskId: string) => {
  data.splice(
    data.findIndex((task) => task.id === taskId),
    1
  );
  saveTaskInLocalStorage();
};

export const handleSubmit = (e: SubmitEvent) => {
  e.preventDefault();
  if (input.value) {
    const task = { id: Math.random() + "", description: input.value };
    data.push(task);
    renderTask(task);
    saveTaskInLocalStorage();
    input.value = "";
  }
};
