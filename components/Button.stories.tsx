import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";

const meta = {
  component: Button,
  args: {
    color: "primary",
    onClick: fn(),
    children: <>Button</>,
  },
  parameters: {
    chromatic: { disableSnapshot: false },
  },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Basic: Story = {};
