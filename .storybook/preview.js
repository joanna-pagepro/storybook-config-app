import React from "react";
import { Normalize } from "styled-normalize";
import './storybook.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: {
      order: ['Styles', 'Atoms', 'Molecules', 'Organisms'],
    },
  },
  controls: { hideNoControlsWarning: true },
};

export const decorators = [
  (Story) => (
    <>
      <Normalize />
      <Story />
    </>
  ),
];
