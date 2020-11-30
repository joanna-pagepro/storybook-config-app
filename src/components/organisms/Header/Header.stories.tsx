import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import Header from ".";
import { headerNavItems } from "./consts";
import { HeaderProps } from "./types";

export default {
  title: "Organisms/Header",
  component: Header,
  argTypes: {
    items: {
      name: "Items",
      control: {
        type: "object",
      },
      defaultValue: headerNavItems,
    },
  },
} as Meta;

export const Base: React.FC<HeaderProps> = (args) => <Header {...args} />;
