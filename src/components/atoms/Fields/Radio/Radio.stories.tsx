import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import Radio from ".";

export default {
  title: "Atoms/Fields/Radio",
  component: Radio,
  argTypes: {
    disabled: {
      name: "Is disabled",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    children: {
      name: "Content",
      control: {
        required: true,
      },
      defaultValue: "Label",
    },
  },
} as Meta;

export const Base: React.FC = (args) => <Radio {...args} />;
Base.args = {
  children: "Label",
};
