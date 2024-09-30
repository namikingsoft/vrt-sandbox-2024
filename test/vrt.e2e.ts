import * as fs from "node:fs";
import * as path from "node:path";
import { test, expect } from "@playwright/test";
import { StoryIndex } from "storybook/internal/types";

const ignoreVrtTag = "ignore-vrt";

const storyJsonPath = path.resolve(__dirname, "../storybook-static/index.json");
const storiesJson = fs.readFileSync(storyJsonPath, "utf-8");
const stories: StoryIndex = JSON.parse(storiesJson);

test.describe.parallel("visual regression testing", () => {
  Object.values(stories.entries).forEach((story) => {
    if (story.type === "docs") return;
    if (story.tags?.includes(ignoreVrtTag)) return;

    test(`snapshot test ${story.title}: ${story.name}`, async ({ page }) => {
      await page.goto(`http://localhost:8080/iframe.html?id=${story.id}`, {
        waitUntil: "networkidle",
      });
      await expect(page).toHaveScreenshot([story.title, `${story.id}.png`]);
    });
  });
});
