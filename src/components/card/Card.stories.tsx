import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: `https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg`,
  title: 'Afghanistan',
  body: {
    population: 123456,
    region: 'Africa',
    capital: 'Kabul'

  }
};