import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import Checkbox from ".";

export default {
  title: "Atoms/Fields/Checkbox",
  component: Checkbox,
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

export const Base: React.FC = (args) => <Checkbox {...args} />;
Base.args = {
  children: "Label",
};
