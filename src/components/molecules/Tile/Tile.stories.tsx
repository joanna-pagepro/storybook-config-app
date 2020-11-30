import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import Tile from ".";
import { TileProps } from "./types";

export default {
  title: "Molecules/Tile",
  component: Tile,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "400px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    href: {
      name: "Href",
      control: {
        type: "text",
        required: true,
      },
      defaultValue: "#",
    },
    src: {
      name: "Src",
      control: {
        type: "text",
        required: true,
      },
      defaultValue:
        "https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop",
    },
    alt: {
      name: "Alt",
      control: {
        type: "text",
        required: true,
      },
      defaultValue: "Image alt",
    },
    title: {
      name: "Title",
      control: {
        type: "text",
        required: true,
      },
      defaultValue: "Title",
    },
    date: {
      name: "Date",
      control: {
        type: "text",
        required: true,
      },
      defaultValue: "29.11.2020",
    },
    description: {
      name: "Description",
      control: {
        type: "text",
        required: true,
      },
      defaultValue:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  },
} as Meta;

export const Base: React.FC<TileProps> = (args) => <Tile {...args} />;
