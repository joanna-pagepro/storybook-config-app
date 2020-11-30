import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import Layout, { Inner } from ".";

export default {
  title: "Styles/Layout",
  component: Layout,
  parameters: {
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#fff" },
        { name: "dark", value: "#000" },
      ],
    },
  },
  argTypes: {
    children: {
      name: "Content",
      control: {
        required: true,
      },
    },
  },
} as Meta;

export const Base: React.FC = () => <Layout>Layout content</Layout>;

export const WithInner: React.FC = () => <Inner>Inner content</Inner>;
