import { test, expect } from "@playwright/test";

test.describe("Todo App", () => {
  test("Créer une nouvelle todo list", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("button", { name: "Ajouter" }).click();

    const dialog = page.locator("dialog, [role=dialog]");
    await expect(dialog).toBeVisible();

    const todoText = "Nouvelle tâche";
    await page.locator('input[placeholder="Ajouter une todo"]').fill(todoText);

    await page.locator("select").selectOption("EN COURS");

    await page.getByRole("button", { name: "Ajouter" }).click();

    await expect(dialog).not.toBeVisible();

    const todoItem = page.getByText(todoText);
    await expect(todoItem).toBeVisible();
  });
});
