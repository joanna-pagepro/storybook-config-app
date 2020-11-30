import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import Input from ".";

export default {
  title: "Atoms/Fields/Input",
  component: Input,
  argTypes: {
    disabled: {
      name: "Is disabled",
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    placeholder: {
      name: "Placeholder",
      control: {
        type: "text",
      },
      defaultValue: "Placeholder",
    },
  },
} as Meta;

export const Base: React.FC = (args) => <Input {...args} />;
