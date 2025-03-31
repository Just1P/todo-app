import { test, expect } from "@playwright/test";

test("Créer une nouvelle todo list", async ({ page }) => {
  await page.goto("/");
  const newToDoButton = page.getByTestId("button-add");
  await newToDoButton.click();

  const todoInputLabel = page.getByTestId("todo-input-label");
  const todoStatusSelect = page.getByTestId("todo-status-select");

  const newTodoLabel = "New Todo";
  const newTodoStatus = "À FAIRE";

  await todoInputLabel.fill(newTodoLabel);
  await todoStatusSelect.selectOption(newTodoStatus);

  const submitButton = page.getByTestId("submit-todo-list");
  await submitButton.click();

  const newTodoItem = page.getByText(newTodoLabel);

  expect(newTodoItem).toBeVisible();
});
