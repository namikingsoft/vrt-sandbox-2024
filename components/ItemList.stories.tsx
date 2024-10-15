import type { Meta, StoryObj } from "@storybook/react";
import { ItemList } from "./ItemList";

const meta = {
  component: ItemList,
  parameters: {
    chromatic: { disableSnapshot: false },
  },
} satisfies Meta<typeof ItemList>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Basic: Story = {};
