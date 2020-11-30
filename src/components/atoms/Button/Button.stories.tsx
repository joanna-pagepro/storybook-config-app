import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import Button from ".";
import { ButtonProps } from "./types";
import { ButtonMode, ButtonSize } from "./enums";

export default {
  title: "Atoms/Button",
  component: Button,
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
    backgrounds: {
      values: [
        { name: "light", value: "#fff" },
        { name: "dark", value: "#000" },
      ],
    },
  },
  argTypes: {
    disabled: {
      name: "Is disabled",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    mode: {
      table: { disable: true },
    },
    children: {
      name: "Content",
      control: {
        required: true,
      },
    },
    size: {
      name: "Size",
      control: {
        type: "select",
        options: [ButtonSize.big, ButtonSize.medium, ButtonSize.small],
      },
      defaultValue: ButtonSize.big,
    },
    onClick: { action: "clicked" },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  mode: ButtonMode.primary,
  children: "Button content",
};

export const Secondary = Template.bind({});
Secondary.args = {
  mode: ButtonMode.secondary,
  children: "Button content",
};
Secondary.parameters = {
  backgrounds: { default: "light" },
};
