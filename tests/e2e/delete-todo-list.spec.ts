import { test, expect } from "@playwright/test";

test("Supprimer une todo list", async ({ page }) => {
  await page.goto("/");

  const todoToDelete = page
    .getByTestId("todo-item")
    .filter({ hasText: "Hello la deuxième todo" });

  const deleteButton = todoToDelete.getByTestId("button-delete");
  await deleteButton.click();

  await expect(todoToDelete).toBeHidden();
});
